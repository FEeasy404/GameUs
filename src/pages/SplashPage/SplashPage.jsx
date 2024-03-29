import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import MainLogo from "../../assets/logo-main.svg";
import styles from "./splashPage.module.css";

function SplashPage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(LoginedUserContext);

  function handleNavigate() {
    if (!user.token) {
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
        src={MainLogo}
      />
      <button className={styles["button-start"]} onClick={handleNavigate}>
        <span className="a11y-hidden">시작하기</span>
      </button>
    </section>
  );
}

export default SplashPage;
