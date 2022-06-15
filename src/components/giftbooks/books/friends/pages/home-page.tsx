import React from "react";
import { TestView } from "../../../../NewEditEmoji";
import { HomePageIcon } from "../icons";

export const HomePage = () => {
  return (
    <div style={{ position: 'relative', width: 794, height:    1118 }}>
      <TestView styles={{ top: 382, left: 339, position: 'absolute', transform: 'rotate(-15deg) scale(1.8)' }} />
      <HomePageIcon />
    </div>
  )
}