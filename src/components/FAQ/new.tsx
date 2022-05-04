import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLazyCreateFAQQuery } from "../../features/api/api.slice";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { PageControl } from "../page-control";
import { useNavigate } from 'react-router-dom';

export type Inputs = {
  type: 'product' | 'order' | 'shipping' | 'returns' | 'general';
  question: string;
  answer: string;
}

export const NewFAQ = () => {
  const [create] = useLazyCreateFAQQuery();
  const styles = useStyles()
  const navigate = useNavigate()
  const { register, handleSubmit, getValues } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    await create({ data: {
      ...values,
    }}).then(() => navigate('/FAQ'));
  }, [create, navigate])

  return (
    <PageControl>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}  >
          <div>
            <Select
              fullWidth
              className={styles.m_b}
              defaultValue="product"
              label="Type"
              labelId="label"
              value={getValues('type')}
              {...register("type")}
            >
              <MenuItem value="product">Product</MenuItem>
              <MenuItem value="order">Order</MenuItem>
              <MenuItem value="shipping">Shipping</MenuItem>
              <MenuItem value="returns">Returns</MenuItem>
              <MenuItem value="general">General</MenuItem>
            </Select>
          </div>
          <div >
            <TextField
              fullWidth
              className={styles.m_b}
              label="Question"
              placeholder="Question"
              {...register("question")}
            />
          </div>
          
          <div>
            <TextField
              fullWidth
              className={styles.m_b}
              label="Answer"
              placeholder="Answer"
              {...register("answer")}
            />
          </div>
          
          <Button type="submit" variant="contained" >
            Save
          </Button>

        </form>
    </div>

  </PageControl>

  )
}