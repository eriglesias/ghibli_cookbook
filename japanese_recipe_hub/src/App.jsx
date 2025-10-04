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
import LoadingAnimation from './components/LoadingAnimation';
import ProtectedRoute from './components/ProtectedRoute';
const API_URL = import.meta.env.VITE_API_URL;

//user to debug debugging pswd test123
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('welcomeShown');
    setUsername('');
  }
  useEffect(() => {
  setLoading(true);
  const token = localStorage.getItem('token');
  
  const recipesPromise = fetch(`${API_URL}/recipes`).then(r => r.json());
  console.log('Debug Token Info:')
  console.log('Token exists', !!token)
  console.log('Token length', token?.length)
  console.log('Token preview:', token?.substring(0,50) + '...')
  
  const favPromise = fetch(`${API_URL}/recipes/favorites`, {
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
      setTimeout(() => setLoading(false), 2000);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

}, [username]); 

  const toggleFavorite = (id) => {
  const token = localStorage.getItem('token');
  fetch(`${API_URL}/recipes/favorites`, {
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

  if (loading) return <LoadingAnimation />;
  return (
    <Router>
      <header className="app-header">
        <div className="left">
          <Link to="/">Welcome</Link>
          <Link to="/home" style={{ marginLeft: 12}}>Home</Link>
        </div>
        
        <div className="right">
          {username ? (
          <>
            <button onClick={handleLogout}> Logout </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginLeft: 12 }}>Login</Link>
            <Link to="/signup" style={{ marginLeft: 12 }}>Sign Up</Link>
          </>
        )}
        </div>   
    </header>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home username={username} />} />
        <Route path="recipes" element={<RecipeList recipes={recipes} favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={ <ProtectedRoute> <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} recipes={recipes} /> </ProtectedRoute>}/>
        <Route path="/recipe-day" element={<RecipeDay favorites={favorites} toggleFavorite={toggleFavorite} />} />
        <Route path="/login" element={<Login setUsername={setUsername} />}/>
        <Route path="/signup" element={<Signup setUsername={setUsername} />} />
      </Routes>
    </Router>
  );
};

export default App;