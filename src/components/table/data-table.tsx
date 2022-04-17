import React from "react";

import { DataGrid, GridColDef, GridColumns, GridRowsProp, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useStyles } from "./data-table.styles";

type TableProps = {
  rows: GridRowsProp;
  // routeTo: string;
  columns: GridColDef[];
  canAdd?: boolean;
  onAddNew?: () => void;
}

export const DataTable = ({ rows, columns, canAdd, onAddNew }: TableProps) => {
  const styles = useStyles();

  return (
    <div className={styles.datatable}>
      {canAdd && 
        <div className={styles.datatableTitle}>
          Add new
          <div className={styles.link} onClick={onAddNew}>
            Add New
          </div>
        </div>
      }
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    )
} 
