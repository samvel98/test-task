import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page10Icon } from "../icons";

export const Page10 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 298, left: 204, position: 'absolute', transform: 'scale(2) rotate(25deg)' }} />
      <TestView styles={{ top: 310, left: 500, position: 'absolute', transform: 'scale(2) rotate(-30deg)' }} type="The receiver" />
      <Page10Icon />
    </div>
  )
}