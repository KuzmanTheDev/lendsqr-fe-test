import React from "react";
import { Header } from "components/layout/header/header";
import { Sidebar } from "components/layout/sidebar/sidebar";
import styles from "./layout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.authenticated__layout}>
      <Sidebar />

      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};
