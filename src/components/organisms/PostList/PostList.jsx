import React from "react";
import { useState } from "react";
import styles from "./postList.module.css";
import PostHeader from "../../modules/PostHeader/PostHeader";
import PostCard from "../../modules/PostCard/PostCard";
import ImagePostCard from "../../modules/ImagePostCard/ImagePostCard";

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
