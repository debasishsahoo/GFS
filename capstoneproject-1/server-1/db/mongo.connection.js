const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(process.env.DBURL)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });