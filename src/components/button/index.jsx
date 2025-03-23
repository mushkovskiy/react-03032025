import { use } from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { ThemeContext } from "../../providers/theme";
export const Button = ({ children, onClick, ...rest }) => {
  const { theme } = use(ThemeContext);

  const classNames = cn(styles.root, {
    [styles.dark]: theme === "dark",
    [styles.light]: theme === "light",
  });

  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
