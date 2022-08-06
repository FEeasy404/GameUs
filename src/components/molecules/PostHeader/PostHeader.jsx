import React from "react";
import IconButton from "../../atoms/IconButton/IconButton";
import styles from "./postHeader.module.css";

function PostHeader({ isAlbum, setAlbum }) {
  return (
    <div className={styles["wrapper-header"]}>
      <h2 className="a11y-hidden">나의 게시글 목록</h2>
      <IconButton
        text="리스트형으로 보기"
        type="list"
        onClick={() => setAlbum(!isAlbum)}
        disabled={!isAlbum}
      />
      <IconButton
        text="앨범형으로 보기"
        type="album"
        onClick={() => setAlbum(!isAlbum)}
        disabled={isAlbum}
      />
    </div>
  );
}

export default PostHeader;
