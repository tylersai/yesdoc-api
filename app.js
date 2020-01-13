const express = require("express");
const app = express();
const port = 2000;

const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv/config');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Router
const employeeController = require("./controller/EmployeeController");
app.use("/employee", employeeController);

// Database
const mongoose = require("mongoose");
mongoose.connect(
  process.env.CON_LINK,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to MongoDB!")
);

app.listen(port, () => console.log(`Listening on port ${port}!`));
