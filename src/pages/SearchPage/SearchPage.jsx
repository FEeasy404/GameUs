import { Link } from "react-router-dom";
import styles from "./searchPage.module.css";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import ImageBox from "../../components/atoms/ImageBox/ImageBox";
import BottomNavigateBar from "../../components/modules/BottomNavigateBar/BottomNavigateBar";

// 마크업까지 구현되었으며, 추후 props를 통해 검색 기능을 추가할 예정

function SearchPage() {
  return (
    <section>
      <h2 className="a11y-hidden">유저 검색</h2>
      <HeaderForm backButton={true} input={true} />
      <div className="wrapper-contents">
        <ul className={styles["container-users"]}>
          <li>
            <Link to={"/profile/jordi3"} className={styles["container-user"]}>
              <ImageBox
                src={"https://mandarin.api.weniv.co.kr/1657961502180.png"}
                type={"circle"}
                size={"medium"}
                alt={"jordi3"}
              />
              <div className={styles["info-user"]}>
                <strong className={styles["username"]}>죠르디</strong>
                <span className={styles["id"]}>jordi3</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/profile/jordi3"} className={styles["container-user"]}>
              <ImageBox
                src={"https://mandarin.api.weniv.co.kr/1657961502180.png"}
                type={"circle"}
                size={"medium"}
                alt={"jordi3"}
              />
              <div className={styles["info-user"]}>
                <strong className={styles["username"]}>죠르디</strong>
                <span className={styles["id"]}>jordi3</span>
              </div>
            </Link>
          </li>
        </ul>        
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default SearchPage;
