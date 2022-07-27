import React from "react";
import { useEffect, useState } from "react";
import Logo from "../../assets/logo-main.svg";
import styles from "./splashPage.module.css";
import { useNavigate } from "react-router-dom";

function SplashPage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const TOKEN = window.localStorage.getItem("token");

  function handleNavigate() {
    if (!TOKEN) {
      navigate("/login");
    } else {
      navigate("/feed");
    }
  }
  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <section className={styles["wrapper-splash"]}>
      <h2 className="a11y-hidden">게임어스</h2>
      <img
        className={visible ? styles["logo-main"] : styles["logo-main-hide"]}
        src={Logo}
      />
      <button className={styles["button-start"]} onClick={handleNavigate}>
        <span className="a11y-hidden">시작하기</span>
      </button>
    </section>
  );
}

export default SplashPage;
