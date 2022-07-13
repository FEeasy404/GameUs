import ImageBox from "../../atoms/ImageBox/ImageBox";
import IconButton from "../../atoms/IconButton/IconButton";
import styles from "./postImage.module.css";

function PostImage({ size, item, handleDeleteBtn }) {
  return (
    <div className={`${styles["wrapper-image"]} ${styles[size]}`}>
      <ImageBox src={item.src} type="rounded_square" size={size} />
      <IconButton
        type="close"
        text="이미지 취소"
        onClick={() => handleDeleteBtn(item.key)}
      />
    </div>
  );
}

export default PostImage;
