"use client";

import { useState } from "react";
import styles from "./Sidebar.module.css";
import {
  LogoIcon,
  SpacesIcon,
  HelpIcon,
  CommandIcon,
  UpdateIcon,
  SettingsIcon,
  FeedbackIcon,
  DashboardIcon,
} from "@/components/icons/icons";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const mainItems = [
    { icon: <DashboardIcon />, label: "Dashboard", active: false },
    { icon: <SpacesIcon />, label: "Spaces", active: true },
    
  ];
  const footerItems = [
    { icon: <HelpIcon />, label: "Help" },
    { icon: <CommandIcon />, label: "Toggle Commands", hint: "Ctrl + K" },
    { icon: <UpdateIcon />, label: "Latest Updates" },
    { icon: <SettingsIcon />, label: "Settings" },
    { icon: <FeedbackIcon />, label: "Give Feedback" },
  ];

  return (
    <aside
      className={`${styles.sidebar} ${expanded ? styles.expanded : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.header}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.name}>Candra Delvano Putra</div>
            <div className={styles.org}>Organization</div>
          </div>
        </div>
      </div>

      <nav className={styles.menu}>
        {mainItems.map((it) => (
          <SidebarItem key={it.label} {...it} />
        ))}
      </nav>

      <div className={styles.footer}>
        {footerItems.map((it) => (
          <SidebarItem key={it.label} {...it} />
        ))}
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hint?: string;
}

function SidebarItem({ icon, label, active, hint }: SidebarItemProps) {
  return (
    <div className={`${styles.item} ${active ? styles.active : ""}`}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
