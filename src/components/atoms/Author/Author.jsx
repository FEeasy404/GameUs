import React from "react";
import { Link } from "react-router-dom";
import styles from "./author.module.css";

function Author({authorName, authorId}) {
  return (
    <Link to={authorId}>
      <span className={styles["text-name"]}>{authorName}</span>
      <span className={styles["text-id"]} >{authorId}</span>
    </Link>
  )
}

export default Author;