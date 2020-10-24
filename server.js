const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env'});
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({success: true, data: 'Hello World'});
})

// Temperature API

app.get('/api/v1/temperature', (req, res) => {
  res.status(200).json({success: true, msg: 'Show all temperature readings'});
})

app.get('/api/v1/temperature/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Show the temperature reading of ID ${req.params.id}` });
})

app.post('/api/v1/temperature', (req, res) => {
  res.status(200).json({success: true, msg: 'Create a new temperature reading'});
})

app.delete('/api/v1/temperature/:id', (req, res) => {
  res.status(200).json({success: true, msg: 'Delete a temperature readings'});
})

// Humidity API

app.get('/api/v1/humidity', (req, res) => {
  res.status(200).json({success: true, msg: 'Show all humidity readings'});
})

app.get('/api/v1/humidity/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Show the humidity reading of ID ${req.params.id}`});
})

app.post('/api/v1/humidity', (req, res) => {
  res.status(200).json({success: true, msg: 'Create a humidity readings'});
})

app.delete('/api/v1/humidity/:id', (req, res) => {
  res.status(200).json({success: true, msg: 'Delete a humidity readings'});
})

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`));