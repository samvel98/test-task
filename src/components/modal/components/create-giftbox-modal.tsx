import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "../modal.styles";

type Inputs = {
  title?: string;
  description?: string;
  size?: string;
  price?: string;
  gender?: 'male' | 'female' | 'other';
  image?: File;
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
            <input className={styles.inputField} placeholder=" " {...register("title", { required: true })} />
            <label className={styles.label}>Title</label>
            {errors.title && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("description", { required: true })} />
            <label className={styles.label}>description</label>
            {errors.description && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("size", { required: true })} />
            <label className={styles.label}>Size</label>
            {errors.size && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " {...register("price", { required: true })} />
            <label className={styles.label}>Price</label>
            {errors.price && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <label >Gender</label>
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className={styles.input}>
            <input {...register("image")} type="file"/>
          </div>
          <input className={styles.submitBtn} type="submit" />
          <input className={styles.cancelBtn} type="button" value="cancel" onClick={onCancel} />
        </form>
      </div>
    </div>
  )
}