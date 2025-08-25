import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.css';

const Login = ({ setUsername: setAppUsername }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:3005/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Login failed');

      const { token, username: returnedUsername } = await response.json();

      localStorage.setItem('token', token);
      localStorage.setItem('username', returnedUsername);
      localStorage.setItem('welcomeShown', 'true');
      // update App sate with logged-in username
      setAppUsername(returnedUsername);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.login}>
      <h2>Enter the Ghibli Realm</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
