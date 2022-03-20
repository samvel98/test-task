import React, { useCallback, useEffect, useState } from 'react';
import { useStyles } from './users-page.styles';
import cn from 'classnames';
import { currentUser, setCurrentUser } from '../../slices/current-user.slice'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { CreateModal } from '../modal/components/create-modal';

export const UsersPage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { currentUser: user } = useSelector(currentUser);
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  const handleCreateMatches = useCallback((matches: IEmployee[]) => {
    setOpenCreateModal(false);
    return dispatch(setCurrentUser({ ...user, matches }))
  }, [dispatch, user])

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.label}>User Name <span className={styles.name}>{user?.name}</span></div>
        <div className={styles.label}>User Email <span className={styles.name}>{user?.email}</span></div>
        <div className={styles.matches}>
          <h1>Matches list</h1>
          <Table bordered striped className={styles.table} >
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>City</th>
                <th>Job Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user?.matches?.map((employee, index) =>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{employee.first_name} {employee.last_name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.country}</td>
                  <td>{employee.city}</td>
                  <td>{employee.job_title}</td>
                  <td>
                    <span
                      className={cn(styles.buttonSuccess, styles.dangerButton)}
                      onClick={() => dispatch(setCurrentUser({ ...user, matches: user?.matches?.filter((match => match !== employee)) }))}
                    >
                      remove
                    </span>
                  </td>
                </tr>
                )
              }
            </tbody>
          </Table>
          {user?.matches &&  user?.matches?.length < 5 &&
            <div className={styles.buttonSuccess} onClick={() => setOpenCreateModal(true)}>
              Add Matches
            </div>
          }
          {openCreateModal &&
            <CreateModal
              selectedEmployees={user?.matches || []}
              onCancel={() => setOpenCreateModal(false)}
              onSubmit={handleCreateMatches}
            />
          }
        </div>
      </div>
    </div>
   )
} 