import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  users: {
    display: 'flex',
  },
  usersContainer: {
    flex: 6
  },
  cellAction: {
    display: 'flex',
    alignItems: 'center',
    gap: 15
  },
  deleteButton: {
    padding: '2px 5px',
    borderRadius: 5,
    color: 'crimson',
    border: '1px dotted rgba(220, 20, 60, 0.6)',
    cursor: 'pointer'
  },
  cellImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  cellFullName: {

  },
  loadingContainer: {
    width: 50,
    height: 50,
    margin: 'auto'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100%'
  },
  buttonSuccess: {
    background: '#198754',
    borderRadius: 5,
    padding: '10px 20px',
    width: 'fit-content',
    border: 0,
    color: 'white',
    cursor: 'pointer'
  },
  dangerButton: {
    background: '#dc3545',
    marginLeft: 10
  },
  table: {
    '& td': {
      textAlign: 'center',
      padding: 10
    }
  },
  pages: {
    display: 'flex',
  },
  page: {
    padding: 10,
    border: '1px solid grey',
    margin: 10,
    cursor: 'pointer',
    color: 'grey',
    borderRadius: 5,
    '&.activePage': {
      background: '#0d6efd',
      color: 'white',
      border: 0
    }
  }
}))
