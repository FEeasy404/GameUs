import React, { useState } from "react";
import ImagePostCard from "../../molecules/ImagePostCard/ImagePostCard";
import PostCard from "../../molecules/PostCard/PostCard";
import PostHeader from "../../molecules/PostHeader/PostHeader";
import styles from "./postList.module.css";

function PostList({ posts, setPosts }) {
  const [isAlbum, setAlbum] = useState(false);
  return (
    <section>
      <PostHeader isAlbum={isAlbum} setAlbum={setAlbum} />
      {!isAlbum ? (
        <ol>
          {posts.map((post, index) => (
            <li key={index}>
              <PostCard post={post} setPosts={setPosts} />
            </li>
          ))}
        </ol>
      ) : (
        <ol className={styles["list-image"]}>
          {posts.map(
            (post, index) =>
              post.image && (
                <li key={index}>
                  <ImagePostCard post={post} />
                </li>
              )
          )}
        </ol>
      )}
    </section>
  );
}

export default PostList;
