import React from 'react';

import * as womanHeadForms from './components/woman-head-forms';
import * as womanBodyForms from './components/woman-body-forms';
import * as womanEyes from './components/woman-eyes'
import * as womanLispAndNoses from './components/woman-noses';
import * as womanHairs from './components/woman-hairs';
import * as womanBrows from './components/woman-brows';
import * as manHeadForms from './components/man-head-forms';
import * as womanHeads from './components/woman-heads';
import * as manHeads from './components/man-head';
import * as manBodies from './components/man-body-forms';
import * as manEyes from './components/man-eyes';
import * as manHairs from './components/man-hairs';
import * as manNoses from './components/man-noses';
import * as manBrows from './components/man-brows';
import * as womanLips from './components/woman-lips';
import * as manLips from './components/man-lips';
import * as beards from './components/man-beards';

export function Icon() {
  return null;
}


// ------------- heads--------------- //
Icon.WomanHead1 = womanHeads.WomanHead1;
Icon.WomanHead2 = womanHeads.WomanHead2;
Icon.WomanHead3 = womanHeads.WomanHead3;
Icon.WomanHead4 = womanHeads.WomanHead4;
Icon.WomanHead5 = womanHeads.WomanHead5;
Icon.WomanHead6 = womanHeads.WomanHead6;
Icon.ManHead1 = manHeads.ManHead1;
Icon.ManHead2 = manHeads.ManHead2;
Icon.ManHead3 = manHeads.ManHead3;
Icon.ManHead4 = manHeads.ManHead4;
Icon.ManHead5 = manHeads.ManHead5;
Icon.ManHead6 = manHeads.ManHead6;
// ------------- head forms--------------- //
Icon.WomanHeadForm1 = womanHeadForms.WomanHeadForm1;
Icon.WomanHeadForm2 = womanHeadForms.WomanHeadForm2;
Icon.WomanHeadForm3 = womanHeadForms.WomanHeadForm3;
Icon.WomanHeadForm4 = womanHeadForms.WomanHeadForm4;
Icon.WomanHeadForm5 = womanHeadForms.WomanHeadForm5;
Icon.WomanHeadForm6 = womanHeadForms.WomanHeadForm6;

Icon.ManHeadForm1 = manHeadForms.ManHeadForm1;
Icon.ManHeadForm2 = manHeadForms.ManHeadForm2;
Icon.ManHeadForm3 = manHeadForms.ManHeadForm3;
Icon.ManHeadForm4 = manHeadForms.ManHeadForm4;
Icon.ManHeadForm5 = manHeadForms.ManHeadForm5;
Icon.ManHeadForm6 = manHeadForms.ManHeadForm6;
// ------------- body --------------- //
Icon.WomanBodyForm1 = womanBodyForms.WomanBodyForm1;
Icon.WomanBodyForm2 = womanBodyForms.WomanBodyForm2;
Icon.WomanBodyForm3 = womanBodyForms.WomanBodyForm3;
Icon.ManBodyForm1 = manBodies.ManBody1;
Icon.ManBodyForm2 = manBodies.ManBody2;
Icon.ManBodyForm3 = manBodies.ManBody3;
// ------------- eyes --------------- //
for (let i = 1; i <= 29; i++) {
  Icon[`WomanEyes${i}`] = womanEyes[`WomanEyes${i}`];
}
// Icon.WomanEyes1 = womanEyes.WomanEyes1;
for (let i = 2; i <= 21; i++) {
  Icon[`ManEyes${i}`] = manEyes[`ManEyes${i}`];
}
// ------------- noses --------------- //
for (let i = 1; i <= 28; i++) {
  Icon[`WomanNose${i}`] = womanLispAndNoses[`WomanNose${i}`];
}
for (let i = 1; i <= 17; i++) {
  Icon[`ManNose${i}`] = manNoses[`ManNose${i}`];
}

// ------------- lips ---------------- //

for (let i = 1; i <= 29; i++) {
  Icon[`WomanLips${i}`] = womanLips[`WomanLips${i}`];
}
for (let i = 1; i <= 20; i++) {

  Icon[`ManLips${i}`] = manLips[`ManLips${i}`];
}
// ------------- hairs --------------- //
for (let i = 3; i <= 75; i++) {
  Icon[`WomanHair${i}`] = womanHairs[`WomanHair${i}`];
}
for (let i = 1; i <= 48; i++) {
  Icon[`ManHair${i}`] = manHairs[`ManHair${i}`];
}
// ------------- hairs --------------- //
for (let i = 1; i <= 30; i++) {
  Icon[`WomanBrows${i}`] = womanBrows[`WomanBrows${i}`];
}
for (let i = 1; i <= 20; i++) {
  Icon[`ManBrows${i}`] = manBrows[`ManBrows${i}`];
}

// ------------- beards --------------- //
for (let i = 1; i <= 10; i++) {
  Icon[`Beard${i}`] = beards[`Beard${i}`]
}