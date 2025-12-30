'use client";'
import styles from "../Sidebar.module.css";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hint?: string;
}

export default function SidebarItem({ icon, label, active, hint }: SidebarItemProps) {
  return (
    <div className={`${styles.item} ${active ? styles.active : ""}`}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}