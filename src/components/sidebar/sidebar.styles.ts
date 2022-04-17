
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
    sidebar: {
      flex: "1",
      borderRight: "0.5px solid #e6e3e3",
      minHeight: "100vh",
      backgroundColor: "white"
    },
    top: {
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#6439ff",
      '& hr': {
        height: "0",
        border: "0.5px solid #e6e3e3"
      },
    },
    center: {
      paddingLeft: "10px",
      '& ul': {
        listStyle: "none",
        margin: "0",
        padding: "0",
        '& li': {
          display: "flex",
          alignItems: "center",
          padding: "5px",
          cursor: "pointer",
          '&:hover': {
            backgroundColor: "#ece8ff"
          },
          '& span': {
            fontSize: "13px",
            fontWeight: "600",
            color: "#888",
            marginLeft: "10px"
          }
        }
      }
    },
    title: {
      fontSize: "10px",
      fontWeight: "bold",
      color: "#999",
      marginTop: "15px",
      marginBottom: "5px"
    },
    icon: {
      fontSize: "18px",
      color: "#0059ff"
    },
    bottom: {
      display: "flex",
      alignItems: "center",
      margin: "10px"
    },

}))