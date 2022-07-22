import React from "react";
import { useState } from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import Author from "../../atoms/Author/Author";
import InfoIconGroup from "../InfoIconGroup/InfoIconGroup";
import PostDate from "../../atoms/PostDate/PostDate";
import styles from "./postCard.module.css";
import IconButton from "../../atoms/IconButton/IconButton";
import Modal from "../../../components/organisms/Modal/Modal";

function ImageListMaker({ image }) {
  const imageData = image.split(",");
  //이미지가 없을 경우 빈 태그 리턴
  if (!image) return <></>;
  else {
    return (
      <ul className={styles["list-images"]}>
        {imageData.map((item, index) => (
          <li key={index} className={styles["item-image"]}>
            <ImageBox
              src={item}
              type={"rounded_square"}
              size={"medium_large"}
            />
          </li>
        ))}
      </ul>
    );
  }
}

function PostCard({ post }) {
  const [onModal, setOnModal] = useState(false);
  const myAccountname = window.localStorage.getItem("accountname");
  const author = post.author;
  function handleDelete() {
    console.log("게시글 삭제");
  }
  function handleChange() {
    console.log("게시글 수정");
  }
  return (
    <>
      <article className={styles["container-post"]}>
        <div className={styles["profile"]}>
          <ImageBox type={"circle"} size={"medium_small"} src={author.image} />
        </div>
        <div className={styles["container-user"]}>
          <Author authorName={author.username} authorId={author.accountname} />
          <IconButton
            type={"more"}
            text={"더보기"}
            onClick={() => {
              setOnModal(!onModal);
            }}
          />
        </div>
        <div className={styles["content"]}>
          {post.content.split("\n").map((line, index) => {
            return line ? <p key={index}>{line}</p> : <br key={index} />;
          })}
        </div>
        <ImageListMaker image={post.image} />
        <InfoIconGroup
          postId={post.id}
          hearted={post.hearted}
          heartCount={post.heartCount}
          commentCount={post.commentCount}
        />
        <PostDate date={post.createdAt} />
      </article>
      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          buttons={
            myAccountname === author.accountname
              ? [
                  { text: "삭제", onClick: handleDelete },
                  { text: "수정", onClick: handleChange },
                ]
              : [{ text: "신고" }]
          }
          name="게시글"
        />
      )}
    </>
  );
}

export default PostCard;
