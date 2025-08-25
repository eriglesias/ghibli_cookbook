const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
  if (!global.db) {
    await client.connect();
    global.db = client.db('recipeHub');
    console.log('Connected to MongoDB');
  }
  return global.db;
}

module.exports = { connectToDatabase };