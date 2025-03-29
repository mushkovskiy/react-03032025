import { Outlet } from "react-router";
import { Header } from "../header";
import styles from "./index.module.css";
import { Cart } from "../cart";
export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
      <Cart />
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
