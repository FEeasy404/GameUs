import React from "react";
import Button from "../../atoms/Button/Button";
import styles from "./myProfileButton.module.css";

function MyProfileButton() {
  return (
    <div className={styles["container-button"]}>
      <Button
        href="/profile/edit"
        size="medium"
        label="프로필 수정"
        active={true}
        primary={false}
      />
      <Button
        href="/product"
        size="medium"
        label="상품 등록"
        active={true}
        primary={false}
      />
    </div>
  );
}

export default MyProfileButton;
