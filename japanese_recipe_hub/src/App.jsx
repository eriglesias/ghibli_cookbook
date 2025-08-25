import './styles/App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import RecipeDay from './pages/RecipeDay';
import FavoritesList from './pages/FavoritesList';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  useEffect(() => {
  setLoading(true);
  const token = localStorage.getItem('token');

  const recipesPromise = fetch('http://localhost:3005/recipes').then(r => r.json());

  const favPromise = fetch('http://localhost:3005/recipes/favorites', {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  })
    .then(async r => {
      if (!r.ok) return { favorites: [] };
      const data = await r.json();
      if (Array.isArray(data)) {
        if (data.length && typeof data[0] === 'object' && data[0].id !== undefined) {
          return { favorites: data.map(r => r.id) };
        }
        return { favorites: data };
      } else if (data && data.favorites) {
        return { favorites: data.favorites };
      }
      return { favorites: [] };
    });

  Promise.all([recipesPromise, favPromise])
    .then(([recipeData, favoriteData]) => {
      setRecipes(recipeData);
      setFavorites(favoriteData.favorites || []);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

}, [username]); 

  const toggleFavorite = (id) => {
  const token = localStorage.getItem('token');
  fetch('http://localhost:3005/recipes/favorites', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id })
  })
    .then(r => {
      if (!r.ok) throw new Error('Failed to update favorites');
      return r.json();
    })
    .then(data => setFavorites(data.favorites || []))
    .catch(error => console.error('Error:', error));
};

  if (loading) return <div className="loading">Loading...</div>;
  return (
    <Router>
      <header className= "app-header">
        <Link to="/">Welcome</Link>
        <Link to="/home" style={{ marginLeft: 12 }}>Home</Link>
        {username && <span style={{ marginLeft: 12 }}> Hello, {username}</span>}
      </header>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home username={username} />} />
        <Route path="recipes" element={<RecipeList recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} recipes={recipes} />} />
        <Route path="/recipe-day" element={<RecipeDay favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/login" element={<Login setUsername={setUsername} />}/>
        <Route path="/signup" element={<Signup setUsername={setUsername} />} />
      </Routes>
    </Router>
  );
};

export default App;