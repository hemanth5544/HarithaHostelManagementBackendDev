const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
