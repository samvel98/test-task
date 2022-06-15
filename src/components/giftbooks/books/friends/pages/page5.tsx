import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page5Icon } from "../icons";

export const Page5 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 352, left: 224, position: 'absolute', transform: 'scale(1.1) rotate(5deg)' }} />
      <TestView styles={{ top: 368, left: 392, position: 'absolute', transform: 'scale(1.1) rotate(5deg)' }} type="The receiver" />
      <Page5Icon />
    </div>
  )
}