// src/pages/Welcome.jsx
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../styles/Welcome.module.css'; 

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If we've already seen the welcome screen, go directly to home
    if (localStorage.getItem('welcomeShown')) {
      navigate('/home', { replace: true });
      localStorage.setItem('welcomeShown', 'true');
    }
  }, [navigate]);

  const handleContinue = () => {
    // Mark welcome as shown and go to home
    localStorage.setItem('welcomeShown', 'true');
    navigate('/home', { replace: true });
  };

  return (
    <div className={styles.home}>
      <pre className={styles.ascii}>
{`
⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⠀⠀⠀⣀⣀⣀⠀⠀⠸⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⡟⠁⡠⢄⠙⢿⣿⣿⣿⠿⠿⠿⣿⣿⣿⡿⠁⣠⠤⡈⢻⣿⣧⠀⠀⠀⠀⠀⠀⠀
⣀⣀⣀⠀⠀⠀⣾⣿⣿⣇⠘⠿⠾⠁⣼⣿⣿⣿⣦⣤⣴⣿⣿⣿⣇⠀⠿⠶⠃⣸⣿⣿⣇⠀⠀⠀⣀⣀⡀
⠀⠀⠈⠉⠉⢻⣿⣿⣿⣿⣶⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣴⣾⣿⣿⣿⣿⡏⠉⠉⠀⠀⠀
⠀⠒⠒⠒⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡓⠒⠒⠒⠀
⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀
⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀
⠀⠀⣾⣿⣿⣿⣿⣿⡿⠁⠀⣀⡀⠀⠀⠀⠀⠀⣠⣤⣄⠀⠀⠀⠀⠀⢀⡀⠀⠘⢿⣿⣿⣿⣿⣿⣇⠀⠀
⠀⢀⣿⣿⣿⣿⣿⡟⠀⢀⣾⡿⢿⣦⡀⠀⢠⡾⠛⠛⠛⢷⡄⠀⣠⣾⠿⣿⣷⡀⠈⣿⣿⣿⣿⣿⣿⠀⠀
⠀⢸⣿⣿⣿⣿⣿⠃⠀⠛⠃⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠙⠓⠀⢸⣿⣿⣿⣿⣿⠀⠀
⠀⢸⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⠀⠀
⠀⠘⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⠀⠀
⠀⠀⢻⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⡏⠀⠀
⠀⠀⠈⢿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⡟⠀⠀⠀
⠀⠀⠀⠈⠻⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⡿⠏⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠶⣤⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣠⣴⠾⠿⠛⠛⠉⠀⠀
`}
      </pre>
      <h1>Welcome!</h1>
      <div className={styles.buttons}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <button onClick={handleContinue}>Continue without Account</button>
      </div>
    </div>
  );
};

export default Welcome;
