import { useState, useEffect } from "react";
import styles from "./messageInput.module.css";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";

function MessageInput({
  type,
  src,
  title,
  placeholder,
  buttonText,
  inputRef,
  onClick,
}) {
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={styles["wrapper-comment"]}>
      {type === "comment" && (
        <ImageBox src={src} type="circle" size="small" alt="프로필 이미지" />
      )}
      {type === "message" && <ImageInputButton color="gray" size="medium" />}
      <input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        title={title}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        className={styles["comment-input"]}
      />
      <button
        type="submit"
        className={
          inputText ? styles["button-active"] : styles["button-disable"]
        }
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MessageInput;
