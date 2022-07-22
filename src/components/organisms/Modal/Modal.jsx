import ReactDom from "react-dom";
import { useState } from "react";
import styles from "./modal.module.css";
import ModalNormal from "../../modules/ModalNormal/ModalNormal";
import ModalRequestion from "../../modules/ModalRequestion/ModalRequestion";

function Modal({ onModal, onClose, buttons, name }) {
  const [requestModal, setRequestModal] = useState(false);
  const [requestData, setRequestData] = useState();
  if (!onModal) return null;
  //버튼 클릭시 재확인 모달을 띄울지, 그냥 함수를 실행할지 판단
  function handleButtonClick(text, onClick) {
    if (text === "삭제" || text === "로그아웃") {
      setRequestModal(!requestModal);
      setRequestData({ name, onClick });
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
