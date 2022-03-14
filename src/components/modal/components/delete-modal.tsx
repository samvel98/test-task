import React from "react";
import { useStyles } from "../modal.styles";

type EditUserModalProps = {
  onCancel: () => void;
  onSubmit: () => void;
}

export function DeleteConfirmationModal({ onCancel, onSubmit }: EditUserModalProps) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Delete this</h1>
        <div className={styles.buttonGroup}>
          <button className={styles.cancelBtn} onClick={onCancel}> Cancel </button>
          <button className={styles.deleteBtn} onClick={() => onSubmit()}> Delete </button>
        </div>
      </div>
    </div>
  )
}
