import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  datatable: {
    height: 'calc(100% - 40px)',
    padding: 20,
    boxSizing: 'border-box',
    '& .cellWithImg': {
      display: 'flex',
      alignItems: 'center',
      '& .cellImg': {
        width: 32,
        height: 32,
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: 20,
      }
    }
  },
  datatableTitle: {
    width: '100%',
    fontSize: 24,
    color: 'gray',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
    color: 'green',
    fontSize: 16,
    fontWeight: 400,
    border: '1px solid green',
    padding: 5,
    borderRadius: 5,
    cursor: 'pointer',
  },
}))

