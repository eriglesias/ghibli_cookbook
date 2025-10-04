import React, { useState, useEffect } from 'react';
import styles from '../styles/SearchBar.module.css';

const API_URL = import.meta.env.VITE_API_URL;


const SearchBar = ({  setSearchResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // if query is empty, tell parent “no search”
      if (query.trim() === '') {
        setSearchResults(null);
        return;
      }

      setLoading(true);
      try {
        const resp = await fetch(
          `${API_URL}/recipes/search?q=${encodeURIComponent(query)}`
        );
        const data = await resp.json();
        setSearchResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [query, setSearchResults]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className={styles.searchInput}
      />
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

export default SearchBar;
