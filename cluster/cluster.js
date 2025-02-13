const cluster = require("cluster");
const os = require("os");
const mongoose = require("mongoose");

const numCPUs = os.cpus().length; // Number of CPU cores

const MAX_RETRIES = 10;
const RETRY_DELAY = 6000;

const startCluster = (app, port, connectionURI) => {
  if (cluster.isMaster) {
    console.log(`Master process is running on PID ${process.pid}`);

    // Fork workers based on the number of CPU cores
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork(); // Fork a new worker
    }

    // Listen for worker crashes and fork a new worker if needed
    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      cluster.fork(); // Fork a new worker to replace the dead one
    });
  } else {
    // Retry logic for connecting to MongoDB
    let retryCount = 0;

    const connectToMongoDB = () => {
      mongoose
        .connect(connectionURI)
        .then(() => {
          console.log("MongoDB connected...");
          app.listen(port, () => {
            console.log(`Worker ${process.pid} is listening on port ${port}`);
          });
        })
        .catch((err) => {
          retryCount++;
          console.log(`Error connecting to MongoDB: ${err.message}`);
          if (retryCount < MAX_RETRIES) {
            console.log(
              `Retrying to connect to MongoDB... Attempt ${retryCount} of ${MAX_RETRIES}`
            );
            setTimeout(connectToMongoDB, RETRY_DELAY);
          } else {
            console.log("Max retries reached. Exiting the worker process...");
            process.exit(1);
          }
        });
    };

    connectToMongoDB();
  }
};

module.exports = startCluster;
