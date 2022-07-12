import ImageBox from "../../atoms/ImageBox/ImageBox";
import TextArea from "../../atoms/TextArea/TextArea";
import styles from "./postText.module.css";

function PostText() {
  return (
    <div className={styles["wrapper-post"]}>
      <ImageBox src="" type="circle" size="medium_small" alt="프로필 이미지" />
      <TextArea label="게시글 입력" />
    </div>
  );
}

export default PostText;
