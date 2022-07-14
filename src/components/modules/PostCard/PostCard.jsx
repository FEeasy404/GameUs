import React from "react"
import ImageBox from "../../atoms/ImageBox/ImageBox"
import Author from "../../atoms/Author/Author"
import MoreButton from "../../atoms/MoreButton/MoreButton"
import InfoIconGroup from "../InfoIconGroup/InfoIconGroup"
import PostDate from "../../atoms/PostDate/PostDate"
import styles from "./postCard.module.css"

function PostCard({user}) {

  user = {
    id: "@fsdjkahf123",
    name: "다희",
  }
  return (
    <div className={styles["container-post"]}>
      <div className={styles["profile"]}>
        <ImageBox type={"circle"} size={"medium_small"}/>
      </div>
      <div className={styles["container-user"]}>
          <Author authorName={user.name} authorId={user.id}/>
          <MoreButton></MoreButton>
      </div>
      <div>콘텐츠 박스</div>
      <div>이미지 박스</div>
      <InfoIconGroup post={{id: 1, comment: 12}}/>
      <PostDate date={"20210804"} />
    </div>
  )
}

export default PostCard
