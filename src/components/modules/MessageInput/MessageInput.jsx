import { useState, useRef, useEffect } from "react";
import styles from "./messageInput.module.css";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";

function MessageInput({ type, src, title, placeholder, buttonText }) {
  const [text, setText] = useState("");
  const inputRef = useRef();
  //mount 되면 input focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handleTextInput(event) {
    setText(event.target.value);
  }
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
        onChange={handleTextInput}
        className={styles["comment-input"]}
      />
      <button
        type="submit"
        className={text ? styles["button-active"] : styles["button-disable"]}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MessageInput;
