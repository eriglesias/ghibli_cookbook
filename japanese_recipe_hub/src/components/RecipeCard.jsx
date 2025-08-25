import styles from '../styles/RecipeCard.module.css';
import { Link } from 'react-router-dom';
import RecipeTitle from './RecipeTitle';
import RecipeImage from './RecipeImage';
import RecipeTags from './RecipeTags';

const RecipeCard = ({ recipe, onToggle, favorites = [] }) => {
  const isFavorite = favorites.includes(recipe.id);

  const handleToggleFavorite = (e) => {
    e.preventDefault(); // Prevent navigation to recipe detail
    e.stopPropagation(); // Stop event bubbling
    onToggle();
  };

  return (
    <div className={styles.recipe_card_wrapper}>
      <Link to={`/recipe/${recipe.id}`} className={styles.recipe_card}>
        <RecipeTitle name={recipe.name} name_jap={recipe.name_jap} />
        <RecipeImage src={recipe.image} alt={recipe.name}/>
        <div>
          <p> Region: {recipe.region}</p>
          <p> Prep: {recipe.prepTime}m, Cook: {recipe.cookTime}m, Serves: {recipe.servings}</p>
          <p> Difficulty: {recipe.difficulty}</p>
        </div>
        <RecipeTags tags={recipe.tags} />
         <button 
        className={`${styles.favorite_button} ${isFavorite ? styles.favorite_active : styles.favorite_inactive}`}
        onClick={handleToggleFavorite}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      </Link>
     
    </div>
    
  );
};

export default RecipeCard;