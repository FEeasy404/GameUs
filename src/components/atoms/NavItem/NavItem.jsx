import React, { useContext } from "react";
import { curruntPageContext } from "../../../contexts/curruntPageContext";
import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

function NavItem({link, label, icon}) {
  // 현재 보고있는 탭에 하이라이팅
  const { location } = useContext(curruntPageContext);
  const { setLocation } = useContext(curruntPageContext);

  let active = false;

  if (location === icon) {
    active = true;
  }

  return (
      <Link 
        to={link} 
        onClick={setLocation(icon)}
        className={`${styles.link} ${styles[icon]} ${active ? styles.active : null}`}
      >
        <span>{label}</span>
      </Link>
  )
}

export default NavItem;
