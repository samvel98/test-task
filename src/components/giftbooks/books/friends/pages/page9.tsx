import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page9Icon } from "../icons";

export const Page9 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 205, left: 516, position: 'absolute', transform: 'scale(1.5)' }} />
      <TestView styles={{ top: 220, left: 202, position: 'absolute', transform: 'scale(1.5)' }} type="The receiver" />
      <Page9Icon />
    </div>
  )
}