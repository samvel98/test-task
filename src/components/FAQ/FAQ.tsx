import React, { useCallback, useEffect, useState } from "react";
// import { useStyles } from "./giftboxes.styles";
import {  DataTable, PageControl } from "../";
import { GridColDef } from "@mui/x-data-grid";
import { useDeleteFAQMutation, useListFAQQuery } from "../../features/api/api.slice";
import { Loading } from "../loading";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { Link } from "react-router-dom";

export const FAQ = () => {
  const styles = useStyles();
  const [FAQs, setFAQs] = useState<any[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'type',
      headerName: 'Type',
    },
    {
      field: 'question',
      headerName: 'Question',
    },
    {
      field: 'answer',
      headerName: 'Answer',
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <div className={styles.editButton}>
              <Link to={`/FAQ/edit/${params.row.id}`}>
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

  const { isFetching, data } = useListFAQQuery({});
  const [deleteFAQ] = useDeleteFAQMutation();
 
  useEffect(() => {
    if(data?.faqs) {
      setFAQs(data?.faqs)
    }
  }, [data?.faqs]);


  const handleDelete = useCallback((id: string) => {
    deleteFAQ({ id }).then(() => setFAQs(prev => prev.filter(item => item.id !== id)));
  }, [deleteFAQ])

  return (
    <PageControl>
      <>
        {isFetching ? <Loading /> : <DataTable  columns={columns} routeTo="/FAQ/new" rows={FAQs} />}
      </>
    </PageControl>
  );
}