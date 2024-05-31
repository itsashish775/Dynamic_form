// app.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const routes = require('./routes');
require('dotenv').config();


const app = express();

// Connect to the database
connectDB();
app.use(cors())
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api', routes);
app.get('/', (req, res) => {
    console.log("============>");
    res.end("this is test route")
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
