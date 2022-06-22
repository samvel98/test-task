import React, { useCallback, useEffect, useState } from "react";
// import { useStyles } from "./giftboxes.styles";
import {  DataTable, PageControl } from "../";
import { GridColDef } from "@mui/x-data-grid";
import { useDeleteTeamMemberMutation, useListTeamMemberQuery } from "../../features/api/api.slice";
import { Loading } from "../loading";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { Link } from "react-router-dom";

export const TeamMembers = () => {
  const styles = useStyles();
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'insta',
      headerName: 'Instagramm',
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <div className={styles.editButton}>
              <Link to={`/team-members/edit/${params.row.id}`}>
                Edit
              </Link>
              </div>
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

  const { isFetching, data } = useListTeamMemberQuery({});
  const [deleteTeamMember] = useDeleteTeamMemberMutation();
 
  useEffect(() => {
    if(data?.teamMembers) {
      setTeamMembers(data?.teamMembers)
    }
  }, [data?.teamMembers]);


  const handleDelete = useCallback((id: string) => {
    deleteTeamMember({ id }).then(() => setTeamMembers(prev => prev.filter(item => item.id !== id)));
  }, [deleteTeamMember])

  return (
    <PageControl>
      <>
        {isFetching ? <Loading /> : <DataTable  columns={columns} routeTo="/team-members/new" rows={teamMembers} />}
      </>
    </PageControl>
  );
}