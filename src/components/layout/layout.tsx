import { Header } from "components/layout/header/header";
import { Sidebar } from "components/layout/sidebar/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />

      <Header />

      {children}
    </>
  );
};
