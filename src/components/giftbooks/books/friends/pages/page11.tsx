import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page11Icon } from "../icons";

export const Page11 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 403, left: 180,  transform: 'scale(1.4)', position: 'absolute' }} />
      <TestView styles={{ top: 397, left: 558,  transform: 'scale(1.4)', position: 'absolute' }} type="The receiver"/>
      <Page11Icon />
    </div>
  )
}