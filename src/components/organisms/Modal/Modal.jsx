import React, { useState } from "react";
import ReactDom from "react-dom";
import ModalNormal from "../../molecules/ModalNormal/ModalNormal";
import ModalRequestion from "../../molecules/ModalRequestion/ModalRequestion";
import styles from "./modal.module.css";

function Modal({ onClose, buttons, name }) {
  const [requestModal, setRequestModal] = useState(false);
  const [requestData, setRequestData] = useState();
  //버튼 클릭시 재확인 모달을 띄울지, 그냥 함수를 실행할지 판단
  function handleButtonClick(text, onClick) {
    if (text === "삭제" || text === "로그아웃" || text === "신고") {
      setRequestModal(!requestModal);
      setRequestData({ name, onClick, text });
      return;
    }
    onClick();
  }
  return ReactDom.createPortal(
    <article className={styles["background"]} onClick={onClose}>
      {requestModal ? (
        <ModalRequestion onClose={onClose} requestData={requestData} />
      ) : (
        <ModalNormal
          buttons={buttons}
          onClose={onClose}
          handleButtonClick={handleButtonClick}
        />
      )}
    </article>,
    document.getElementById("portal")
  );
}

export default Modal;
