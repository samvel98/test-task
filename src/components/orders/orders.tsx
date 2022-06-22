import React, { useEffect, useState } from "react";
import { DataTable, PageControl } from "../";
import { GridColDef } from "@mui/x-data-grid";
import { useOrdersListQuery } from "../../features/api/api.slice";
import { Loading } from "../loading";


export const Orders = () => {
  const [orders, setOrders] = useState([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.user.email}</div>
      }
    },
    {
      field: 'total_price',
      headerName: 'Total Price',
    },
    {
      field: 'status',
      headerName: 'Status',
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 300,
      renderCell: (params) => {
        return (
          <div>
            <span>
              {params.row.address.zipcode}
            </span>
            <span>
              {params.row.address.streetHouseNumber}
            </span>
            <span>
              {params.row.address.city}
            </span>
            
            {params.row.address.country}
          </div>
        )
      }
    },
    {
      field: 'createdAt',
      headerName: 'Date',
    },
    // {
    //   field: "action",
    //   headerName: "Actions",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className={styles.cellAction}>
    //         <div className={styles.editButton}>Edit</div>
    //         <div
    //           className={styles.deleteButton}
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           Delete
    //         </div>
    //       </div>
    //     );
    //   },
    // }
  ];

  const { isFetching, data } = useOrdersListQuery({});
 
  useEffect(() => {
    if(data?.orders) {
      setOrders(data?.orders)
    }
  }, [data?.orders]);


  return (
    <PageControl>
      <>
        {isFetching ? <Loading /> : <DataTable columns={columns} rows={orders} />}
      </>
    </PageControl>
  );
}