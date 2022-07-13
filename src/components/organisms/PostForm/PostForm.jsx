import PostImage from "../../modules/PostImage/PostImage";
import PostText from "../../modules/PostText/PostText";
import styles from "./postForm.module.css";
function PostForm({ images, handleDeleteBtn }) {
  return (
    <div className={styles["form-post"]}>
      <PostText />
      {images.length === 1 ? (
        <PostImage
          size="medium_large"
          item={images[0]}
          handleDeleteBtn={handleDeleteBtn}
        />
      ) : (
        <ul className={styles["list"]}>
          {images.map((item) => {
            return (
              <li key={item.key}>
                <PostImage
                  size="medium_small"
                  item={item}
                  handleDeleteBtn={handleDeleteBtn}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default PostForm;
