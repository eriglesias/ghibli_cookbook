require ('dotenv').config();
const { connectToDatabase} = require('./mongo');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3005;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors()); 
app.use(express.json())  
const SECRET_KEY = process.env.SECRET_KEY;
if (!SECRET_KEY) {
  console.error('FATAL: SECRET_KEY is not set. Set it in .env');
  process.exit(1);
}
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;


function possibleUserIds(userId) {
  const ids = [String(userId)];
  try {
    ids.push(ObjectId(String(userId)));
  } catch (e) {

  }
  return ids;
}



// User collection

app.get('/', (req,res) => {
  res.send('Recipes API is running');
});

app.post('/users/signup', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { username, password } = req.body;

    if (
      typeof username !== 'string' || username.trim().length < 3 ||
      typeof password !== 'string' || password.length < 6
    ) {
      return res.status(400).json({ error: 'Username must be at least 3 chars and password at least 6 chars' });
    }

    const existingUser = await db.collection('users').findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    await db.collection('users').insertOne({ username, password: hashedPassword });

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.error('Signup error', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});


app.post('/users/login', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const { username, password } = req.body;
    const user = await db.collection('users').findOne({ username});
    if (!user || !await bcrypt.compare(password, user.password)){
      return res.status(401).json({error: 'Invalid credentials'});
    }
    const token = jwt.sign({ username, userId: user._id.toString() }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token, username: user.username});
    } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Failed to login' });
    }
});

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// API endpoints


// Protect favorites endpoints
/*app.get('/recipes/favorites', authenticateToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    const favorites = await db.collection('favorites').find({ userId: req.user.userId }).toArray();
    const recipeIds = favorites.map(f => f.recipeId);
    const recipes = await db.collection('recipes').find({ id: { $in: recipeIds } }).toArray();
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching favorites:', err);
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});*/

app.get('/recipes/favorites', authenticateToken, async (req, res) => {
  try {
    const db = await connectToDatabase();
    const ids = possibleUserIds(req.user.userId);
    const favorites = await db.collection('favorites').find({ userId: { $in: ids } }).toArray();
    const recipeIds = favorites.map(f => f.recipeId);
    res.json({ favorites: recipeIds });
  } catch (err) {
    console.error('Error fetching favorites:', err);
    res.status(500).json({ error: 'Failed to fetch favorites' });
  }
});

/*app.post('/recipes/favorites', authenticateToken, async (req, res) => {
  const { id } = req.body;
  if (typeof id !== 'number') {
    return res.status(400).json({ error: 'Invalid recipe ID' });
  }
  try {
    const db = await connectToDatabase();
    const existing = await db.collection('favorites').findOne({ userId: req.user.userId, recipeId: id });
    if (existing) {
      await db.collection('favorites').deleteOne({ _id: existing._id });
      res.json({ message: 'Removed from favorites', favorites: [] });
    } else {
      await db.collection('favorites').insertOne({ userId: req.user.userId, recipeId: id });
      const updatedFavorites = await db.collection('favorites').find({ userId: req.user.userId }).toArray();
      res.json({ message: 'Added to favorites', favorites: updatedFavorites.map(f => f.recipeId) });
    }
  } catch (err) {
    console.error('Error updating favorites:', err);
    res.status(500).json({ error: 'Failed to update favorites' });
  }
});
*/

app.post('/recipes/favorites', authenticateToken, async (req, res) => {
  const { id } = req.body;
  if (typeof id !== 'number' || isNaN(id)) {
    return res.status(400).json({ error: 'Invalid recipe ID. Must be a number' });
  }
  try {
    const db = await connectToDatabase();
    const userId = String(req.user.userId);
    const existing = await db.collection('favorites').findOne({ userId, recipeId: id });
    if (existing) {
      await db.collection('favorites').deleteOne({ _id: existing._id });
    } else {
      await db.collection('favorites').insertOne({ userId: String(req.user.userId), recipeId: id });
    }
    const updatedFavorites = await db.collection('favorites').find({ userId: { $in: ids } }).toArray();
    res.json({ message: 'Favorites updated', favorites: updatedFavorites.map(f => f.recipeId) });
  } catch (err) {
    console.error('Error updating favorites:', err);
    res.status(500).json({ error: 'Failed to update favorites' });
  }
});





app.get('/recipes', async (req, res) => {
   try {
    const db = await connectToDatabase();
    const recipes = await db.collection('recipes').find({}).toArray();
    console.log('Fetched recipes from MongoDB:', recipes.length);
    res.json(recipes);
   } catch (err) {
    console.log('Error fetching recipes:', err);
    res.status(500).json({ error: 'Failed to fetch recipes'});
   }
});




app.get('/recipes/random', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const [recipe] = await db.collection('recipes').aggregate([{ $sample: { size: 1 } }]).toArray();
    if (!recipe) return res.status(404).json({ error: 'No recipes available' });
    res.json(recipe);
  } catch (err) {
    console.error('Error fetching random recipe:', err);
    res.status(500).json({ error: 'Failed to fetch random recipe' });
  }
});


app.get('/recipes/search', async (req, res) => {
  const query = req.query.q;
  if (!query || typeof query !== 'string' || query.trim() === '') {
    return res.status(400).json({ error: 'Missing or invalid query parameter ?q=' });
  }

  try {
    const db = await connectToDatabase();
    const regex = new RegExp(query.trim(), 'i'); // case-insensitive search

    const recipes = await db.collection('recipes').find({
      $or: [
        { name: regex },
        { name_jap: regex },
        { tags: regex },
        { 'ingredients.name': regex }
      ]
    }).toArray();

    res.json(recipes);
  } catch (err) {
    console.error('Error searching recipes:', err);
    res.status(500).json({ error: 'Failed to search recipes' });
  }
});

app.get('/recipes/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    const db = await connectToDatabase();
    const recipe = await db.collection('recipes').findOne({ id });
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    console.error('Error fetching recipe by ID:', err);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});


function filterRecipes(recipes, query) {
  if (!query || typeof query !== 'string') return [];
  const trimmed = query.trim();
  if (trimmed === '') return [];

  const normalizedQuery = trimmed.toLowerCase();

  if (!Array.isArray(recipes) || recipes.length === 0) return [];

  return recipes.filter(recipe => {
    const nameMatch = recipe.name?.toLowerCase().includes(normalizedQuery) ?? false;
    const japNameMatch = recipe.name_jap?.toLowerCase().includes(normalizedQuery) ?? false;

    const tagMatch = Array.isArray(recipe.tags)
      ? recipe.tags.some(tag => tag.toLowerCase() === normalizedQuery) // exact match
      : false;

    const ingredientMatch = Array.isArray(recipe.ingredients)
      ? recipe.ingredients.some(ing => ing.name?.toLowerCase().includes(normalizedQuery))
      : false;

    return nameMatch || japNameMatch || tagMatch || ingredientMatch;
  });
}




app.listen(port, () => {
   console.log(`Server running on  ${port}`);
});

