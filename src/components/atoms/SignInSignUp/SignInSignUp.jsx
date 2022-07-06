import { Link } from "react-router-dom";
import styles from "./signInSignUp.module.css";

function SignInSignUp() {
  return (
    <>
      <Link to="" className={styles["link-login"]}>
        메일로 로그인
      </Link>
      <Link to="" className={styles["link-join"]}>
        회원가입
      </Link>
    </>
  );
}

export default SignInSignUp;
