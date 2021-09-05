import React from "react";
import styles from "./post.module.css";

const Post = (props) => {
  const { post } = props;

  return (
    <div className={styles.__post}>
      <div className={styles.__header}>
        <a className={styles.__title}>{post.title}</a>
        <a className={styles.__description}>{post.description}</a>
      </div>
      <div className={styles.__content}>
      <p className={styles.__p}>{post.content}</p>
      </div>
      <a>Creado: {post.created_at}</a>
    </div>
  );
};
export default Post;
