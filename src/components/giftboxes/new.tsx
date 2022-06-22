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
import { useLazyCreateGiftboxQuery } from "../../features/api/api.slice";
import * as filestack from 'filestack-js';
import { useNavigate } from "react-router-dom";
const client = filestack.init('Aqr6RauGzRZLBf0R1qeQOz');

type Inputs = {
  title?: string;
  description?: string;
  size?: string;
  price?: string;
  gender?: 'male' | 'female' | 'other';
  image?: string;
  items?: string[];
}

export const NewGiftbox = () => {
  const styles = useStyles()

  const { register, handleSubmit, formState: { errors,  }, getValues,  } = useForm<Inputs>();
  const [createGiftbox] = useLazyCreateGiftboxQuery();
  const [mainImage, setMainImage] = useState('');
  const [itemsList, setItemsList] = useState<string[]>([]);
  const navigate = useNavigate();
  const mainImageOptions: filestack.PickerOptions = {
    accept: 'image/*',
    onUploadDone: (res) => setMainImage(res.filesUploaded[0].url)

  };
  
  const itemsOptions: filestack.PickerOptions = {
    accept: 'image/*',
    maxFiles: 20,
    onUploadDone: (res) => setItemsList(prev => [...prev, ...res.filesUploaded.map((i) => i.url)])
  };

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    createGiftbox({ data: { ...values, image: mainImage, items: itemsList } }).then(() => navigate('/giftboxes'))
  }, [createGiftbox, itemsList, mainImage, navigate])

  const Anasun = useCallback(() => {
    return (
      <>
        {itemsList.map((it, index) => (
          <div key={index} className={styles.mainImage}>
            <img src={it} alt="" />
          </div>
        ))}
      </>
    )
  }, [itemsList, styles.mainImage]);

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
        {mainImage ? (
          <div className={styles.mainImage}>
            <img src={mainImage} alt="" />
          </div>
        ) : (
          <Button className={styles.m_b} variant="contained"  onClick={() => client.picker(mainImageOptions).open()}>
            upload an image
          </Button>
        )}


          <Anasun />
        {/* <div className={styles.itemsImages}>
        </div> */}
        <div>
          <Button className={styles.m_b} variant="contained"  onClick={() => client.picker(itemsOptions).open()}>
            upload an items
          </Button>
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