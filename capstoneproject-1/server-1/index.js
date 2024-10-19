require("./db/mongo.connection");

//The Javascript framework to create APIs
const express = require("express");

//3rd party Express MiddleWare
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

//use process.env variables to Keep private variables
//be sure to ignore the .env file in github
require("dotenv").config();
console.log(process.env)

//App
const app = express();

//App MiddleWare
const WhiteList = ["*"];

const corsOption = {
  origin: function (origin, callback) {
    if (WhiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed By CORS"));
    }
  },
};

//creates headers that protects from attacks(security)
app.use(helmet());
//allows/disallows cross-site communication
app.use(cors(corsOption));
//turns response into usable format
app.use(bodyParser.json());
//log request
app.use(morgan("combined")); //use combined or tiny

app.use("/api/health-check", (req, res) => {
  res.send("App is Working");
});

//App Server Connection
app.listen(process.env.PORT, () =>
  console.log(`Server is Stared on http://localhost:${process.env.PORT}`)
);
