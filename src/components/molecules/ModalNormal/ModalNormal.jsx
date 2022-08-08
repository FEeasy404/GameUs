import styles from "./modalNormal.module.css";

function ModalNormal({ buttons, onClose, handleButtonClick }) {
  //buttons: [{text:"string", onClick:function},...] 버튼 정보가 담긴 object배열을 받아옵니다
  return (
    <div
      className={styles["wrapper-modal"]}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <ul>
        {buttons.map((item, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={styles["button-modal"]}
                onClick={() => {
                  handleButtonClick(item.text, item.onClick, onClose);
                }}
              >
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ModalNormal;
