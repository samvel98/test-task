import React, { useCallback, useEffect, useState } from "react";
import { useStyles } from "./giftboxes.styles";
import {  DataTable, PageControl } from "../";
import { GridColDef } from "@mui/x-data-grid";
import { useDeleteGiftboxMutation, useListGiftboxesQuery } from "../../features/api/api.slice";
import { Loading } from "../loading";
import { Link } from "react-router-dom";

export const Giftboxes = () => {
  const styles = useStyles();
  const [giftboxes, setGiftboxes] = useState<IGiftbox[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      
      renderCell: (params) => {
        return (
          <div className={styles.cellImage}><img src={params.row.img} /></div>
        )
      }
    },
    {
      field: 'title',
      headerName: 'Title',
    },
    {
      field: 'size',
      headerName: 'Size',
    },
    {
      field: 'price',
      headerName: 'Price',
    },
    {
      field: 'gend',
      headerName: 'Gender',
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <div className={styles.editButton}>
              <Link to={`/giftboxes/edit/${params.row.id}`}>
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

  const { isFetching, data } = useListGiftboxesQuery({});
  const [deleteGiftbox] = useDeleteGiftboxMutation();
 
  useEffect(() => {
    if(data?.giftboxes) {
      setGiftboxes(data?.giftboxes)
    }
  }, [data?.giftboxes]);


  const handleDelete = useCallback((id: string) => {
    deleteGiftbox({ id }).then(() => setGiftboxes(prev => prev.filter(item => item.id !== id)));
  }, [deleteGiftbox])

  return (
    <PageControl>
      <>
        {isFetching ? <Loading /> : <DataTable  columns={columns} routeTo="/giftboxes/new" rows={giftboxes} />}
      </>
    </PageControl>
  );
}