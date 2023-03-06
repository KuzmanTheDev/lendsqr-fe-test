import React from "react";
import { Header } from "components/layout/header/header";
import { Sidebar } from "components/layout/sidebar/sidebar";
import styles from "./layout.module.scss";
import { useMediaQuery } from "hooks/useMediaQuery";
import { Dock } from "components/layout/dock/dock";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const isMobile = useMediaQuery("( max-width: 450px )");

  console.log(isMobile);

  return (
    <div className={styles.authenticated__layout}>
      {!isMobile && <Sidebar />}

      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>

      {isMobile && <Dock />}
    </div>
  );
};
