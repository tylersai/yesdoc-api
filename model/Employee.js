const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    memberId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    dateOfBirth: Date,
    address: String,
    employerName: String
});

module.exports = mongoose.model('Employee', EmployeeSchema, 'employee');