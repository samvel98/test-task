import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "../modal.styles";

type Inputs = {
  job?: string;
  name?: string
}

type CreateUserModalProps = {
  onCancel: () => void;
  onSubmit: SubmitHandler<Inputs>;
}

export function CreateModal({ onCancel, onSubmit }: CreateUserModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Create User</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("name", { required: true })} />
            <label className={styles.label}>Name</label>
            {errors.job && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("job", { required: true })} />
            <label className={styles.label}>Job</label>
            {errors.job && <span className={styles.error}>This field is required</span>}
          </div>
          <input className={styles.submitBtn} type="submit" />
          <input className={styles.cancelBtn} type="button" value="cancel" onClick={onCancel} />
        </form>
      </div>
    </div>
  )
}