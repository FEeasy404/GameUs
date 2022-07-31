import React from "react";
import styles from "./chatroom.module.css";
import UserChat from "../../atoms/Chat/UserChat/UserChat";
import MyChat from "../../atoms/Chat/MyChat/MyChat";

function ChatRoom() {
  return (
    <div className={styles["wrapper-chatroom"]}>
      <UserChat
        text={
          "안녕하세요!! 저 이번에 처음 닌텐도 샀는데 궁금한 게 있어서 연락드려요"
        }
        date={"12:39"}
      />
      <UserChat
        text={"닌텐도 게임 자주 하시는 것 같아서요"}
        date={"12:41"}
      />
      <MyChat text={"아 네네 뉴비 환영이죠 ^^"} date={"12:50"} />
      <MyChat text={"어떤 게 궁금하세요?"} date={"12:50"} />
      <MyChat
        image="https://img.insight.co.kr/static/2020/01/30/700/j088zi88gyw66dup9kr2.jpg"
        date={"12:51"}
      />
      <UserChat text={"젤다의 전설"} date={"12:52"} />
      <UserChat text={"주인공 이름이 젤다인가요?"} date={"12:52"} />
    </div>
  );
}

export default ChatRoom;
