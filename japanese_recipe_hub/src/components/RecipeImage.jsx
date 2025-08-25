import styles from '../styles/RecipeImage.module.css';


const RecipeImage = ({ src, alt}) => {
    return <img src={src} alt={alt} className={styles.image}/>
}

export default RecipeImage;