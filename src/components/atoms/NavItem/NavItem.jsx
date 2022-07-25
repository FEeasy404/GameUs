import React from "react";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem({link, label, icon}) {
  const active = true;
  return (
      <Link to={link} className={`${styles.link} ${styles[icon]} ${active ? styles.active : null}`}>
        <span>{label}</span>
      </Link>
  )
}

export default NavItem;
