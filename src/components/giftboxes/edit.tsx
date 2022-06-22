import React, { useCallback, useState } from "react";
import { PageControl } from "../";
import {
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SubmitHandler, useForm } from "react-hook-form";
import { useStyles } from "./giftboxes.styles";
import { useGetGiftboxQuery, useLazyCreateGiftboxQuery, useLazyEditGiftboxQuery } from "../../features/api/api.slice";
import * as filestack from 'filestack-js';
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../loading";

type Inputs = {
  title?: string;
  description?: string;
  size?: string;
  price?: string;
  gender?: 'male' | 'female' | 'other';
  image?: string;
  items?: string[];
}

export const EditGiftbox = () => {
  const styles = useStyles()

  const { register, handleSubmit, formState: { errors,  }, getValues,  } = useForm<Inputs>();
  const params = useParams();
  
  const { data, isFetching } = useGetGiftboxQuery({id: params.id})

  console.log({data})
  const [edit] = useLazyEditGiftboxQuery();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    edit({ data: values, id: params.id }).then(() => navigate('/giftboxes'))
  }, [edit, navigate, params.id])

  if (isFetching) {
    return <Loading />
  }

  return (
    <PageControl>

    <div className={styles.container} >

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            fullWidth
            className={styles.m_b}
            defaultValue={data.giftbox.title}
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
            defaultValue={data.giftbox.description}
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
            defaultValue={data.giftbox.size}
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
            defaultValue={data.giftbox.price}
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
            defaultValue={data.giftbox.gend}
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