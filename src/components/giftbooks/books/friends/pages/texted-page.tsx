import React from "react";
import { TextBackground } from "../icons";
import { useStyles } from "../styles";

type TextedPageProps = {
  text: string;
  isFirst?: boolean;
  headerText?: string;
}

export const TextedPage = ({ text, headerText, isFirst = false }: TextedPageProps) => {
  const styles = useStyles();
  return (
    <div className={styles.textedContainer}>
      <div className={styles.text}>
        {headerText && <div className={styles.headerText}>{headerText}</div>}
        {text}
      </div>
      <TextBackground />
    </div>
  )
}