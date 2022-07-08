import React from "react";
import styles from "./postInfo";

function PostDate({date}) {
  return (
    <span className={styles["color"]}>
      {date}
    </span>
  )
}

export default PostDate;
