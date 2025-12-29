'use client';

import styles from '../spaces.module.css';

export default function SearchInput() {
  return (
    <div className={styles.search}>
      <input
        placeholder="Search Spaces by name"
        className={styles.searchInput}
      />
    </div>
  );
}
