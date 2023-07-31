const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  registrationDate: { type: String, required: true, default: Date },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
