import styles from '../styles/RecipeTags.module.css';

const RecipeTags = ({ tags }) => {
  return (
    <div className={styles.tags}>
      {tags.map(tag => ( /* creates a span for each tag */
        <span key={tag} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default RecipeTags;