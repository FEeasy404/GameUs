import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./commentForm.module.css";
import IconButton from "../../atoms/IconButton/IconButton";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import Modal from "../../../components/organisms/Modal/Modal";

function CommentForm({
  id,
  src,
  accoutName,
  userName,
  createTime,
  text,
  handleDelete,
}) {
  const navigate = useNavigate();
  const [onModal, setOnModal] = useState(false);
  const myAccountname = window.localStorage.getItem("accountname");

  return (
    <>
      <div className={styles["wrapper-comment"]}>
        <ImageBox src={src} type="circle" size="small" alt="프로필 이미지" />
        <div className={styles["comment_info"]}>
          <strong onClick={() => navigate(`/profile/${accoutName}`)}>
            {userName}
          </strong>
          <small>{`· ${createTime}`}</small>
        </div>
        <IconButton
          type="more"
          onClick={() => {
            setOnModal(!onModal);
          }}
        />
        <p className={styles["text"]}>{text}</p>
      </div>
      {onModal && (
        <Modal
          onClose={() => setOnModal(false)}
          buttons={
            myAccountname === accoutName
              ? [{ text: "삭제", onClick: () => handleDelete(id) }]
              : [{ text: "신고" }]
          }
          name="댓글"
        />
      )}
    </>
  );
}

export default CommentForm;
