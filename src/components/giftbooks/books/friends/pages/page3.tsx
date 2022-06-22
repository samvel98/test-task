import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page3Icon } from "../icons";

export const Page3 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 423, left: 237, position: 'absolute', transform: 'scale(1.2)' }} />
      <TestView styles={{ top: 420, left: 516, position: 'absolute', transform: 'scale(1.2)' }} type="The receiver" />
      <Page3Icon />
    </div>
  )
}