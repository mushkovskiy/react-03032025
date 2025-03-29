import { use } from "react";
import { Button } from "../button";
import { ThemeContext } from "../../providers/theme";
import { AuthContext } from "../../providers/auth";
import styles from "./index.module.css";

export const Header = () => {
  const { toggleTheme } = use(ThemeContext);
  const { user, toggleAuthorize } = use(AuthContext);
  const { userName } = user;
  return (
    <div className={styles.root}>
      {userName ? <h3>{userName}</h3> : null}
      <div className={styles.controls}>
        <Button onClick={toggleTheme}>Toggle Theme</Button>

        <Button onClick={toggleAuthorize}>
          {userName ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
