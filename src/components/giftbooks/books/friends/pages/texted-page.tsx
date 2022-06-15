import React from "react";
import { TextBackground } from "../icons";
import { useStyles } from "../styles";

type TextedPageProps = {
  text: string;
  isFirst?: boolean;
  headerText?: string;
}

export const TextedPage = ({ text, headerText, isFirst = false }: TextedPageProps) => {
  return (
    <div style={{ position: 'relative', width: 792, height: 1126, display: 'flex' }}>
      <div style={{ position: 'absolute', textAlign: 'center', top: '50%', left: '50%', transform: 'translate(-50%)', fontSize: 20 }}>
        {headerText && <div style={{ color: '#66126B' }}>{headerText}</div>}
        {text}
      </div>
      <TextBackground />
    </div>
  )
}