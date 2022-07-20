import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../components/modules/HeaderForm/HeaderForm";
import PostCard from "../components/modules/PostCard/PostCard";
import CommentList from "../components/organisms/CommentList/CommentList";
import MessageInput from "../components/modules/MessageInput/MessageInput";

function PostPage() {
  let { postId } = useParams();
  const inputRef = useRef();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const BASE_URL = "https://mandarin.api.weniv.co.kr";
  const TOKEN = window.localStorage.getItem("token");
  const reqData = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    async function getPostData() {
      try {
        const response = await fetch(BASE_URL + `/post/${postId}`, reqData);
        const result = await response.json();
        setPost(result.post);
      } catch (error) {
        console.log(error.message);
      }
    }

    async function getPostComment() {
      try {
        const response = await fetch(
          BASE_URL + `/post/${postId}/comments`,
          reqData
        );
        const result = await response.json();
        setComments(result.comments.reverse());
      } catch (error) {
        console.log(error.message);
      }
    }
    getPostData();
    getPostComment();
  }, [postId, text]);

  async function uploadComment(text) {
    const commentData = {
      comment: {
        content: text,
      },
    };
    try {
      fetch(BASE_URL + `/post/${postId}/comments`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(commentData),
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleTextInput() {
    const inputText = inputRef.current.value;
    inputRef.current.value = "";
    setText(inputText);
    await uploadComment(inputText);
  }

  function handleOnkeyPress(event) {
    if (event.key === "Enter") {
      handleTextInput();
    }
  }

  return (
    <div style={{ paddingBottom: "61px" }}>
      <HeaderForm backButton={true} menuButton={true} />
      {post && <PostCard post={post} />}
      {comments && <CommentList comments={comments} />}
      <MessageInput
        type="comment"
        src=""
        title="댓글"
        placeholder="댓글 입력하기..."
        buttonText="게시"
        inputRef={inputRef}
        onClick={handleTextInput}
        onKeyPress={handleOnkeyPress}
      />
    </div>
  );
}

export default PostPage;
