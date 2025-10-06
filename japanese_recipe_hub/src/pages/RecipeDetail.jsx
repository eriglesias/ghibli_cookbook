/* RecipeDetail.jsx*/

import { useState, useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/RecipeDetail.module.css';
import RecipeTitle from '../components/RecipeTitle';
import RecipeImage from '../components/RecipeImage';
import RecipeTags from '../components/RecipeTags';
const API_URL = import.meta.env.VITE_API_URL;
const MotionDiv = motion.div;


const RecipeDetail = () => {
  const { id } = useParams();
  //state management useState to hold the recipe
  const [recipe, setRecipe] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/recipes/${id}`).then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then((data) => {
      setRecipe(data);
      setLoading(false);
    }).catch((err) => {
      setError(err);
      setLoading(false);
    });
  }, [id]);
  

 if (loading) return <div className={styles.loading}>Loading Ghibli magic...</div>;
 if (error) return <div className={styles.error}>Error: {error.message}</div>;
 if (!recipe) return <div className={styles.not_found}>Recipe not found</div>;

  return (
    <div className={styles.recipe_wrapper}>
      <MotionDiv
      className={styles.recipe_detail}
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to="/recipes" className={styles.back_link}>Back to Recipes</Link>
      <RecipeTitle name={recipe.name} name_jap={recipe.name_jap} />
      <RecipeImage src={recipe.image} alt={recipe.name} />
      <div className={styles.recipe_summary}>
        <p>Region: {recipe.region}</p>
        <p>Serves: {recipe.servings}</p>
        <p>Prep: {recipe.prepTime}m</p>
        <p>Cook: {recipe.cookTime}m</p>
        <p>Difficulty: {recipe.difficulty}</p>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.amount} {ingredient.name} {ingredient.note && `(${ingredient.note})`}
            </li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ul>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>
              Step {instruction.step}: {instruction.description}
            </li>
          ))}
        </ul>
      </div>
      <RecipeTags tags={recipe.tags} />
    </MotionDiv>
    </div>
    
  );
};


export default RecipeDetail;