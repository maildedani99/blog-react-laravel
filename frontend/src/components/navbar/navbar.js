import React from "react";
import styles from "./navbar.module.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const goToShowPost = () => {
    history.push("/");
  };
  const goToLogin = () => {
    history.push("/login");
  };
  const goToPostForm = () => {
    history.push("/postform");
  };

  return (
    <div className={styles.__navbar}>
      Blog creado en React.js, Laravel y MySQL
      <input
        className={styles.__button}
        type="button"
        value="Inicio"
        onClick={goToShowPost}
      />
      <input
        className={styles.__button}
        type="button"
        value="Nuevo Post"
        onClick={goToPostForm}
      />
      <input
        className={styles.__button_login}
        type="button"
        value="Login"
        onClick={goToLogin}
      />
    </div>
  );
};
export default Navbar;
