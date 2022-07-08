import React from "react";
import styles from "./imageinput.module.css"

function ImageInput({a11y, size, id, isProfileImageInput}) {
  const containerClasseList = [styles["container"]];
  isProfileImageInput ? containerClasseList.push(styles["profile"]) : null;

  return (
    <div className={containerClasseList.join(' ')}>
      <p className="a11y-hidden">{a11y}</p>
      <label 
      htmlFor={id}
      className={[
        styles["label-file"],
        styles[size]
        ].join(" ")}></label>
      <input 
        type="file" 
        accept=".jpeg, .jpg, .png"
        id={id}
        className={"a11y-hidden"} 
      />
    </div>
  );
}

export default ImageInput;
