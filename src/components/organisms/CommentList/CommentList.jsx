import styles from "./commentList.module.css";
import CommentForm from "../../molecules/CommentForm/CommentForm";

//날짜 계산
function getTimeStamp(createdAt) {
  const createTime = new Date(createdAt);
  const now = new Date();
  const elapsedSec = (now.getTime() - createTime.getTime()) / 1000;
  const elapsedMin = elapsedSec / 60;
  const elapsedHour = elapsedMin / 60;
  const elapsedDay = elapsedHour / 24;
  const elapsedMonth = elapsedDay / 30;
  const elapsedYear = elapsedMonth / 12;
  if (elapsedSec < 61) return `조금 전`;
  if (elapsedMin < 61) return `${Math.floor(elapsedMin)}분 전`;
  if (elapsedHour < 25) return `${Math.floor(elapsedHour)}시간 전`;
  if (elapsedDay < 31) return `${Math.floor(elapsedDay)}일 전`;
  if (elapsedMonth < 13) return `${Math.floor(elapsedMonth)}달 전`;
  return `${Math.floor(elapsedYear)}년 전`;
}

function CommentList({ comments, handleDelete, handleReport }) {
  return (
    <ul className={styles["wrapper-comment"]}>
      {comments
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <li key={item.id}>
              <CommentForm
                id={item.id}
                src={item.author.image}
                accountName={item.author.accountname}
                userName={item.author.username}
                createTime={getTimeStamp(item.createdAt)}
                text={item.content}
                handleDelete={handleDelete}
                handleReport={handleReport}
              />
            </li>
          );
        })}
    </ul>
  );
}

export default CommentList;
