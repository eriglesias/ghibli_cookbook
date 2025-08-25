import PropTypes from 'prop-types';
import styles from '../styles/RecipeTitle.module.css';

const RecipeTitle = ({ name, name_jap }) => {
  return (
    <div className={styles.title_container}>
     {<h3 className={styles.japanese_title}>{name_jap || ''}</h3>}
     {<h4 className={styles.english_title}>{name || 'Untitled Recipe'}</h4>}

    </div>
  );
};

RecipeTitle.PropTypes = {
  name: PropTypes.string,
  name_jap: PropTypes.string,
};

export default RecipeTitle;

/* 
function RecipeTitle(props) {
    return <h3>{props.title}</h3>;
}
export default RecipeTitle 
*/