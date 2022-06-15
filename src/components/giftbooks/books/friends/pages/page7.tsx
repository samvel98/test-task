import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page7Icon } from "../icons";

export const Page7 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 507, left: 378, position: 'absolute', transform: 'scale(0.9)' }} />
      <TestView styles={{ top: 520, left: 585, position: 'absolute', transform: 'scale(0.9)' }} type="The receiver" />
      <Page7Icon />
    </div>
  )
}