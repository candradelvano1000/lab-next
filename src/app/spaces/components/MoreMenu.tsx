'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../spaces.module.css';

export default function MoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className={styles.moreWrapper} ref={ref}>
      <button className={styles.moreBtn} onClick={() => setOpen(prev => !prev)}>
        ⋮
      </button>

      {open && (
        <div className={styles.popup}>
          <div className={styles.popupTitle}>Show data for:</div>
          {['Month', 'Year'].map((label, index) => (
            <div key={index} className={styles.popupRow}>
              <label>{label}</label>
              <select>
                <option>{label === 'Month' ? 'December' : '2025'}</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
