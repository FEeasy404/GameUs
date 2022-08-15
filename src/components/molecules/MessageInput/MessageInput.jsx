import React, { useEffect, useState } from "react";
import ImageBox from "../../atoms/ImageBox/ImageBox";
import ImageInputButton from "../../atoms/ImageInputButton/ImageInputButton";
import styles from "./messageInput.module.css";

function MessageInput({
  type,
  src,
  title,
  placeholder,
  buttonText,
  inputRef,
  onClick,
}) {
  const [inputText, setInputText] = useState(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handleOnkeyPress(event) {
    if (event.key === "Enter") {
      onClick();
      setInputText(null);
    }
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
        onChange={(event) => {
          setInputText(event.target.value);
        }}
        className={styles["comment-input"]}
        onKeyPress={handleOnkeyPress}
      />
      <button
        type="submit"
        className={
          inputText ? styles["button-active"] : styles["button-disable"]
        }
        onClick={() => {
          onClick();
          setInputText(null);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default MessageInput;
