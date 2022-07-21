import React from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import Author from "../../atoms/Author/Author";
import InfoIconGroup from "../InfoIconGroup/InfoIconGroup";
import PostDate from "../../atoms/PostDate/PostDate";
import styles from "./postCard.module.css";
import IconButton from "../../atoms/IconButton/IconButton";

function ImageListMaker({ image }) {
  const imageData = image.split(",");
  console.dir(imageData);
  console.log(imageData.length);
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
  const author = post.author;

  return (
    <article className={styles["container-post"]}>
      <div className={styles["profile"]}>
        <ImageBox type={"circle"} size={"medium_small"} />
      </div>
      <div className={styles["container-user"]}>
        <Author authorName={author.username} authorId={author.accountname} />
        <IconButton type={"more"} text={"더보기"} onClick={() => {}} />
      </div>
      <p className={styles["content"]}>
        {post.content.split("\n").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </p>
      <ImageListMaker image={post.image} />
      <InfoIconGroup
        postId={post.id}
        hearted={post.hearted}
        heartCount={post.heartCount}
        commentCount={post.commentCount}
      />
      <PostDate date={post.createdAt} />
    </article>
  );
}

export default PostCard;
