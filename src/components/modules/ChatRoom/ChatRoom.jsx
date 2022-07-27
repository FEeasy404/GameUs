import React from "react";
import styles from "./chatroom.module.css";
import UserChat from "../../atoms/Chat/UserChat/UserChat";
import MyChat from "../../atoms/Chat/MyChat/MyChat";

function ChatRoom() {
  return (
    <div className={styles["wrapper-chatroom"]}>
      <UserChat
        text={
          "광대한 세계를 무대로 어디로 가든, 무엇을 하든, 모험의 모든 것을 당신이 원하는 대로 할 수 있습니다. 야생 동물을 사냥하며 지낼 것인가? 몬스터를 퇴치하러 갈 것인가? 절경 포인트를 보러 다닐 것인가? 달리고, 헤엄치고, 날고, 높은 곳을 오르고, 광활한 세계에서 본인이 마음먹은 대로 모험할 수 있습니다. Nintendo Switch를 통해, 자택의 TV로 느긋하게 플레이 하다가 그대로 들고 나가 외출 중에도 계속해서 모험을 즐길 수 있는 등, 자유로운 플레이 스타일로 즐길 수 있습니다."
        }
        date={"12:39"}
      />
      <UserChat
        text={"안녕하세요. 주인공 이름이 젤다인가요오오오오"}
        date={"12:41"}
      />{" "}
      <MyChat text={"네 말씀하세요."} date={"12:50"} />
      <MyChat
        image="https://img.insight.co.kr/static/2020/01/30/700/j088zi88gyw66dup9kr2.jpg"
        date={"12:51"}
      />
    </div>
  );
}

export default ChatRoom;
