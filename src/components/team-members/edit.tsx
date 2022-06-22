import React, { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetTeamMemberQuery, useLazyEditTeamMemberQuery } from "../../features/api/api.slice";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { PageControl } from "../page-control";
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from "../loading";

type Inputs = {
  name?: string;
  description?: string;
  instagramLink?: string;
}

export const EditTeamMember = () => {
  const styles = useStyles()

  const params = useParams();
  
  const { data, isFetching } = useGetTeamMemberQuery({id: params.id})
  const [edit] = useLazyEditTeamMemberQuery();


  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    await edit({
      data: {
        ...values,
      },
      id: params.id
  }).then(() => navigate('/team-members'));
  }, [edit, navigate, params.id])

  if (isFetching) {
    return <Loading />
  }

  return (
    <PageControl>
      <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            fullWidth
            className={styles.m_b}
            defaultValue={data.teamMember.name}
            error={!!errors.name}
            helperText={errors.name ? "field is requierd" : ""}
            label="Name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>
        <div >
          <TextField
            fullWidth
            className={styles.m_b}
            defaultValue={data.teamMember.description}
            error={!!errors.description}
            helperText={errors.description ? "field is requierd" : ""}
            label="Description"
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </div>
        
        <div>
          <TextField
            fullWidth
            className={styles.m_b}
            defaultValue={data.teamMember.insta}
            label="Instagram link"
            placeholder="Instagram link"
            {...register("instagramLink")}
          />
        </div>
        <Button type="submit" variant="contained" >
          Save
        </Button>
        <Button color="error" variant="outlined" onClick={() => console.log('cancel')} >
          Cancel
        </Button>
      </form>
    </div>

  </PageControl>

  )
}