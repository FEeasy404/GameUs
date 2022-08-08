import { useState, useEffect } from "react";
import Button from "../../components/atoms/Button/Button";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import PostCard from "../../components/molecules/PostCard/PostCard";
import catImageURL from "../../assets/icon-404-cat.png";
import BottomNavigateBar from "../../components/molecules/BottomNavigateBar/BottomNavigateBar";
import Loading from "../../components/molecules/Loading/Loading";
import styles from "./homePage.module.css";
import { BASE_URL } from "../../common/BASE_URL";
import { useContext } from "react";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function HomePage() {
  const [posts, setPosts] = useState(null);
  // 화면에 보이는 포스트 개수를 post_limit에 지정합니다.
  let post_limit = 10;
  // 보지 않을 포스트 개수를 post_skip에 저장합니다. 이후 skip_amount만큼 증가합니다.
  let post_skip = 0;
  // const skip_amount = 5;

  const REQ_PATH = `/post/feed/?limit=${post_limit}&skip=${post_skip}`;

  const { user } = useContext(LoginedUserContext);

  // 팔로우하는 유저의 게시글 목록을 posts state에 받아옵니다.
  useEffect(() => {
    async function getPostDatas() {
      try {
        const response = await fetch(BASE_URL + REQ_PATH, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-type": "application/json",
          },
        });
        const result = await response.json();
        setPosts(result.posts);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPostDatas();
  }, []);

  // posts 배열의 길이가 0이면 팔로우한 유저가 없다고 판단, 검색 버튼이 나옵니다.
  // post 배열의 길이가 1이 아니면 PostCard로 List를 만듭니다.
  return (
    <section>
      <h2 className="a11y-hidden">게임어스 홈 피드</h2>
      <HeaderForm title={"홈 피드"} searchButton={true} titleSize={"large"} />
      <div className="wrapper-contents">
        {posts ? (
          posts.length === 0 ? (
            <div className={styles["container-search_notice"]}>
              <img src={catImageURL} />
              <p className={styles["text"]}>유저를 검색해 팔로우 해보세요!</p>
              <Button
                href={"/search"}
                size="medium"
                label={"검색하기"}
                active={true}
                primary={true}
              />
            </div>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )
        ) : (
          <Loading />
        )}
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default HomePage;
