const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema({
  jiraId: Number,
  data: Object,
  dataStr: String,
});

module.exports = mongoose.model("ticket", TicketSchema, "ticket");
