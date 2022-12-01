const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// App healthcheck (root)
app.get("/", (req, res) => {
  res.json({
    name: "yesdoc-api",
    description: "Backend RESTful API for Yes Doctor Employee Benefit Platform using Express framework of NodeJS ",
    version: "v1.0.0",
  });
});

// Router
const employeeController = require("./controller/EmployeeController");
app.use("/employee", employeeController);
const transController = require("./controller/TransactionController");
app.use("/transaction", transController);

// Database
const mongoose = require("mongoose");
mongoose.connect(process.env.CON_LINK, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("Connected to MongoDB!")
);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}!`));
