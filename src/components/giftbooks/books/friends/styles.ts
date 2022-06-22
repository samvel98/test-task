import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  page: {
    // width: 500,
    '& svg': {
      width: '100%',
      height: 'auto'
    }
  },
  texted: {
    // padding: '250px 0'
  },
  textedContainer: {
    position: 'relative',
  },
  headerText: {
    color: '#66126B'
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 30px'
  }
}))