import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/molecules/HeaderForm/HeaderForm";
import Loading from "../../components/molecules/Loading/Loading";
import MessageInput from "../../components/molecules/MessageInput/MessageInput";
import PostCard from "../../components/molecules/PostCard/PostCard";
import CommentList from "../../components/organisms/CommentList/CommentList";
import { LoginedUserContext } from "../../contexts/LoginedUserContext";
import {
  getPostData,
  getPostComment,
  uploadComment,
  deleteComment,
  reportComment,
} from "./PostViewPageAPI";

function PostViewPage() {
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
    if (inputText == "") return;
    let commentId = await uploadComment(user.token, postId, inputText);
    setChangeComments(commentId);
    inputRef.current.value = "";
  }

  //댓글 삭제
  async function handleDelete(commentId) {
    await deleteComment(user.token, postId, commentId);
    setChangeComments(commentId);
  }

  //댓글 신고
  async function handleReport(commentId) {
    await reportComment(user.token, post.id, commentId);
  }

  return (
    <section>
      <h2 className="a11y-hidden">게시글 상세 페이지</h2>
      <HeaderForm backButton={true} menuButton={true} />
      {post && comments ? (
        <div className="wrapper-contents">
          <PostCard post={post} />
          <CommentList
            comments={comments}
            handleDelete={handleDelete}
            handleReport={handleReport}
          />
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
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default PostViewPage;
