import styles from "./modalRequestion.module.css";

//로그아웃 또는 댓글, 게시글, 상품 삭제 재확인시 사용하는 모달
function ModalRequestion({ onClose, requestData }) {
  const name = requestData.name;
  return (
    <div
      className={styles["wrapper-modal"]}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <strong>
        {name === "로그인" ? `로그아웃 하시겠어요?` : `${name}을 삭제할까요?`}
      </strong>
      <button onClick={onClose}>취소</button>
      <button
        onClick={() => {
          requestData.onClick();
          onClose();
        }}
      >
        {name === "로그인" ? "로그아웃" : "삭제"}
      </button>
    </div>
  );
}

export default ModalRequestion;
