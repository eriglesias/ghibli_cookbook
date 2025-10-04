import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RecipeCard from '../components/RecipeCard';
import styles from '../styles/RecipeDay.module.css';
const API_URL = import.meta.env.VITE_API_URL;

const RecipeDay = ({ favorites, toggleFavorite }) => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandom = async () => {
    setLoading(true);
    try {
      const res  = await fetch(`${API_URL}/recipes/random`);
      if (!res.ok) throw new Error('Failed to fetch random recipe');
      const data = await res.json();
      setCurrentRecipe(data);
    } catch (err) {
      console.error('Error fetching random recipe:', err);
      setCurrentRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className={styles.header}>
        <h1 className={styles.title}>Recipe of the Day</h1>
      </header>
      <div className={styles.contentWrapper}>
        <div className={styles.recipeSection}>
            <div className={styles.cardWrapper}>
              {loading ? (
                <motion.div
                  className={styles.loading}
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
                >
                  Loading recipe…
                </motion.div>
              ) : currentRecipe ? (
                <RecipeCard
                  key={currentRecipe.id}
                  recipe={currentRecipe}
                  favorites={favorites}
                  onToggle={() => toggleFavorite(currentRecipe.id)}
                />
              ) : (
                <div className={styles.noRecipe}>No recipe available.</div>
              )}
            </div>
      <button
        onClick={fetchRandom}
        className={styles.newRecipe}
        aria-label="Generate new random recipe"
      >
        Try another!
      </button>
    </div>
  </div>
</motion.div>
  );
};

export default RecipeDay;
