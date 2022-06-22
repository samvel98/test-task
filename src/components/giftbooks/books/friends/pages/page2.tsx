import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page2Icon } from "../icons";

export const Page2 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 354, left: 203, transform: 'scale(1.6)', position: 'absolute' }} />
      <TestView styles={{ top: 354, left: 490, transform: 'scale(1.6)', position: 'absolute' }} type="The receiver" />
      <Page2Icon />
    </div>
  )
}