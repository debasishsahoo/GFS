//Need to Pass DB Connection at the Top
require("./src/db/mongo.connect");
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

const adminRouter=require('./src/routes/admin.route')


//Create App
const app = express();

//App MiddleWare
const WhiteList = ["*"]; // '*' is for only Dev Env but in Server Env we need to pass proper IP address

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


//App Routing 
app.use("/api/health-check", (req, res) => {
  res.send("App is Working");
});

app.use("/api/admin",adminRouter)


//App Server Connection
app.listen(process.env.PORT, () =>
  console.log(`Server is Stared on http://localhost:${process.env.PORT}`)
);
