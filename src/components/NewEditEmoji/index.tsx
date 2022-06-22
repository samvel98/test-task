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
  womanEars,
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
      id: 'ears',
      title: 'Ears',
      icons: {
        female: womanEars,
        male: manLips
      }
    },
    // {
    //   id: 'beard',
    //   title: 'Beards',
    //   icons: {
    //     male: manBeards
    //   }
    // },
  ]
}

export const TestView = ({ styles, type = 'The giver' }: { styles?: React.CSSProperties | undefined; type?: 'The giver' | 'The receiver' }) => {
  const navbarItems = useMemo(() => getNavbarItems(), []);

  const gender = useMemo(() => 'female', []);
  const { data: emojies } = useGetUserEmojiQuery({ user_id: localStorage.getItem('userId') }) || []

  const userEmoji = useMemo(() => {
    return emojies?.find((emoji: any) => emoji.type === type) || {}
  }, [emojies, type])

  const selectedHeadForm = useMemo(() => 
    navbarItems.find(i => i.id === 'headForm')?.icons.female.find(i => i.id === userEmoji?.headFormId),
  [navbarItems, userEmoji?.headFormId]);
  const selectedBody = useMemo(() => 
    navbarItems.find(i => i.id === 'body')?.icons.female.find(i => i.id === userEmoji?.bodyId),
  [navbarItems, userEmoji?.bodyId]);
  const selectedEyes = useMemo(() => 
    navbarItems.find(i => i.id === 'eyes')?.icons.female.find(i => i.id === userEmoji?.eyesId),
  [navbarItems, userEmoji?.eyesId]);
  const selectedLips = useMemo(() => 
    navbarItems.find(i => i.id === 'lips')?.icons.female.find(i => i.id === userEmoji?.lipsId),
  [navbarItems, userEmoji?.lipsId]);
  const selectedHair = useMemo(() => 
    navbarItems.find(i => i.id === 'hair')?.icons.female.find(i => i.id === userEmoji?.hairId),
  [navbarItems, userEmoji?.hairId]);
  const selectedBrows = useMemo(() => 
    navbarItems.find(i => i.id === 'brows')?.icons.female.find(i => i.id === userEmoji?.browsId),
  [navbarItems, userEmoji?.browsId]);
  const selectedNose = useMemo(() => 
    navbarItems.find(i => i.id === 'nose')?.icons.female.find(i => i.id === userEmoji?.noseId),
  [navbarItems, userEmoji?.noseId]);
  const selectedEars = useMemo(() => 
    navbarItems.find(i => i.id === 'ears')?.icons.female.find(i => i.id === userEmoji?.earsId),
  [navbarItems, userEmoji?.earsId]);
  // const selectedBeard = useMemo(() => 
  //   navbarItems.find(i => i.id === 'beard').icons['male'].find(i => i.id === userEmoji?.beardId),
  // [navbarItems, userEmoji?.beardId]);

  return (
    <div style={{ ...styles }}>
      <EmojiDemo
        // beard={selectedBeard}
        body={selectedBody}
        brows={selectedBrows}
        ears={selectedEars}
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
