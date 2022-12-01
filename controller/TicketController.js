const express = require("express");

const Ticket = require("../model/Ticket");
const ticketRouter = express.Router();

ticketRouter.post("/webhook", async (req, res) => {
  try {
    const ticket = new Ticket({
      jiraId: req.body.id,
      data: req.body,
      dataStr: JSON.stringify(req.body),
    });
    const ret = await ticket.save();
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

ticketRouter.get("/", async (req, res) => {
  try {
    const list = await Ticket.find();
    res.json(list);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

ticketRouter.get("/:id", async (req, res) => {
  try {
    const ret = await Ticket.findById(req.params.id);
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

ticketRouter.delete("/:id", async (req, res) => {
  try {
    const ret = await Ticket.findByIdAndDelete(req.params.id, { useFindAndModify: false });
    res.json(ret);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = ticketRouter;
