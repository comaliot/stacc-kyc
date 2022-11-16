import React from 'react';
import styles from './SearchResults.module.css';

export default function SearchResults(props) {
  return (
    <div className={styles.searchResults}>
      <h1>{props.name}</h1>
    </div>
  );
}
