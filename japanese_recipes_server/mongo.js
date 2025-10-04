const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

// Configure the client with specific options to avoid write concern issues
const client = new MongoClient(uri, {
  // Override any problematic write concern settings
  writeConcern: { w: 1, j: true },
  // Add some additional stability options
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});

async function connectToDatabase() {
  if (!global.db) {
    await client.connect();
    global.db = client.db('recipeHub');
    console.log('Connected to MongoDB');
  }
  return global.db;
}

module.exports = { connectToDatabase };