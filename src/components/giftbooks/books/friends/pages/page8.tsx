import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page8Icon } from "../icons";

export const Page8 = () => {
  // add after emoji
  return (
    <div style={{ position: 'relative', width: 794, height: 1118, display: 'flex' }}>
      <TestView styles={{ top: 307, left: 378, position: 'absolute', }} /> 
      <TestView styles={{ top: 307, left: 178, position: 'absolute', }} type="The receiver" /> 
      <Page8Icon />
    </div>
  )
}