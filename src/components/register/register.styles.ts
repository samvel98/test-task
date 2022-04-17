import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  '@keyframes btn': {
    '0%, 100%': {
      transform: 'scale(1)',
    },
    '70%': {
      transform: 'scale(1)',
    },
    '80%': {
      transform: 'scale(1.04)',
    },
    '90%': {
      transform: 'scale(0.96)',
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  content: {
    width: 600,
    background: 'white',
    borderRadius: 5,
    padding: "25px 20px",
    boxSizing: "border-box",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    position: "relative",
    '& form': {
      display: 'flex',
      flexDirection: 'column',

    }
  },
  title: {
    fontSize: 24,
  },
  submitBtn: {
    borderRadius: "4px",
    border: "none",
    cursor: 'pointer',
    outline: "none",
    width: "100%",
    padding: "0 15px",
    fontSize: "18px",
    lineHeight: "36px",
    fontWeight: "500",
    margin: "25px 0 10px",
    color: "#fff",
    background: 'linear-gradient(#198754, #00af56a6)',
    opacity: 0.9,
    animation: '$btn 6.0s 3s infinite ease-in-out',
    transition: 'all 0.3s',
    '&:hover': {
      opacity: 1,
      boxShadow: '0 2px 2px -3px #00af56a6'
    }
  },
  deleteBtn: {
    background: '#dc3545',
    borderRadius: 5,
    padding: '10px 20px',
    border: 0,
    color: 'white',
    cursor: 'pointer'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    padding: 10,
    border: 0,
    borderRadius: "4px",
    cursor: 'pointer'
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    paddingTop: 10,
    marginTop: 15,

    '& + .input': {
      marginTop: 10
    }
  },
  label: {
    color: '#8597a3',
    position: 'absolute',
    top: 20,
    transition: 'all 0.3s',
  },
  inputField: {
    border: 0,
    padding: 0,
    zIndex: 1,
    backgroundColor: 'transparent',
    borderBottom: '2px solid #eee',
    font: 'inherit',
    fontSize: 14,
    lineHeight: '30px',
    '&:focus, &:not(:placeholder-shown)': {
      outline: 0,
      borderBottomColor: '#665856',
      '&+$label': {
        color: '#665856',
        transform: 'translateY(-25px)'
      }
    },
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 5
  },
  matches: {
    display: 'flex',
  },
  matchLists: {
    width: '50%',
    height: 300,
    overflow: 'auto',
    margin: '20px 0'
  },
  selectedMatches: {
    width: '50%',
    margin: '20px 0'
  },
  matchItem: {
    position: 'relative',
    padding: 10,
    cursor: 'pointer',
    background: '#e3e3e3',
    margin: 5,
    borderRadius: 5,
  },
  matchItemName: {
    color: 'gray',
  },
  matchItemJob: {
    color: '#bf0000',
  },
  removeFromMatchList: {
    position: 'absolute',
    padding: 10,
    right: '-30px',
    top: 'calc(50% - 20px)'
  }
  
}))

  