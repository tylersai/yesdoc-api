const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    memberId: {
        type: String,
        required: true
    },
    dateOfBirth: Date,
    address: String,
    employerName: String
});

module.exports = mongoose.model('employee', EmployeeSchema);