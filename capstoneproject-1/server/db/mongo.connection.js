const mongoose = require("mongoose");

const dbUrl = "mongodb://127.0.0.1:27017/capstone1";

mongoose
  .connect(dbUrl)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
