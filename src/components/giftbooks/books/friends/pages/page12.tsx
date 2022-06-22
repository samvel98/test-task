import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { Page12Icon } from "../icons";

export const Page12 = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118, display: 'flex' }}>
      <TestView styles={{ top: 247, left: 387,  transform: 'scale(1.5)', position: 'absolute' }} />
      <Page12Icon />
    </div>
  )
}