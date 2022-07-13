import React from "react";
import styles from "./moreButton.module.css"

function MoreButton({ButtonClickHandler}) {
  return (
    <>
        <button type="button" onClick={ButtonClickHandler} className={styles}>
            <img src="../../../assets/icon-more-vertical-small.svg" alt="메뉴 더보기" />
        </button>
    </>
  )
}

export default MoreButton;