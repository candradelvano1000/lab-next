'use client';

import styles from '../spaces.module.css';
import MoreMenu from './MoreMenu';

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      {/* Left */}
      <input
        className={styles.searchInput}
        placeholder="Search Spaces by name"
      />

      {/* Right */}
      <div className={styles.actions}>
        <button className={styles.primaryBtn}>+ New Space</button>
        <MoreMenu />
      </div>
    </div>
  );
}