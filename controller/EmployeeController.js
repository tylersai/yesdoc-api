const express = require("express");

const employeeRouter = express.Router();

employeeRouter.get("/", (req, res) => {
  res.json([
    {
      _id: { $oid: "5e1c2b671c9d4400002b1741" },
      memberId: "yd-0001",
      name: "John Doe",
      address: "Austin, TX",
      dateOfBirth: new Date(),
      employerName: "Yes Doc"
    },
    {
      _id: { $oid: "5e1c2cda1c9d4400002b1742" },
      memberId: "yd-0002",
      name: "Liby Jenners",
      address: "New York, NY",
      dateOfBirth: new Date(),
      employerName: "Yes Doc"
    }
  ]);
});

module.exports = employeeRouter;