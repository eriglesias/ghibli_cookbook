import { useState, useEffect } from 'react';
import styles from '../styles/RecipeList.module.css';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';


const RecipeList = ({recipes, favorites, toggleFavorite}) => {
  const [loading, setLoading] = useState(true);
  const [filterRegion, setFilterRegion] = useState('All');
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    // Only set loading to false once recipes are available
    if (recipes && recipes.length >= 0) {
      setLoading(false);
      setSearchResults(recipes);
    }
  }, [recipes]);

  
  if (loading) return <div>Loading recipes...</div>;

  const baseList = searchResults == null ? recipes: searchResults;
  
  const regions = ['All', ...new Set(recipes.map(recipe => recipe.region))];

  const filteredRecipes = filterRegion === 'All'
    ? baseList
    : baseList.filter(recipe => recipe.region === filterRegion);

  return (
    <div>
      <div className={styles.title}>
          <h2 id="title_en"> Recipe List</h2>
          <h2 id="title_jap"> レシピ一覧 </h2> 
      </div>
     
      <div className={styles.toolbar}>
        <SearchBar initialRecipes={recipes} setSearchResults={setSearchResults}/>
        <div className={styles.filter}>
          <label>Filter by Region: </label>
        <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
          </select>
        </div>
      </div>
        
      <div className={styles.recipe_list}>
        {filteredRecipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            favorites={favorites} 
            onToggle={() => toggleFavorite(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;