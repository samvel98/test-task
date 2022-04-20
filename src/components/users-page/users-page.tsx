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
import { Sidebar } from '../sidebar';
import { DataTable } from '../table';
import { GridColDef } from '@mui/x-data-grid';

export const UsersPage = () => {
  const styles = useStyles();
  const [users, setUsers] = useState<IUser[]>([]);

  const columns: GridColDef[] = [
    {
      field: 'image',
      headerName: 'Image',
      
      renderCell: (params) => {
        return (
          <div className={styles.cellImage}><img src={`${process.env.REACT_APP_API_URL}/${params.row.image}`} /></div>
        )
      }
    },
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullname',
      headerName: 'Full Name',
      renderCell: (params) => {
        return (
          <div className={styles.cellFullName}>{params.row.name} {params.row.surname}</div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
    {
      field: 'gender',
      headerName: 'Gender',
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    }
  ];

  const { isFetching, data } = useUsersListQuery({});
  const [deleteUser] = useDeleteUserMutation();
 
  const handleDelete = useCallback((id: string) => {
    deleteUser({ id }).then(() => setUsers(prev => prev.filter(item => item.id !== id)));
  }, [])

  useEffect(() => {
    if(data?.users) {
      setUsers(data?.users)
    }
  }, [data?.users]);

  return (
    <div className={styles.users}>
      <Sidebar />
      <div className={styles.usersContainer}>
        {isFetching ? <Loading /> : <DataTable rows={users} columns={columns} />}
      </div>
    </div>
  )
} 