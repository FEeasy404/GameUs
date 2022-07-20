import { useNavigate } from "react-router-dom";
import styles from "./commentForm.module.css";
import IconButton from "../../atoms/IconButton/IconButton";
import ImageBox from "../../atoms/ImageBox/ImageBox";

function CommentForm({ src, accoutName, userName, createTime, text }) {
  const navigate = useNavigate();
  function handleMoreButton() {
    console.log("더보기");
  }
  return (
    <div className={styles["wrapper-comment"]}>
      <div className={styles["wrapper-upper"]}>
        <ImageBox src={src} type="circle" size="small" alt="프로필 이미지" />
        <div
          className={styles["comment_info"]}
          onClick={() => navigate(`/profile/${accoutName}`)}
        >
          <strong>{userName}</strong>
          <small>{`· ${createTime}`}</small>
        </div>
        <IconButton type="more" onClick={handleMoreButton} />
      </div>
      <p className={styles["text"]}>{text}</p>
    </div>
  );
}

export default CommentForm;
