import { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./searchPage.module.css";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import ImageBox from "../../components/atoms/ImageBox/ImageBox";
import BottomNavigateBar from "../../components/molecules/BottomNavigateBar/BottomNavigateBar";
import { getSearchUser } from "./SearchPageAPI";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function SearchPage() {
  const [searchUser, setSeacrhUser] = useState(null);
  const { user } = useContext(LoginedUserContext);
  const handleInputText = useCallback((event) => {
    let keyword = event.target.value;
    if (!event.target.value) {
      setSeacrhUser(null);
      return;
    }
    getSearchUser(user.token, keyword, setSeacrhUser);
  });
  return (
    <section>
      <h2 className="a11y-hidden">유저 검색</h2>
      <HeaderForm backButton={true} input={true} onChange={handleInputText} />
      <div className="wrapper-contents">
        <ul className={styles["container-users"]}>
          {searchUser &&
            searchUser.map((user) => {
              return (
                <li key={user._id}>
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
                        {user.username}
                      </strong>
                      <span className={styles["id"]}>{user.accountname}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default SearchPage;
