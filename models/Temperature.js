const mongoose = require('mongoose');

const TemperatureSchema = new mongoose.Schema({
  temperatureReading: String,
  recordedTimeOnServer: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Temperature', TemperatureSchema);