const express = require("express");
const app = express();
const PORT = process.env.PORT || 3009;
const cors = require("cors");
const userRoutes = require("./routes/routes");
const dbConnect = require("./db/db");
const limiter = require("./middleware/middleware");

app.use(cors());
app.use(express.json());
app.use(limiter)
app.all("*", userRoutes);

const connectionURI =
  process.env.DBURL

const startServer = async () => {
  await dbConnect(connectionURI);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
