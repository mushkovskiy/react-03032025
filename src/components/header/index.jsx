import styles from "./index.module.css";
import { ToggleThemeButton } from "../toggle-theme-btn";
import { AuthButton } from "../auth-button";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <AuthButton />
        <ToggleThemeButton />
      </div>
    </div>
  );
};
