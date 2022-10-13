const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  company: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
