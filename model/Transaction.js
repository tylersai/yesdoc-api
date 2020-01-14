const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    empId: {
        type: String,
        required: true
    },
    agent: {
        type: String,
        default: "employee"
    },
    amount: {
        type: Number,
        required: true
    },
    datetime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transaction', TransactionSchema, 'transaction');