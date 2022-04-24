import React, { useCallback } from "react";
import { PageControl } from "../";
import {
  Input,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "./giftboxes.styles";
import { useLazyCreateGiftboxQuery } from "../../features/api/api.slice";

type Inputs = {
  title?: string;
  description?: string;
  size?: string;
  price?: string;
  gender?: 'male' | 'female' | 'other';
  image?: File[];
}

// const convertBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);

//       fileReader.onload = () => {
//           resolve(fileReader.result);
//       };

//       fileReader.onerror = (error) => {
//           reject(error);
//       };
//   });
// };

export const NewGiftbox = () => {
  const styles = useStyles()
  const { register, handleSubmit, formState: { errors,  }, getValues } = useForm<Inputs>();
  const [createGiftbox] = useLazyCreateGiftboxQuery();

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    const imageBinary = null;
    if (values.image?.length) {
      const blobFile = values.image[0];
      const formData = new FormData();
      formData.append("fileToUpload", blobFile);
      // imageBinary = values.image[0];
      console.log({blobFile})
    }
    createGiftbox({ data: {
      ...values,
      image: imageBinary,
    }})
  }, [createGiftbox])

  return (
    <PageControl>

    <div className={styles.container} >

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            fullWidth
            className={styles.m_b}
            error={!!errors.title}
            helperText={errors.title ? "field is requierd" : ""}
            label="Title"
            placeholder="Title"
            {...register("title", { required: true })}
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
            error={!!errors.size}
            helperText={errors.size ? "field is requierd" : ""}
            label="Size"
            placeholder="Size"
            {...register("size", { required: true })}
          />
        </div>
        <div>
          <TextField
            fullWidth
            className={styles.m_b}
            error={!!errors.price}
            helperText={errors.price ? "field is requierd" : ""}
            label="Price"
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
          />
        </div>
        <div>
        <InputLabel id="label">Gender</InputLabel>
        <Select
          autoWidth
          fullWidth
          className={styles.m_b}
          defaultValue="female"
          label="Gender"
          labelId="label"
          value={getValues('gender')}
          {...register("gender")}
        >
          <MenuItem value="female">female</MenuItem>
          <MenuItem value="male">male</MenuItem>
          <MenuItem value="other">other</MenuItem>
        </Select>
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