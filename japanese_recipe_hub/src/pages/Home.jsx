// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function Home({ username }) {
  return (
    <div className={styles.home}>
        <header className={styles.header}>
            {username ? ( <h2>Welcome to the Realm, <span>{username}!</span></h2>) : (<div><h2>Welcome visitor</h2>
            </div>)}
        </header> 
      
      <section className={styles.grid}>
        <Link className={styles.card} 
          to="/recipes"
           onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.play().catch(() => {}); 
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.pause();
          }}
        >
          <h3>Recipe List</h3>
          <p>Browse all the recipes</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_list_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_list.png"
            loop
            muted
            playsInline
            preload='none'
            autoPlay={isMobile}
            className={styles.cardVideo} 
          />
        </Link>

        <Link className={styles.card} to="/favorites"
          onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.play().catch(() => {}); 
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.pause();
          }}
        >
          <h3>Favorites</h3>
          <p>Your saved recipes :)</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/favorites_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_favorites.png"
            loop
            muted
            playsInline
            preload='none'
            className={styles.cardVideo}
            autoPlay={isMobile} 
          />
         
        </Link>
        <Link className={styles.card} to="/recipe-day"
         onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.play().catch(() => {}); 
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.pause();
          }}
        >
          <h3>Recipe of the Day</h3>
          <p>Get one randomly picked!</p>
           <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_day.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_day.png"
            loop
            muted
            playsInline
            preload='none'
            className={styles.cardVideo} 
            autoPlay={isMobile}
          />
        </Link>
        <Link className={styles.card} to="/recipe/1"
           onMouseEnter={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.play().catch(() => {}); 
          }}
          onMouseLeave={(e) => {
            const video = e.currentTarget.querySelector('video');
            if (video) video.pause();
          }}
        >
          <h3>Recipe Detail</h3>
          <p>Explore one recipe in depth</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_detail_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_detail.png"
            loop
            muted
            playsInline
            preload='none'
            className={styles.cardVideo} 
            autoPlay={isMobile}
          />
        </Link>
      </section>
    </div>
  );
}
