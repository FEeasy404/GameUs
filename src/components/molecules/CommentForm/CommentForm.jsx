import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../../atoms/IconButton/IconButton";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import Modal from "../../organisms/Modal/Modal";
import { LoginedUserContext } from "../../../contexts/LoginedUserContext";
import styles from "./commentForm.module.css";

function CommentForm({
  id,
  src,
  accountName,
  userName,
  createTime,
  text,
  handleDelete,
  handleReport,
}) {
  const navigate = useNavigate();
  const [onModal, setOnModal] = useState(false);
  const { user } = useContext(LoginedUserContext);

  return (
    <>
      <div className={styles["wrapper-comment"]}>
        <ImageBox src={src} type="circle" size="small" alt="프로필 이미지" />
        <div className={styles["comment_info"]}>
          <strong onClick={() => navigate(`/profile/${accountName}`)}>
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
            user.accountname === accountName
              ? [{ text: "삭제", onClick: () => handleDelete(id) }]
              : [{ text: "신고", onClick: () => handleReport(id) }]
          }
          name="댓글"
        />
      )}
    </>
  );
}

export default CommentForm;
