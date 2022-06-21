import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    height: 950,
    display: 'flex',
  },
  emojiContainer: {
    background: '#F3F3F3',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // '& svg': {
    //   height: 740,
    //   width: 300,
    // }
  },
  emojisContainer: {
    display: 'flex',
    overflow: 'auto',
    flexWrap: 'wrap',
  },
  controlPanel: {
    width: '50%',
    height: '100%'
  },
  navbarItemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: 20,
    padding: 20,
    flexWrap: 'wrap'
  },
  navbarItem: {
    cursor: 'pointer',
  },
  activeItem: {
    color: '#E0A8C0'
  },
  pickerMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    overflow: 'auto',
    height: 'calc(100% - 111px)'
  },
  buttonsGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    padding: '12px 40px',
    cursor: 'pointer'
  },
  save: {
    borderRadius: 30,
    background: '#E0A8C0',
    color: 'white'
  },
  sectionIcons: {
    position: 'relative',
    padding: 20,
    width: 100,
    height: 100,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    display: 'flex',
    
    '&.eyes, &.lips, &.nose, &.brows': {
      '& svg': {
        width: 250,
        height: 250,
        position: 'absolute'
      }
    },
    ' &.beard': {
      '& svg': {
        width: 500,
        height: 500,
        position: 'absolute',
      }
    },
    '&.hair': {
      '& svg': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        '&:nth-child(2)': {
          display: 'none'
        }

      }
    },
    '&.headForm svg': {
      width: 115,
      height: '100%',
      margin: '0 5px'
    },
    '&.body': {
      width: 150,
      '& svg':{
        width: 115,
        position: 'relative',
        height: '100%',
        margin: '0 5px'
      }
    },
  },
  beard: {
    position: 'absolute',
    width: 370,
    top: '-86px',
    '& svg': {
      width: '100%'
    },
    '&.Beard2,&.Beard3': {
      top: -76,
    },
    '&.Beard4': {
      top: -84,
    },
    '&.Beard5, &.Beard8': {
      top: -80,
    },
    '&.Beard6': {
      top: -75,
    },
    '&.Beard7': {
      top: -65,
    },
    '&.Beard9': {
      top: -90,
    },
    '&.Beard10': {
      top: -78,
    },
  },
  bodyIcons: {
    height: 'auto',
  },
  selectedIcon: {
    border: '1px solid'
  },
  emojiContent: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emojiHead: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '&.male': {
      '& $emojiHeadIcon': {
        transform: 'translateY(20px)',
      }
    },
    '&.female': {
      '& $emojiHeadIcon': {
        transform: 'translateY(27px)',
        '& svg': {
          width: 77,
        }
      }
    }
  },
  displayNone: {
    display: 'none'
  },
  emojiHeadIcon: {
    transform: 'translateY(13px)',
    zIndex: 3,
    '& svg': {
      width: 72,
      height: 109,
    }
  },
  emojiBody: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    // top: '-130px',
    // left: 13,
    '& svg': {
      height: 'auto',
      width: 115,
    },
    '&.manBodyForm1 svg': {
      width: 154,
      height: 475
    },
    '&.womanBodyForm3 svg': {
      width: 154,
      height: 475
    },
    '&.womanBodyForm2 svg': {
      width: 154,
      height: 475
    },
    '&.womanBodyForm1 svg': {
      width: 154,
      height: 475
    },
    '&.boyBody2 svg': {
      top: '-125px',
      transform: 'translateX(3px)',
    },
    '&.boyBody3 svg': {
      top: '-115px',
      transform: 'translateX(0px)',
    },
    '&.female': {
      zIndex: 1,
    }
  },
  eyes: {
    position: 'absolute',
    width: 182,
    top: -10,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: 'auto'
    },
    '& div[class*="container"]': {
      width: '150px !important',
      height: '150px !important',
      '& svg': {
        transform: 'translateY(15px)'
      }
    },
  },
  ears: {
    position: 'absolute',
    width: 87,
    top: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: 'auto'
    },
    '&.womanHair3, &.womanHair12, &.womanHair18, &.womanHair17, &.womanHair28, &.womanHair29, &.womanHair30, &.womanHair38, &.womanHair43, &.womanHair45, &.womanHair46, &.womanHair48': {
      zIndex: 2
    }
  },
  brows: {
    position: 'absolute',
    width: 182,
    top: -23,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: 'auto'
    },
    '& div[class*="container"]': {
      width: '150px !important',
      height: '150px !important',
      '& svg': {
        transform: 'translateY(15px)'
      }
    },
  },
  lips: {
    position: 'absolute',
    top: 22,
    width: 182,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: 'auto'
    },
    '& div[class*="container"]': {
      width: '170px !important',
      height: '170px !important',
      '& svg': {
        transform: 'translateY(20px)'
      }
    },
  },
  nose: {
    position: 'absolute',
    top: 6,
    width: 182,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '100%',
      height: 'auto'
    },
    '& div[class*="container"]': {
      width: '170px !important',
      height: '170px !important',
      '& svg': {
        transform: 'translateY(7px)'
      }
    },
  },
  emojiHair: {
    position: 'absolute',
    // width: 150,
    // height: 115,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.male': {
      top: '-143px',
      width: 370,
    },
    '&.ManHair1': {
      transform: 'translateX(1px)'
    },
    '&.ManHair5,&.ManHair10,&.ManHair14,&.ManHair15,&.ManHair16': {
      transform: 'translateX(3px)'
    },
    '&.ManHair7': {
      transform: 'translateX(-4px)'
    },
    '&.ManHair12': {
      transform: 'translateX(-2px)'
    },
    '&.ManHair18': {
      transform: 'translateY(-5px)'
    },
    '&.ManHair21': {
      transform: 'translateY(33px)'
    },
    '&.ManHair25': {
      width: 360,
      transform: 'translate(3px, 5px)'
    },
    '&.ManHair26': {
      transform: 'translateY(40px)'
    },
    '&.ManHair27': {
      transform: 'translateY(4px)'
    },
    '&.ManHair31': {
      width: 350,
      transform: 'translateY(23px)'
    },
    '&.ManHair33': {
      transform: 'translate(-4px, -8px)'
    },
    '&.ManHair34': {
      transform: 'translateY(18px)'
    },
    '&.ManHair37': {
      transform: 'translateY(3px)'
    },
    '&.ManHair40': {
      transform: 'translateX(6px)'
    },
    '&.ManHair42': {
      width: 350,
      transform: 'translate(-2px, 12px)'
    },
    '&.ManHair44': {
      width: 360,
      transform: 'translate(8px, 8px)'
    },
    '&.ManHair46': {
      width: 360,
    },

    '& div[class*="container"]': {
      width: '190px',
      height: '200px',
      top: '-40px',
      '& svg:nth-child(1)': {
        zIndex: 3
      },
      '& svg:nth-child(2)': {
        // zIndex: -1,
        height: 150,
        width: '120px',

      }
    },
    '& svg': {
      width: '100%',
      height: 'auto'
    },
    '&.womanHair4': {
      '& div[class*="container"]': {
        '& svg[class*="front"]': {
          transform: 'translateY(-25px)',
          width: '120px !important',
        },
        '& svg[class*="back"]': {
          display: 'block',
          width: '200px !important',
          height: '180px !important',
          transform: 'translateY(20px)',
          // zIndex: -1
        }
      }
    },
    '&.womanHair5': {
      '& div[class*="container"]': {
        width: '95px !important',
        height: '95px !important',
        '& svg[class*="front"]': {
          // transform: 'translateX(-7.5px)'
          top: 40,
        },
        '& svg:nth-child(2)': {
          // zIndex: -1,
          top: 110,
          width: '85px !important',
          height: 'auto'
          // zIndex: -1
        }
      }
    },
    '& .womanHair6': {
      '& div[class*="container"]': {
        '& svg:nth-child(1)': {
          zIndex: -1
        },
        '& svg:nth-child(2)': {
          // zIndex: -1
        }
      }
    },
    '& .womanHair7': {
      '& div[class*="container"]': {
        '& svg:nth-child(1)': {
          zIndex: -1
        },
        '& svg:nth-child(2)': {
          // zIndex: -1
        }
      }
    },
    '&.womanHair8': {
      '& div[class*="container"]': {
        top: '-10px !important',
        width: '90px !important',
        height: '110px !important',
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          // zIndex: -1
        }
      }
    },
    '&.womanHair9': {
      '& div[class*="container"]': {
        '& svg:nth-child(1)': {
          width: '80px !important',
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          width: '150px !important',
          top: 100
          // zIndex: -1
        }
      }
    },
    '&.womanHair10': {
      '& div[class*="container"]': {
        '& svg:nth-child(1)': {
          width: 80,
          top: 70,
        },
        '& svg:nth-child(2)': {
          width: '135px !important',
          top: 110
          // zIndex: -1
        }
      }
    },
    '&.womanHair11': {
      '& div[class*="container"]': {
        width: '80px !important',
        top: -65,

      }
    },
    '&.womanHair12': {
      '& div[class*="container"]': {
        '& svg:nth-child(1)': {
          zIndex: 4,
          width: 190,
          top: 40,
        },
        '& svg:nth-child(2)': {
          top: 100,
          width: '200px !important',
          height: '200px !important',
        }
      }
    },
    '&.womanHair13': {
      '& div[class*="container"]': {
        top: 0,
        width: '100px !important'
      }
    },
    '&.womanHair14': {
      '& div[class*="container"]': {
        width: '90px !important',
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 90,
          width: '140px !important'
          // zIndex: -1
        }
      }
    },
    '&.womanHair15': {
      '& div[class*="container"]': {
        top: -80,
      }
    },
    '&.womanHair16': {
      '& div[class*="container"]': {
        top: -50,
        width: '90px !important',
      }
    },
    '&.womanHair17': {
      '& div[class*="container"]': {
        width: '110px !important',
        left: -65,
        top: 10,
        '& svg:nth-child(1)': {
          // zIndex: -1
          
        },
        '& svg:nth-child(2)': {
          top: 50,
          left: 7
          // zIndex: -1
        }
      }
    },
    '&.womanHair18': {
      '& div[class*="container"]': {
        top: 10,
        width: 170,
        '& svg:nth-child(1)': {
          left: -23,
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          top: 15,
          left: 30
          // zIndex: -1
        }
      }
    },
    '&.womanHair19': {
      '& div[class*="container"]': {
        top: -60,
        width: 110,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          // zIndex: -1
          top: 120
        }
      }
    },
    '&.womanHair20': {
      '& div[class*="container"]': {
        top: -60, 
        width: 110,
        '& svg:nth-child(1)': {

          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 110,
          width: 110
          // zIndex: -1
        }
      }
    },
    '&.womanHair21': {
      '& div[class*="container"]': {
        width: 85,
        height: 'auto',
        top: -5,
        '& svg:nth-child(1)': {
          top: 15
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          width: 115,
          height: 115,
          top: 75,
          // zIndex: -1
        }
      }
    },
    '&.womanHair22': {
      '& div[class*="container"]': {
        width: 80,
        top: -45,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          width: 130,
          height: 170,
          top: 65
          // zIndex: -1
        }
      }
    },
    '&.womanHair23': {
      '& div[class*="container"]': {
        width: 80,
        '& svg:nth-child(1)': {
          top: 70,
        },
        '& svg:nth-child(2)': {
          top: 50,
          width: 140,
          height: 160,
          // zIndex: -1
        }
      }
    },
    '&.womanHair24,&.womanHair25': {
      '& div[class*="container"]': {
        width: 90,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 40,
          width: 170,
          height: 170
          // zIndex: -1
        }
      }
    },
    // '&.womanHair25': {
    //   '& div[class*="container"]': {
    //     width: 90,
    //     '& svg:nth-child(1)': {
    //       // zIndex: -1
    //     },
    //     '& svg:nth-child(2)': {
    //       // zIndex: -1
    //     }
    //   }
    // },
    '&.womanHair26,&.womanHair27': {
      '& div[class*="container"]': {
        width: 90,
        top: -50,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 60,
          width: 170,
          height: 170
          // zIndex: -1
        }
      }
    },

    '&.womanHair28': {
      '& div[class*="container"]': {
        width: 130,
        top: 0,
        '& svg:nth-child(1)': {
          // zIndex: -1
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          top: 20,
          // zIndex: -1
        }
      }
    },
    '&.womanHair29': {
      '& div[class*="container"]': {
        top: -42,
        width: 90,
        '& svg:nth-child(1)': {
          left: 5,
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 70,
          width: 160,
          height: 160,
          // zIndex: -1
        }
      }
    },
    '&.womanHair30': {
      '& div[class*="container"]': {
        top: -30,
        width: 110,
        '& svg:nth-child(1)': {
          // zIndex: -1
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          // zIndex: -1
        }
      }
    },
    '&.womanHair31': {
      '& div[class*="container"]': {
        left: -50,
        top: 30,
        width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          left: 0,
          top: -15,
          width: 100,
          height: 120,
          zIndex: 1
        }
      }
    },
    '&.womanHair32': {
      '& div[class*="container"]': {
        width: 90,
        top: -50,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 25,
          width: 90,
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair33': {
      '& div[class*="container"]': {
        width: 90,
        top: -50,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 65,
          width: 90,
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair34': {
      '& div[class*="container"]': {
        width: 90,
        top: -50,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 55,
          width: 90,
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair35': {
      '& div[class*="container"]': {
        width: 120,
        top: -50,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 60,
          width: 150,
          height: 200
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair36': {
      '& div[class*="container"]': {
        width: 90,
        top: -60,
      }
    },
    '&.womanHair37': {
      '& div[class*="container"]': {
        width: 90,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 20,
          width: 90,
          height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair38': {
      '& div[class*="container"]': {
        width: 90,
        top: -20,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair39': {
      '& div[class*="container"]': {
        width: 100,
        top: -60,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair40': {
      '& div[class*="container"]': {
        width: 90,
        top: -30,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          zIndex: 2,
          left: -40,
          top: 80,
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair41': {
      '& div[class*="container"]': {
        width: 110,
        top: -22,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair42': {
      '& div[class*="container"]': {
        width: 90,
        top: -60,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          left: -10,
          top: 50,
          width: 140,
          height: 180,
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair43': {
      '& div[class*="container"]': {
        width: 120,
        top: -14,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 40
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair44': {
      '& div[class*="container"]': {
        width: 90,
        top: -50,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          top: 60,
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair45': {
      '& div[class*="container"]': {
        width: 110,
        top: -5,

        '& svg:nth-child(1)': {
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          top: 60,
          width: 90,
        }
      }
    },
    '&.womanHair46': {
      '& div[class*="container"]': {
        width: 110,
        top: -10,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
          zIndex: 4
        },
        '& svg:nth-child(2)': {
          top: 60,
          width: 105,
          height: 130
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair47': {
      '& div[class*="container"]': {
        width: 100,
        top: -10,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          // zIndex: -1
          zIndex: 4

        },
        '& svg:nth-child(2)': {
          top: 30,
          width: 110,
          height: 140,
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair48': {
      '& div[class*="container"]': {
        width: 100,
        top: -10,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          zIndex: 4
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 20,
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair49': {
      '& div[class*="container"]': {
        width: 100,
        top: -60,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          zIndex: 4
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 55,
          width: 140,
          height: 170
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
    '&.womanHair50': {
      '& div[class*="container"]': {
        width: 100,
        top: -40,
        // left: -50,
        // top: 30,
        // width: 125,
        '& svg:nth-child(1)': {
          zIndex: 4
          // zIndex: -1
        },
        '& svg:nth-child(2)': {
          top: 50,
          width: 120,
          height: 180
          // top: 20,
          // width: 90,
          // height: 150
          // top: -15,
          // width: 100,
          // height: 120,
          // zIndex: 1
        }
      }
    },
  },
});

export const useModalStyles = createUseStyles({
  container: {
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    '& .carousel-root': {
      width: 700,
      height: 700,
      '& .carousel-slider': {
        width: '100%',
        height: '100%'
      }
    }
  },
  toBottom: {
    alignSelf: 'flex-end'
  },
  content: {
    margin: '0 40px',
    height: 500,
    background: 'white',
    borderRadius: 30,
    boxSizing: 'content-box',
    padding: 30,
    overflow: 'auto',
  },
  close: {
    cursor: 'pointer',
    marginLeft: 'auto',
    width: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: '36px',
    marginBottom: 80
  },
  field: {
    width: 400,
    margin: '0 auto 20px',
  },
  input: {
    padding: '10px 20px',
    width: '100%',
    borderRadius: 50
  },
  label: {
    marginBottom: 20,
    fontSize: 20,
    lineHeight: '30px'
  },
  spaceBetween:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  emojiName: {
    '& input': {
      background: '#F3F3F3 !important',
      border: '0 !important',
    }
  },
  genderField: {
    display: 'flex',
    '& input': {
      width: 'auto !important',
      boxShadow: 'none !important',
      margin: 0,
      marginRight: 15,
      position: 'relative',
      cursor: 'pointer',
    },
    '& label': {
      flex: 1,
    }
  },
  head: {
    '& svg': {
      width: 250,
      height: 250
    }
  },
  bodyForm: {
    marginTop: 40,
    '& svg': {
      width: 120,
      height: 'auto'
    }
  },
  buttons: {
    display: 'flex',
    // marginTop: 90,
    '& button': {
      padding: '12px 40px',
      background: 'white',
      borderRadius: 30,
      '&.submit-button': {
        background: '#E0A8C0',
        color: 'white',
        marginRight: 20,
      },
    }
  },
})

export const useEmojiContentStyles = createUseStyles({
  container: {
    background: 'red'
  }
})