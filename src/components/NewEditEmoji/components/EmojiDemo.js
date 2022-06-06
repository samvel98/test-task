import React from "react";
import { useStyles } from "../styles";
import cn from 'classnames';

export function EmojiDemo({ headForm, hair, brows, eyes, nose, lips, body, beard, gender }) {
  console.log(beard)
  const classes = useStyles();
  return (
    <div className={cn(classes.emojiHead, gender)}>
      <div className={classes.emojiHeadIcon}>
        {headForm?.icon}
      </div>
      <div className={cn(classes.emojiHair, hair?.id, gender)}>
        {hair?.icon}
      </div>
      <div className={classes.brows}>
        {brows?.icon}
      </div>
      <div className={classes.eyes}>
        {eyes?.icon}
      </div>
      <div className={cn(classes.lips, lips?.id)}>
        {lips?.icon}
      </div>
      <div className={classes.nose}>
        {nose?.icon}
      </div>
      {gender === 'male' && 
        <div className={cn(classes.beard, beard?.id, headForm?.id)}>
          {beard?.icon}
        </div>
      }
    </div>
  )
}