require('dotenv').config();
const { MongoClient} = require('mongodb');
const fs = require('fs').promises;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function loadRecipes() {
    try {
        await client.connect();
        const db = client.db('recipeHub');
        const data = await fs.readFile('recipes.json', 'utf8');
        const recipes = JSON.parse(data);
        await db.collection('recipes').insertMany(recipes);
        console.log('Recipes loading into MongoDB');
    } catch (err) {
        console.error('Error loading recipes:', err);
    } finally {
        await client.close();
    }
}

loadRecipes();