import React from "react";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import MessageInput from "../../components/molecules/MessageInput/MessageInput";
import ChatRoom from "../../components/molecules/ChatRoom/ChatRoom";
import { useRef } from "react";

function ChatRoomPage() {
  const inputRef = useRef();

  return (
    <div>
      <HeaderForm
        backButton={true}
        title="지상 최강의 뉴비"
        titleSize="small"
        menuButton={true}
      />
      <ChatRoom />
      <MessageInput
        type="message"
        title="메세지"
        placeholder="메세지 입력하기..."
        buttonText="전송"
        inputRef={inputRef}
      />
    </div>
  );
}

export default ChatRoomPage;
