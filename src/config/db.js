require('dotenv').config();
const mongoose = require('mongoose');

/**
 * Database Connection Configuration
 * Establishes connection to MongoDB using environment variables
 * - Reads MONGO_URI from .env file
 * - Logs success or failure
 * - Exits process if connection fails
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
