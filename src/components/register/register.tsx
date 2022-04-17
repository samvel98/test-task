import React, { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/api.slice'
import { setCurrentUser } from '../../slices/current-user.slice';
import { useStyles } from './register.styles';
import { employees } from '../../utils/constants';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const Register = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [fetchRegister] = useRegisterMutation();
  const [selectedMatches, setSelectedMatches] = useState<typeof employees>([])
  const [allMatches, setAllMatches] = useState(employees);
  

  const handleAddMatch = useCallback((match: IEmployee) => {
    if(selectedMatches.length < 5) {
      setSelectedMatches(prev => [...prev, match])
    }
  }, [selectedMatches.length])

  const handleRemoveFromMatches = useCallback((match: IEmployee) => {
    setSelectedMatches(prev => prev.filter(item => item !== match))
  }, [])

  useEffect(() => {
    setAllMatches(() => employees.filter(item => !selectedMatches.some(match => match === item)));
  }, [selectedMatches])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetchRegister({ email: data.email, password: data.password, name: data.name }).then((res: any) => {
      if (res.error) {
        return alert(res.error.data.message)
      }
      return dispatch(setCurrentUser({ ...res.data.user, matches: selectedMatches }))
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className={styles.input}>
            <input className={styles.inputField} placeholder=" " type="text" {...register("name", { required: true })} />
            <label className={styles.label}>Name</label>
            {errors.name && <span className={styles.error}>This field is required</span>}
          </div>
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
          <h1 className={styles.title}>Select Matches </h1>
          <div className={styles.matches}>
            <div className={styles.matchLists}>
              {allMatches.map((employee, index) => 
                <div key={index} className={styles.matchItem} onClick={() => handleAddMatch(employee)}>
                  <div className={styles.matchItemName}>
                    {`${employee.first_name} ${employee.last_name}`}
                  </div>
                  <div className={styles.matchItemJob}>
                    {employee.job_title}
                  </div>
                </div>
                )}
            </div>
            <div className={styles.selectedMatches}>
              {selectedMatches.map((selectedMatch, index) => 
                <div key={index} className={styles.matchItem}>
                  <div className={styles.matchItemName}>
                    {`${selectedMatch.first_name} ${selectedMatch.last_name}`}
                  </div>
                  <div className={styles.matchItemJob}>
                    {selectedMatch.job_title}
                  </div>
                  <span className={styles.removeFromMatchList} onClick={() => handleRemoveFromMatches(selectedMatch)}>X</span>
                </div>
                )}
            </div>
          </div>
          <input className={styles.submitBtn} type="submit" value="Register" />
        </form>
        <Link to="/login">
          <button type="button">
            Log In
          </button>
        </Link>
      </div>
    </div>
  )
}