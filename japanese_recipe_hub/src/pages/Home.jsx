// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home({ username }) {
  return (
    <div className={styles.home}>
        <header className={styles.header}>
            {username ? ( <h2>Welcome to the Realm, <span>{username}!</span></h2>) : (<div><h2>Welcome visitor</h2>
            </div>)}
        </header> 
      
      <section className={styles.grid}>
        <Link className={styles.card} to="/recipes">
          <h3>Recipe List</h3>
          <p>Browse all the recipes</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_list_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_list.png"
            loop
            muted
            playsInline
            preload='none'
            className={styles.cardVideo} 
          />
        </Link>

        <Link className={styles.card} to="/favorites">
          <h3>Favorites</h3>
          <p>Your saved recipes :)</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/favorites_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/reciope_favorites.mp4"
            loop
            muted
            playsInline
            className={styles.cardVideo} 
          />
         
        </Link>
        <Link className={styles.card} to="/recipe-day">
          <h3>Recipe of the Day</h3>
          <p>Get one randomly picked!</p>
           <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_day.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_day.png"
            loop
            muted
            playsInline
            className={styles.cardVideo} 
          />
        </Link>
        <Link className={styles.card} to="/recipe/1">
          <h3>Recipe Detail</h3>
          <p>Explore one recipe in depth</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_detail_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_detail.png"
            loop
            muted
            playsInline
            autoPlay
            className={styles.cardVideo} 
          />
        </Link>
      </section>
    </div>
  );
}
