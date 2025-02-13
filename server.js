const express = require("express");
const app = express();
const PORT = process.env.PORT || 3009;
const cors = require("cors");
const userRoutes = require("./routes/routes");
const limiter = require("./middleware/middleware");
const startCluster = require("./cluster/cluster");

app.use(cors());
app.use(express.json());
app.use(limiter);
app.all("*", userRoutes);

const connectionURI =
  "mongodb+srv://wasif:wasif9900@cluster0.pcytu.mongodb.net/EVIDENCES";

// Call the cluster logic and pass the necessary arguments
startCluster(app, PORT, connectionURI);
