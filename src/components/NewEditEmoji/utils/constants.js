import React from 'react';
import { Icon } from "../icons/icon"

export const womanHeadForms = [
  {
    id: 'womanHeadForm1',
    icon: <Icon.WomanHeadForm1 />
  },
  {
    id: 'womanHeadForm2',
    icon: <Icon.WomanHeadForm2 />
  },
  {
    id: 'womanHeadForm3',
    icon: <Icon.WomanHeadForm3 />
  },
  {
    id: 'womanHeadForm4',
    icon: <Icon.WomanHeadForm4 />
  },
  {
    id: 'womanHeadForm5',
    icon: <Icon.WomanHeadForm5 />
  },
  {
    id: 'womanHeadForm6',
    icon: <Icon.WomanHeadForm6 />
  },
];
export const womanHeads = [
  {
    id: 'womanHeadForm1',
    icon: <Icon.WomanHead1 />
  },
  {
    id: 'womanHeadForm2',
    icon: <Icon.WomanHead2 />
  },
  {
    id: 'womanHeadForm3',
    icon: <Icon.WomanHead3 />
  },
  {
    id: 'womanHeadForm4',
    icon: <Icon.WomanHead4 />
  },
  {
    id: 'womanHeadForm5',
    icon: <Icon.WomanHead5 />
  },
  {
    id: 'womanHeadForm6',
    icon: <Icon.WomanHead6 />
  },
];
export const manHeadForms = [
  {
    id: 'manHeadForm1',
    icon: <Icon.ManHeadForm1 />
  },
  {
    id: 'manHeadForm2',
    icon: <Icon.ManHeadForm2 />
  },
  {
    id: 'manHeadForm3',
    icon: <Icon.ManHeadForm3 />
  },
  {
    id: 'manHeadForm4',
    icon: <Icon.ManHeadForm4 />
  },
  {
    id: 'manHeadForm5',
    icon: <Icon.ManHeadForm5 />
  },
  {
    id: 'manHeadForm6',
    icon: <Icon.ManHeadForm6 />
  },
];
export const manHeads = [
  {
    id: 'manHeadForm1',
    icon: <Icon.ManHead1 />
  },
  {
    id: 'manHeadForm2',
    icon: <Icon.ManHead2 />
  },
  {
    id: 'manHeadForm3',
    icon: <Icon.ManHead3 />
  },
  {
    id: 'manHeadForm4',
    icon: <Icon.ManHead4 />
  },
  {
    id: 'manHeadForm5',
    icon: <Icon.ManHead5 />
  },
  {
    id: 'manHeadForm6',
    icon: <Icon.ManHead6 />
  },
];

export const womanBodyForms = [
  {
    id: 'womanBodyForm3',
    icon: <Icon.WomanBodyForm3 />
  },
  {
    id: 'womanBodyForm2',
    icon: <Icon.WomanBodyForm2 />
  },
  {
    id: 'womanBodyForm1',
    icon: <Icon.WomanBodyForm1 />
  },
];
export const manBodyForms = [
  {
    id: 'manBodyForm1',
    icon: <Icon.ManBodyForm1 />
  },
  {
    id: 'manBodyForm2',
    icon: <Icon.ManBodyForm2 />
  },
  {
    id: 'manBodyForm3',
    icon: <Icon.ManBodyForm3 />
  },
];

const womanEyesIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]; 
export const womanEyes = womanEyesIds.map((id) => {
  const Element = Icon[`WomanEyes${id}`];
  return {
    id: `WomanEyes${id}`,
    icon: <Element />
  }
});

const manEyesIds = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
export const manEyes = manEyesIds.map(id => {
  const Element = Icon[`ManEyes${id}`]
  return {
    id: `ManEyes${id}`,
    icon: <Element />
  }
})

const womanNoseIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]; 

export const womanNoses = womanNoseIds.map((id) => {
  const Element = Icon[`WomanNose${id}`];
  return {
    id: `WomanNose${id}`,
    icon: <Element />
  }
})

const womanLipsIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]; 

export const womanLipses = womanLipsIds.map((id) => {
  const Element = Icon[`WomanLips${id}`];
  return {
    id: `WomanLips${id}`,
    icon: <Element />
  }
})

const manLipsIds = [1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
export const manLips = manLipsIds.map(id => {
  const Element = Icon[`ManLips${id}`]

  return {
    id: `ManLips${id}`,
    icon: <Element />
  }
})
const manNosesIds = [1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17]
export const manNoses = manNosesIds.map(id => {
  const Element = Icon[`ManNose${id}`]

  return {
    id: `ManNose${id}`,
    icon: <Element />
  }
})


const womanHairCountArray = [3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75]
export const womanHairs = womanHairCountArray.map((id) => {
  const Element = Icon[`WomanHair${id}`];
  return {
    id: `womanHair${id}`,
    icon: <Element />
  }
})

const manHairIds = [1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]
export const manHairs = manHairIds.map(id => {
  const Element = Icon[`ManHair${id}`]
  return {
    id: `ManHair${id}`,
    icon: <Element />
  };
})

const womanBrowsIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]; 
export const womanBrows = womanBrowsIds.map((id) => {
  const Element = Icon[`WomanBrows${id}`];
  return {
    id: `womanBrows${id}`,
    icon: <Element />
  }
});

const manBrowsIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
export const manBrows = manBrowsIds.map(id => {
  const Element = Icon[`ManBrows${id}`];
  return {
    id: `ManBrows${id}`,
    icon: <Element />
  }
})
const manBeardIds = [1,2,3,4,5,6,7,8,9,10]
export const manBeards = manBeardIds.map(id => {
  const Element = Icon[`Beard${id}`];
  return {
    id: `Beard${id}`,
    icon: <Element />
  }
})