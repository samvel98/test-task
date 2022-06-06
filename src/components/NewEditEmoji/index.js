import React, { useMemo } from "react";
import { useStyles } from "./styles";

import {
  manEyes,
  // manHeads,
  manBodyForms,
  manLips,
  manNoses,
  manHairs,
  manBrows,
  manBeards,
  manHeadForms,
  womanHeadForms,
  womanBodyForms,
  // womanHeads,
  womanEyes,
  womanNoses,
  womanLipses,
  womanHairs,
  womanBrows
} from './utils/constants';
import { EmojiDemo } from "./components/EmojiDemo";
import { useGetUserEmojiQuery, useLazyGetUserEmojiQuery } from "../../features/api/api.slice";

const getNavbarItems = () => {
  return [
    {
      id: 'headForm',
      title: 'Head Form',
      icons: {
        female: womanHeadForms,
        male: manHeadForms,
      },
    },
    {
      id: 'body',
      title: 'Body',
      icons: {
        female: womanBodyForms,
        male: manBodyForms
      },
    },
    {
      id: 'hair',
      title: 'Hair',
      icons: {
        female: womanHairs,
        male: manHairs
      },
    },
    {
      id: 'eyes',
      title: 'Eyes',
      icons: {
        female: womanEyes,
        male: manEyes
      },
    },
    {
      id: 'brows',
      title: 'Eye brows',
      icons: {
        female: womanBrows,
        male: manBrows
      },
    },
    {
      id: 'nose',
      title: 'Nose',
      icons: {
        female: womanNoses,
        male: manNoses
      },
    },
    {
      id: 'lips',
      title: 'Lips',
      icons: {
        female: womanLipses,
        male: manLips
      }
    },
    {
      id: 'beard',
      title: 'Beards',
      icons: {
        male: manBeards
      }
    },
  ]
}

export const TestView = ({ top, left }) => {
  const navbarItems = useMemo(() => getNavbarItems(), []);

  const gender = useMemo(() => 'female', []);
  const { data: userEmoji } = useGetUserEmojiQuery({ id: 1 }) || []

  console.log({userEmoji})
  const selectedHeadForm = useMemo(() => 
    navbarItems.find(i => i.id === 'headForm').icons[gender].find(i => i.id === userEmoji?.headFormId),
  [gender, navbarItems, userEmoji?.headFormId]);
  const selectedBody = useMemo(() => 
    navbarItems.find(i => i.id === 'body').icons[gender].find(i => i.id === userEmoji?.bodyId),
  [gender, navbarItems, userEmoji?.bodyId]);
  const selectedEyes = useMemo(() => 
    navbarItems.find(i => i.id === 'eyes').icons[gender].find(i => i.id === userEmoji?.eyesId),
  [gender, navbarItems, userEmoji?.eyesId]);
  const selectedLips = useMemo(() => 
    navbarItems.find(i => i.id === 'lips').icons[gender].find(i => i.id === userEmoji?.lipsId),
  [gender, navbarItems, userEmoji?.lipsId]);
  const selectedHair = useMemo(() => 
    navbarItems.find(i => i.id === 'hair').icons[gender].find(i => i.id === userEmoji?.hairId),
  [gender, navbarItems, userEmoji?.hairId]);
  const selectedBrows = useMemo(() => 
    navbarItems.find(i => i.id === 'brows').icons[gender].find(i => i.id === userEmoji?.browsId),
  [gender, navbarItems, userEmoji?.browsId]);
  const selectedNose = useMemo(() => 
    navbarItems.find(i => i.id === 'nose').icons[gender].find(i => i.id === userEmoji?.noseId),
  [gender, navbarItems, userEmoji?.noseId]);
  const selectedBeard = useMemo(() => 
    navbarItems.find(i => i.id === 'beard').icons['male'].find(i => i.id === userEmoji?.beardId),
  [navbarItems, userEmoji?.beardId]);

  return (
    <div style={{ position: 'absolute', left, top, transform: 'scale(0.65)' }}>
      <EmojiDemo
        beard={selectedBeard}
        body={selectedBody}
        brows={selectedBrows}
        eyes={selectedEyes}
        gender={gender}
        hair={selectedHair}
        headForm={selectedHeadForm}
        lips={selectedLips}
        nose={selectedNose}
      />
    </div>
  )
}
