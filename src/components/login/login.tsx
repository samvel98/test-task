import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../slices/api.slice'
import { setCurrentUser } from '../../slices/current-user.slice';
import { useStyles } from './login.styles';

type Inputs = {
  email: string,
  password: string,
};

export const Login = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [loginFetch] = useLoginMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await loginFetch({ email: data.email, password: data.password }).then((res: any) => {
      if (res.error) {
        return alert(res.error)
      }
      return dispatch(setCurrentUser(res.data.user))
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Log In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " type="email" {...register("email", { required: true })} />
            <label className={styles.label}>Email</label>
            {errors.email && <span className={styles.error}>This field is required</span>}
          </div>
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " type="password"  {...register("password", { required: true })} />
            <label className={styles.label}>Password</label>
            {errors.password && <span className={styles.error}>This field is required</span>}
          </div>
          <input className={styles.submitBtn} type="submit" value="Log In" />
        </form>
        <Link to="/register">
          <button type="button">
            Register
          </button>
        </Link>
      </div>
    </div>
  )
}