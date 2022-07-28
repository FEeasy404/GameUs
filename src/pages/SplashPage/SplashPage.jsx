import React from "react";
import { useEffect, useState } from "react";
import Logo from "../../assets/logo-main.svg";
import styles from "./splashPage.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function SplashPage() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginedUserContext);

  function handleNavigate() {
    if (!user.token) {
      navigate("/login");
    } else {
      navigate("/feed");
    }
  }
  useEffect(() => {
    const loginedData = user;
    setUser(loginedData);
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
