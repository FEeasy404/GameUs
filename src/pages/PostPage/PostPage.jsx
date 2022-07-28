import { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  getPostData,
  getPostComment,
  uploadComment,
  deleteComment,
  reportComment,
} from "./PostPageAPI";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import PostCard from "../../components/modules/PostCard/PostCard";
import CommentList from "../../components/organisms/CommentList/CommentList";
import MessageInput from "../../components/modules/MessageInput/MessageInput";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";

function PostPage() {
  let { postId } = useParams();
  const inputRef = useRef();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  const [changeComments, setChangeComments] = useState(false);

  const { user } = useContext(LoginedUserContext);

  useEffect(() => {
    getPostComment(user.token, postId, setComments);
    getPostData(user.token, postId, setPost);
  }, [postId, changeComments]);

  //댓글 입력 및 추가
  async function handleTextInput() {
    const inputText = inputRef.current.value;
    inputRef.current.value = "";
    await uploadComment(user.token, postId, inputText);
    setChangeComments(inputText);
  }

  //댓글 삭제
  async function handleDelete(commentId) {
    await deleteComment(user.token, postId, commentId);
    setChangeComments(commentId);
  }

  //댓글 신고
  async function handleReport(commentId) {
    await reportComment(post.id, commentId);
  }

  return (
    <section>
      <h2 className="a11y-hidden">게시글 상세 페이지</h2>
      <HeaderForm backButton={true} menuButton={true} />
      <div className="wrapper-contents">
        {post && <PostCard post={post} />}
        {comments && (
          <CommentList
            comments={comments}
            handleDelete={handleDelete}
            handleReport={handleReport}
          />
        )}
        <MessageInput
          type="comment"
          src={user.image}
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
