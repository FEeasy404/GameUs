import React from "react";
import ImageBox from "../../components/atoms/ImageBox/ImageBox";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import BottomNavigateBar from "./components/modules/BottomNavigateBar/BottomNavigateBar";
import styles from "./chatListPage.module.css";

function ChatListPage() {
  // 더미 데이터
  const item1 = {
    username: "지상 최강의 뉴비",
    message: "주인공 이름이 젤다인가요?",
    date: "2020.10.25",
    read: false,
  };
  const item2 = {
    username: "애국자",
    message: "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
    date: "2020.10.25",
    read: true,
  }
  const chatData = [item1, item2];
  console.log(chatData)

  return (
    <section>
      <h1 className="a11y-hidden">채팅목록</h1>
      <HeaderForm backButton={true} menuButton={true} />
      <ul className={styles["list-chat"]}>
        {chatData.map((item, index) => (
          <li key={index} className={styles["item-chat"]}>
            <div className={`${styles.left} ${item.read ? "" : styles.unread}`}>
              <ImageBox type={"circle"} size={"medium_small"} />
            </div>
            <div className={styles.right}>
                <strong className={styles.username}>
                  {item.username}
                </strong>
              <div className={styles["info-message"]}>
                <span className={styles.message}>
                  {item.message}
                </span>
                <span className={styles.date}>
                  {item.date}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <BottomNavigateBar />
    </section>
  )
}

export default ChatListPage
