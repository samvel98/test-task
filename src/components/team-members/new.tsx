import React, { useCallback } from "react";
import { PageControl } from "../";
import {
  Button,
  TextField,
} from '@mui/material';
import { SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { useLazyCreateTeamMemberQuery } from "../../features/api/api.slice";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name?: string;
  description?: string;
  insta?: string;
  image?: File[];
}
export const NewTeamMember = () => {

  const [create] = useLazyCreateTeamMemberQuery();
  const styles = useStyles()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    // const imageBinary = null;
    // if (values.image?.length) {
    //   const blobFile = values.image[0];
    //   const formData = new FormData();
    //   formData.append("fileToUpload", blobFile);
    //   // imageBinary = values.image[0];
    //   console.log({blobFile})
    // }
    create({ data: {
      ...values,
      // image: imageBinary,
    }}).then(() => navigate('/team-members'))
  }, [create, navigate])

  return (
    <PageControl>

    <div className={styles.container} >

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            fullWidth
            className={styles.m_b}
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
            error={!!errors.insta}
            helperText={errors.insta ? "field is requierd" : ""}
            label="Instagram link"
            placeholder="Instagram link"
            {...register("insta", { required: true })}
          />
        </div>

        <div className={styles.m_b}>
          <input {...register("image")} type="file" accept="image/*"/>
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