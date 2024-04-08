const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema({
    name: String,
    branch: String,
    year: String,
    email: String,
    phoneNumber: String,
    eventName: String,
});

const Registration = mongoose.model("registration", registrationSchema);
module.exports = Registration