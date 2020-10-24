const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env'});
const app = express();

app.get('/', (req, res) => {
  res.json({success: true, data: 'Hello World'});
})

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`));