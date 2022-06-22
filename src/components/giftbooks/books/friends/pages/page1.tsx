import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page1Icon } from "../icons";

export const Page1 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 367, left: 510, position: 'absolute', transform: 'scale(1.6)' }} />
      <TestView styles={{ top: 367, left: 170, position: 'absolute', transform: 'scale(1.6)' }} type="The receiver" />
      <Page1Icon />
    </div>
  )
}