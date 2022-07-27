import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  getPostData,
  getPostComment,
  uploadComment,
  deleteComment,
} from "./PostPageAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import PostCard from "../../components/modules/PostCard/PostCard";
import CommentList from "../../components/organisms/CommentList/CommentList";
import MessageInput from "../../components/modules/MessageInput/MessageInput";

function PostPage() {
  let { postId } = useParams();
  const inputRef = useRef();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [changeComments, setChangeComments] = useState(false);
  const myImage = window.sessionStorage.getItem("image");

  useEffect(() => {
    getPostComment(postId, setComments);
    getPostData(postId, setPost);
  }, [postId, changeComments]);

  //댓글 입력 및 추가
  async function handleTextInput() {
    const inputText = inputRef.current.value;
    inputRef.current.value = "";
    await uploadComment(postId, inputText);
    setChangeComments(inputText);
  }

  //댓글 삭제
  async function handleDelete(commentId) {
    await deleteComment(postId, commentId);
    setChangeComments(commentId);
  }

  return (
    <section>
      <h2 className="a11y-hidden">게시글 상세 페이지</h2>
      <HeaderForm backButton={true} menuButton={true} />
      <div className="wrapper-contents">
        {post && <PostCard post={post} />}
        {comments && (
          <CommentList comments={comments} handleDelete={handleDelete} />
        )}
        <MessageInput
          type="comment"
          src={myImage}
          title="댓글"
          placeholder="댓글 입력하기..."
          buttonText="게시"
          inputRef={inputRef}
          onClick={handleTextInput}
        />
      </div>
    </section>
  );
}

export default PostPage;
