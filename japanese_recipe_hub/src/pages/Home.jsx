// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function Home({ username }) {

  useEffect(() => {
    if (!isMobile) return;

    const videos = document.querySelectorAll('video');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } 
    );

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        {username ? (
          <h2>
            Welcome to the Realm, <span>{username}!</span>
          </h2>
        ) : (
          <h2>Welcome visitor</h2>
        )}
      </header>

      <section className={styles.grid}>
        <Link
          className={styles.card}
          to="/recipes"
          onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play().catch(() => {})}
          onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
        >
          <h3>Recipe List</h3>
          <p>Browse all the recipes</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_list_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_list.png"
            loop
            muted
            playsInline
            preload="none"
            className={styles.cardVideo}
            autoPlay={isMobile}
          />
        </Link>

        <Link
          className={styles.card}
          to="/favorites"
          onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play().catch(() => {})}
          onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
        >
          <h3>Favorites</h3>
          <p>Your saved recipes :)</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/favorites_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_favorites.png"
            loop
            muted
            playsInline
            preload="none"
            className={styles.cardVideo}
            autoPlay={isMobile}
          />
        </Link>

        <Link
          className={styles.card}
          to="/recipe-day"
          onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play().catch(() => {})}
          onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
        >
          <h3>Recipe of the Day</h3>
          <p>Get one randomly picked!</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_day.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_day.png"
            loop
            muted
            playsInline
            preload="none"
            className={styles.cardVideo}
            autoPlay={isMobile}
          />
        </Link>

        <Link
          className={styles.card}
          to="/recipe/1"
          onMouseEnter={(e) => e.currentTarget.querySelector('video')?.play().catch(() => {})}
          onMouseLeave={(e) => e.currentTarget.querySelector('video')?.pause()}
        >
          <h3>Recipe Detail</h3>
          <p>Explore one recipe in depth</p>
          <video
            src="https://ghibli-cookbook-server.onrender.com/assets/recipe_detail_animation.mp4"
            poster="https://ghibli-cookbook-server.onrender.com/assets/recipe_detail.png"
            loop
            muted
            playsInline
            preload="none"
            className={styles.cardVideo}
            autoPlay={isMobile}
          />
        </Link>
      </section>
    </div>
  );
}
