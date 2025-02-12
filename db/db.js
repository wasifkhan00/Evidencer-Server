const mongoose = require("mongoose");

const dbConnect = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.log("Database connection error:", err));
};

module.exports = dbConnect;
