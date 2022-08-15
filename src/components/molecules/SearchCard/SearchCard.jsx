import { Link } from "react-router-dom";
import styles from "./searchCard.module.css";
import ImageBox from "../../atoms/ImageBox/ImageBox";

function SearchCard({ user, keyword }) {
  function handlekeywordColor(userString) {
    if (userString.includes(keyword)) {
      return (
        <>
          {userString.split(keyword)[0]}
          <span className={styles["word-colored"]}>{keyword}</span>
          {userString.split(keyword)[1]}
        </>
      );
    }
    return userString;
  }
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
          <strong className={styles["username"]}>
            {handlekeywordColor(user.username)}
          </strong>
          <span className={styles["id"]}>
            {`@ ${handlekeywordColor(user.accountname)}`}
          </span>
        </div>
      </Link>
    </>
  );
}

export default SearchCard;
