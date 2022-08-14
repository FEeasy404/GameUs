import { Link } from "react-router-dom";
import styles from "./searchCard.module.css";
import ImageBox from "../../atoms/ImageBox/ImageBox";

function SearchCard({ user }) {
  // function handlekeywordColor() {
  //   console.log(keyword);
  // }
  return (
    <>
      <Link
        to={`/profile/${user.accountname}`}
        className={styles["container-user"]}
      >
        <ImageBox
          type={"circle"}
          size={"medium"}
          src={user.image}
          alt={user.accountname}
        />
        <div className={styles["info-user"]}>
          <strong className={styles["username"]}>{user.username}</strong>
          <span className={styles["id"]}>{user.accountname}</span>
        </div>
      </Link>
    </>
  );
}

export default SearchCard;
