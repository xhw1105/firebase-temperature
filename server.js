const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// Route files
const temperatures = require('./routes/temperatures');

// Load env vars
dotenv.config({ path: './config/config.env'});
// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/v1/temperatures', temperatures);

app.get('/', (req, res) => {
  res.status(200).json({success: true, data: 'Hello World'});
})



// Humidity API

// app.get('/api/v1/humidity', (req, res) => {
//   res.status(200).json({success: true, msg: 'Show all humidity readings'});
// })

// app.get('/api/v1/humidity/:id', (req, res) => {
//   res.status(200).json({success: true, msg: `Show the humidity reading of ID ${req.params.id}`});
// })

// app.post('/api/v1/humidity', (req, res) => {
//   res.status(200).json({success: true, msg: 'Create a humidity readings'});
// })

// app.delete('/api/v1/humidity/:id', (req, res) => {
//   res.status(200).json({success: true, msg: 'Delete a humidity readings'});
// })

const PORT = process.env.PORT;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});