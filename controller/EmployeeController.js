const express = require("express");

const Employee = require('../model/Employee');
const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  try {
    const list = await Employee.find();
    res.json(list);
  } catch (error) {
    console.log(error);
    res.json([]);
  }
});

employeeRouter.post("/", async (req, res) => {
  try {
    const emp = new Employee({
      name: req.body.name,
      dateOfBirth: new Date(req.body.dateOfBirth),
      address: req.body.address,
      employerName: req.body.employerName,
      memberId: req.body.memberId,
    });
    const ret = await emp.save();
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

employeeRouter.get("/:id", async (req, res) => {
  try {
    const ret = await Employee.findById(req.params.id);
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

employeeRouter.delete("/:id", async (req, res) => {
  try {
    const ret = await Employee.findByIdAndDelete(req.params.id);
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

employeeRouter.patch("/:id", async (req, res) => {
  try {
    const ret = await Employee.findByIdAndUpdate(req.params.id, {
      $set : {
        name: req.body.name,
        dateOfBirth: new Date(req.body.dateOfBirth),
        address: req.body.address,
        employerName: req.body.employerName,
        memberId: req.body.memberId,
      }
    });
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

module.exports = employeeRouter;