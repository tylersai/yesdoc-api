const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv/config');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Router
const employeeController = require("./controller/EmployeeController");
app.use("/employee", employeeController);
const transController = require("./controller/TransactionController");
app.use("/transaction", transController);

// Database
const mongoose = require("mongoose");
mongoose.connect(
  process.env.CON_LINK,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to MongoDB!")
);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}!`));
