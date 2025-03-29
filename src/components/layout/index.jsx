import { Header } from "../header";
import styles from "./index.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
