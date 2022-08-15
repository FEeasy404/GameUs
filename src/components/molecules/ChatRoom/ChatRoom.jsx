import React from "react";
import MyChat from "../../atoms/MyChat/MyChat";
import UserChat from "../../atoms/UserChat/UserChat";
import styles from "./chatroom.module.css";

function ChatRoom() {
  // 유저이미지 더미데이터입니다.
  const image = "https://i.imgur.com/Cu85FEk.jpg";

  return (
    <div className={styles["wrapper-chatroom"]}>
      <UserChat
        text={
          "안녕하세요!! 저 이번에 처음 닌텐도 샀는데 궁금한 게 있어서 연락드려요"
        }
        date={"12:39"}
        image={image}
        />
      <UserChat
        text={"닌텐도 게임 자주 하시는 것 같아서요"}
        date={"12:41"}
        image={image}
        />
      <MyChat text={"아 네네 뉴비 환영이죠 ^^"} date={"12:50"} />
      <MyChat text={"어떤 게 궁금하세요?"} date={"12:50"} />
      <MyChat
        image="https://img.insight.co.kr/static/2020/01/30/700/j088zi88gyw66dup9kr2.jpg"
        date={"12:51"}
        />
      <UserChat text={"젤다의 전설"} date={"12:52"} image={image}/>
      <UserChat text={"주인공 이름이 젤다인가요?"} date={"12:52"} image={image}/>
    </div>
  );
}

export default ChatRoom;
