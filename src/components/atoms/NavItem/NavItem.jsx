import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem({link, label, icon}) { 
  const currunt = location.pathname === link;

  return (
      <Link 
        to={link} 
        className={`${styles.link} ${styles[icon]} ${currunt ? styles.active : null}`}
      >
        <span>{label}</span>
      </Link>
  )
}

export default NavItem;
