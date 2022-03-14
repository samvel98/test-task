import React, { useCallback, useEffect, useState } from 'react';
import {
  useUsersListQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useCreateUserMutation
} from '../../features/api/api.slice';
import { Modal, Loading } from '../'
import { useStyles } from './users-page.styles';
import cn from 'classnames';

const PER_PAGE = 5;
export const UsersPage = () => {
  const styles = useStyles();
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState<number[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const { data, isFetching } = useUsersListQuery({ page: currentPage, perPage: PER_PAGE });
  const [selectedUser, setSelectedUser] = useState<Partial<IUser> | null>();
  const [userToDelete, setUserToDelete] = useState<string>('');
  const [creationModal, setCreationModal] = useState<boolean>(false);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [createUser] = useCreateUserMutation();

  const handleUpdate = useCallback(async (options) => {
    await updateUser({
      id: selectedUser?.id,
      data: options
    }).then(() => setSelectedUser(null))
  }, [selectedUser?.id, updateUser])

  const handelDelete = useCallback(async () => {
    await deleteUser({ id: userToDelete }).then(() => setUserToDelete(''));
  }, [deleteUser, userToDelete])

  const handleCreate = useCallback(async (options) => {
    await createUser({
      data: options
    }).then(() => setCreationModal(false))
  }, [createUser])

  useEffect(() => {
    if (!isFetching) {
      setUsers(data.data);
      setPages(() => {
        const pagesArr = [];
        for (let i = 1; i <= data.total_pages; i++) {
          pagesArr.push(i)
        }
        return pagesArr
      })
    }
  }, [data, isFetching])

  return (
    <div className={styles.container}>
      <button className={styles.buttonSuccess} onClick={() => setCreationModal(true)}>create user</button>
      {isFetching ? (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      ) : (
        <>
            <table className={styles.table} >
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user =>
                  <tr key={user.id}>
                    <td><img src={user.avatar} /></td>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={styles.buttonSuccess} onClick={() => setSelectedUser(user)}>edit</span>
                      <span className={cn(styles.buttonSuccess, styles.dangerButton)} onClick={() => setUserToDelete(user.id)}>delete</span>
                    </td>
                  </tr>
                  )
                }
              </tbody>
            </table>
          </>
        )
      }
      <div className={styles.pages}>
        {pages.map(page =>
          <div
          key={page}
          className={cn(styles.page, currentPage === page && 'activePage')}
          onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>)
        }
      </div>
      {selectedUser && <Modal.Edit user={selectedUser} onClose={() => setSelectedUser(null)} onSubmit={handleUpdate} />}
      {userToDelete && <Modal.DeleteConfirmation onCancel={() => setUserToDelete('')} onSubmit={handelDelete} />}
      {creationModal && <Modal.Create onCancel={() => setCreationModal(false)} onSubmit={handleCreate} />}
    </div>
  )
} 