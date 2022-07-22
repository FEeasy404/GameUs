import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getPostData, getPostComment, uploadComment } from "./PostPageAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import PostCard from "../../components/modules/PostCard/PostCard";
import CommentList from "../../components/organisms/CommentList/CommentList";
import MessageInput from "../../components/modules/MessageInput/MessageInput";

function PostPage() {
  let { postId } = useParams();
  const inputRef = useRef();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getPostData(postId, setPost);
    getPostComment(postId, setComments);
  }, [postId, text]);

  async function handleTextInput() {
    const inputText = inputRef.current.value;
    inputRef.current.value = "";
    setText(inputText);
    await uploadComment(postId, inputText);
  }

  return (
    <section style={{ paddingBottom: "61px" }}>
      <h1 className="a11y-hidden">게시글 상세 페이지</h1>
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
      />
    </section>
  );
}

export default PostPage;
