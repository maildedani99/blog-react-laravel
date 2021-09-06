import React from "react";
import styles from "./post.module.css";
import avatar from "./media/avatar.png";

const Post = (props) => {
  const { post } = props;
  return (
    <div className={styles.__post}>
      <div className={styles.__user}>
      <img className={styles.__avatar} src={avatar} alt="avatar" />
      <h3> UserName </h3>
      </div>
      <div className={styles.__infowrap}>

      <div className={styles.__header}>
        <a className={styles.__title}>{post.title}</a>
        <a className={styles.__description}>{post.description}</a>
      </div>
      <div className={styles.__content}>
      <p className={styles.__p}>{post.content}</p>
      </div>
      <a className={styles.__created}>Creado: {post.created_at}</a>
      </div>
    </div>
  );
};
export default Post;
