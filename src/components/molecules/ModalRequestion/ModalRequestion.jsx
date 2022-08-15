import React from "react";
import styles from "./modalRequestion.module.css";

//로그아웃 또는 댓글, 게시글, 상품 삭제, 신고 재확인시 사용하는 모달
function getModalText(requestData) {
  const name = requestData.name;
  const text = requestData.text;
  if (text === "신고") {
    return { modalText: "신고하시겠어요?", buttonText: "신고" };
  } else if (name === "로그인") {
    return { modalText: "로그아웃 하시겠어요?", buttonText: "로그아웃" };
  } else {
    return { modalText: `${name}을 삭제할까요?`, buttonText: "삭제" };
  }
}

function ModalRequestion({ onClose, requestData }) {
  return (
    <div
      className={styles["wrapper-modal"]}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <strong>{getModalText(requestData).modalText}</strong>
      <button onClick={onClose}>취소</button>
      <button
        onClick={() => {
          requestData.onClick();
          onClose();
        }}
      >
        {getModalText(requestData).buttonText}
      </button>
    </div>
  );
}

export default ModalRequestion;
