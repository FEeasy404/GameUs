import React from "react";
import styles from "./moreButton.module.css"
import menuIconURL from "../../../assets/icon-more-vertical-small.svg"

function MoreButton({ButtonClickHandler}) {
  return (
    <>
        <button type="button" onClick={ButtonClickHandler} className={styles.button}>
            <img src={menuIconURL} alt="메뉴 더보기" />
        </button>
    </>
  )
}

export default MoreButton;