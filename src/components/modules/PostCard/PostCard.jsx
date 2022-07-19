import React from "react"
import ImageBox from "../../atoms/ImageBox/ImageBox"
import Author from "../../atoms/Author/Author"
import MoreButton from "../../atoms/MoreButton/MoreButton"
import InfoIconGroup from "../InfoIconGroup/InfoIconGroup"
import PostDate from "../../atoms/PostDate/PostDate"
import styles from "./postCard.module.css"

function ImageListMaker({image}) {
  if(image.length === 1) {
    return (
      <ImageBox src={image[0]} type={"rounded_square"} size={"medium_large"} />
    )
  }else if(image.length > 1) {
    return (
      <ul>
        {image.map((item, index) => (
          <li key={index}>
            <ImageBox src={image} type={"rounded_square"} size={"medium_small"} />
          </li>
        ))}
      </ul>
    )
  }
}

function PostCard({post}) {
  const author = post.author;

  return (
    <article className={styles["container-post"]}>
      <div className={styles["profile"]}>
        <ImageBox type={"circle"} size={"medium_small"}/>
      </div>
      <div className={styles["container-user"]}>
          <Author authorName={author.username} authorId={author._id}/>
          <MoreButton />
      </div>
      <p>{post.content}</p>
      <ImageListMaker image={post.image} />
      <InfoIconGroup
        postId={post.id}
        hearted={post.hearted}
        heartCount={post.heartCount}
        commentCount={post.commentCount}
      />
      <PostDate date={post.createdAt} />
    </article>
  )
}

export default PostCard
