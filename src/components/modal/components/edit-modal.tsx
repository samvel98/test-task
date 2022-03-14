import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "../modal.styles";

type Inputs = {
  job?: string;
  name?: string
}

type EditUserModalProps = {
  user: Partial<IUser> & { job?: string; name?: string };
  onClose: () => void;
  onSubmit: SubmitHandler<Inputs>;
}

export function EditModal({ user, onClose, onSubmit }: EditUserModalProps) {
  const styles = useStyles();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Edt User</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("name", { required: true })} defaultValue={user.first_name} />
            <label className={styles.label}>Name</label>
            {errors.job && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("job", { required: true })} defaultValue={user.job} />
            <label className={styles.label}>Job</label>
            {errors.job && <span className={styles.error}>This field is required</span>}
          </div>
          <input className={styles.submitBtn} type="submit" />
          <input className={styles.cancelBtn} type="button" value="cancel" onClick={onClose} />
        </form>
      </div>
    </div>
  )
}