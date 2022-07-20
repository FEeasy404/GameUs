import ImageBox from "../../atoms/ImageBox/ImageBox";
import TextArea from "../../atoms/TextArea/TextArea";
import styles from "./uploadText.module.css";

function UploadText({ handleText }) {
  return (
    <div className={styles["wrapper-post"]}>
      <ImageBox src="" type="circle" size="medium_small" alt="프로필 이미지" />
      <TextArea label="게시글 입력" handleText={handleText} />
    </div>
  );
}

export default UploadText;
