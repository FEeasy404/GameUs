import React from "react";
import Button from "../../components/atoms/Button/Button";
import logo from "../../assets/icon-404.svg";
import styles from "./errorPage.module.css";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles["wrapper-404"]}>
      <img src={logo} className={styles["logo"]} />
      <p className={styles["text"]}>페이지를 찾을 수 없습니다. :(</p>
      <Button
        href={null}
        size="large"
        label={"이전 페이지"}
        active={true}
        primary={true}
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default ErrorPage;
