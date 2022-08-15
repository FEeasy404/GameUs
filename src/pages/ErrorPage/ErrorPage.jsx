import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import CatLogo from "../../assets/icon-404-cat.png";
import styles from "./errorPage.module.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section>
      <div className={`${styles["wrapper-404"]}`}>
        <img src={CatLogo} className={styles["logo"]} />
        <h2 className={styles["text"]}>페이지를 찾을 수 없습니다. :(</h2>
        <div className={styles["wrapper-button"]}>
          <Button
            href={null}
            size="large"
            label={"이전 페이지"}
            active={true}
            primary={true}
            onClick={() => navigate(-1)}
          />
          <Button
            href={"/"}
            size="large"
            label={"메인 페이지"}
            active={true}
            primary={true}
          />
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
