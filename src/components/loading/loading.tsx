import React from "react";
import { useStyles } from "./loading.styles";

export function Loading() {
  const styles = useStyles()
  return (
    <svg className={styles.spinner} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle className={styles.path} cx="33" cy="33" fill="none" r="30" strokeLinecap="round" strokeWidth="6"></circle>
    </svg>
  ) 
}