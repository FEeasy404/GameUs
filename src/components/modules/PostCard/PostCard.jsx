import React from "react";
import { useState } from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import Author from "../../atoms/Author/Author";
import InfoIconGroup from "../InfoIconGroup/InfoIconGroup";
import PostDate from "../../atoms/PostDate/PostDate";
import styles from "./postCard.module.css";
import IconButton from "../../atoms/IconButton/IconButton";
import Modal from "../../../components/organisms/Modal/Modal";
import { Link } from "react-router-dom";
import { deletePost, reportPost } from "./PostCardAPI";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import { getPosts } from "../../../pages/ProfilePage/ProfilePageAPI";

function ImageListMaker({ image }) {
  if (!image) return null;
  const imageData = image.split(",");
  return (
    <ul className={styles["list-images"]}>
      {imageData.map((item, index) => (
        <li key={index} className={styles["item-image"]}>
          <ImageBox src={item} type={"rounded_square"} size={"medium_large"} />
        </li>
      ))}
    </ul>
  );
}

function PostCard({ post, setPosts }) {
  const navigate = useNavigate();
  const [onModal, setOnModal] = useState(false);
  const { user } = useContext(LoginedUserContext);
  const author = post.author;
  async function handlePostDelete(postId) {
    await deletePost(user.token, postId);
    getPosts(user.token, user.accountname, setPosts);
    navigate(`/profile/${author.accountname}`);
  }
  function handlePostChange(postId) {
    navigate(`/post/edit/${postId}`);
  }
  async function handlePostReport(postId) {
    await reportPost(user.token, postId);
  }
  return (
    <>
      <article className={styles["container-post"]}>
        <Link
          to={`/profile/${author.accountname}`}
          className={styles["profile"]}
        >
          <ImageBox type={"circle"} size={"medium_small"} src={author.image} />
        </Link>
        <div className={styles["container-user"]}>
          <Author authorName={author.username} authorId={author.accountname} />
          <IconButton
            type={"more"}
            text={"?????????"}
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
            user.accountname === author.accountname
              ? [
                  { text: "??????", onClick: () => handlePostDelete(post.id) },
                  { text: "??????", onClick: () => handlePostChange(post.id) },
                ]
              : [{ text: "??????", onClick: () => handlePostReport(post.id) }]
          }
          name="?????????"
        />
      )}
    </>
  );
}

export default PostCard;
