import React from "react";
import { Link } from "react-router-dom";
import ImageBox from "../../components/atoms/ImageBox/ImageBox";
import BottomNavigateBar from "../../components/molecules/BottomNavigateBar/BottomNavigateBar";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import styles from "./chatListPage.module.css";

function ChatListPage() {
  // 더미 데이터
  const item1 = {
    username: "지상 최강의 뉴비",
    message: "주인공 이름이 젤다인가요?",
    date: "2020.10.25",
    read: false,
    image: "https://i.imgur.com/Cu85FEk.jpeg",
  };
  const item2 = {
    username: "애국자",
    message: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    date: "2020.10.25",
    read: true,
    image: "https://i.imgur.com/OFpTHKK.jpg",
  };
  const chatData = [item1, item2];

  return (
    <section>
      <h2 className="a11y-hidden">채팅목록</h2>
      <HeaderForm backButton={true} menuButton={true} />
      <div className="wrapper-contents">
        <ul className={styles["list-chat"]}>
          {chatData.map((item, index) => (
            <li key={index} className={styles["item-chat"]}>
              <div className={`${styles.left} ${item.read ? "" : styles.unread}`}>
                <ImageBox type={"circle"} size={"medium_small"} src={item.image} />
              </div>
              <div className={styles.right}>
                <Link to={"/chat/strongnewbi"} >
                  <strong className={styles.username}>{item.username}</strong>
                  <div className={styles["info-message"]}>
                    <span className={styles.message}>{item.message}</span>
                    <span className={styles.date}>{item.date}</span>
                  </div>  
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default ChatListPage;
