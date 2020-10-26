const Temperature = require('../models/Temperature');

// @desc    Get all temperatures
// @route   GET /api/v1/temperatures
// @access  Public
exports.getTemperatures = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Show all temperature readings'});
}


// @desc    Create a temperature reading
// @route   POST /api/v1/temperatures
// @access  Public
exports.createTemperatures = async (req, res, next) => {
  const temperature = await Temperature.create(req.body);
  res.status(201).json({
    success: true, 
    data: temperature
  });
}


// @desc    Delete a temperature reading
// @route   DELETE /api/v1/temperatures/:id
// @access  Public
exports.deleteTemperatures = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Delete a temperature reading'});
}