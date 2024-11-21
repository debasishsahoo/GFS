const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ConnectDB = require("./config/db");

const app = express();
ConnectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/user.route'))
app.use('/api/product',require('./routes/product.route'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));
