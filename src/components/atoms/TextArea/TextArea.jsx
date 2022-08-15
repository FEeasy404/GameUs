import React, { useCallback, useEffect, useRef } from "react";
import styles from "./textArea.module.css";

function TextArea({ label, handleText, text }) {
  //textarea 높이 조절
  const textRef = useRef();
  const textAreaResize = useCallback(() => {
    const textBox = textRef.current;
    textBox.style.height = "auto";
    textBox.style.height = textBox.scrollHeight + "px";
  }, []);

  //컴포넌트가 mount될때 textarea에 focus
  useEffect(() => {
    textRef.current.focus();
    text && (textRef.current.value = text);
    textAreaResize();
  }, [text]);

  return (
    <>
      <label htmlFor="text" className="a11y-hidden">
        {label}
      </label>
      <textarea
        id="text"
        ref={textRef}
        placeholder="게시글 입력하기.."
        className={styles["input-text"]}
        onChange={(event) => {
          textAreaResize();
          handleText(event);
        }}
      ></textarea>
    </>
  );
}

export default TextArea;
