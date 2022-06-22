import React from "react";
import { Sidebar } from "../sidebar";
import { useStyles } from "./styles";

export const PageControl = ({ children }: { children?: JSX.Element }) => {
  const styles = useStyles();

  return (
    <div className={styles.sidebar}>
      <Sidebar />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}