import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page4Icon } from "../icons";

export const Page4 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 327, left: 530, position: 'absolute', transform: 'scale(1.8)' }} />
      <TestView styles={{ top: 324, left: 189, position: 'absolute', transform: 'scale(1.8)' }} type="The receiver" />
      <Page4Icon />
    </div>
  )
}