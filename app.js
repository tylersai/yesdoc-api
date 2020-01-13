const express = require('express');
const app = express();
const port = 2000;

const cors = require('cors');

// Middleware
app.use(cors());

// Router
const employeeController = require('./controller/EmployeeController');
app.use('/employee', employeeController);

app.listen(port, () => console.log(`Listening on port ${port}!`));