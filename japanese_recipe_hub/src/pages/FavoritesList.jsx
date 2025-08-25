
import { motion as Motion} from "framer-motion"; 
import RecipeCard from "../components/RecipeCard";
import styles from '../styles/FavoritesList.module.css';

const FavoritesList = ({ favorites, toggleFavorite, recipes }) => {
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (!favoriteRecipes.length) {
    return <Motion.div>No favorites yet...</Motion.div>;
  
  }
  console.log('favorites:', favorites, 'recipes:', recipes)
  return (
    <Motion.div className={styles['favorites-container']}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
      {favoriteRecipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onToggle={() => toggleFavorite(recipe.id)}
        />
      ))}
    </Motion.div>
  );
};

export default FavoritesList;
