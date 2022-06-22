import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => ({
  giftboxes: {
    display: 'flex',
  },
  giftboxesContainer: {
    flex: 6
  },
  cellImage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  cellAction: {
    display: 'flex',
    alignItems: 'center',
    gap: 15
  },
  editButton: {
    padding: '2px 5px',
    borderRadius: 5,
    color: 'darkblue',
    border: '1px dotted rgba(0, 0, 139, 0.596)',
    cursor: 'pointer'
  },
  deleteButton: {
    padding: '2px 5px',
    borderRadius: 5,
    color: 'crimson',
    border: '1px dotted rgba(220, 20, 60, 0.6)',
    cursor: 'pointer'
  },
}))