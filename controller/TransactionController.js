const express = require("express");

const Transaction = require('../model/Transaction');
const transRouter = express.Router();

transRouter.get("/:empId", async (req, res) => {
  try {
    const list = await Transaction.find({ empId : { $eq : req.params.empId } });
    res.json(list);
  } catch (error) {
    console.log(error);
    res.json([]);
  }
});

transRouter.post("/:empId", async (req, res) => {
  try {
    const trans = new Transaction({
      empId : req.params.empId,
      amount : req.body.amount
    });
    const ret = await trans.save();
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json({});
  }
});

module.exports = transRouter;