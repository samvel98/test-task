import React from "react";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useStyles } from "./data-table.styles";

type TableProps = {
  rows: GridRowsProp;
  routeTo?: string;
  columns: GridColDef[];
  onAddNew?: () => void;
}

export const DataTable = ({ rows, columns, routeTo }: TableProps) => {
  const styles = useStyles();

  return (
    <div className={styles.datatable}>
      {routeTo && 
        <div className={styles.datatableTitle}>
          Add new
          <Link className={styles.link} to={routeTo} >
            Add New
          </Link>
        </div>
      }
      <DataGrid
        checkboxSelection
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        rows={rows}
        rowsPerPageOptions={[5]}
      />
    </div>
    )
} 
