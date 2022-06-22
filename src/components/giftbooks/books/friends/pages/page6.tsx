import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page6Icon } from "../icons";

export const Page6 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 400, left: 344, position: 'absolute' }} />
      <TestView styles={{ top: 370, left: 471, position: 'absolute' }} type="The receiver" />
      <Page6Icon />
    </div>
  )
}