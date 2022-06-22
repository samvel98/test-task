import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetFAQQuery, useLazyEditFAQQuery } from "../../features/api/api.slice";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { PageControl } from "../page-control";
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from "../loading";

type Inputs = {
  type: 'product' | 'order' | 'shipping' | 'returns' | 'general';
  question: string;
  answer: string;
}

export const EditFAQ = () => {
  const styles = useStyles()

  const params = useParams();
  
  const { data, isFetching } = useGetFAQQuery({id: params.id})
  const [edit] = useLazyEditFAQQuery();


  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    await edit({
      data: {
        ...values,
      },
      id: params.id
  }).then(() => navigate('/FAQ'));
  }, [edit, navigate, params.id])

  if (isFetching) {
    return <Loading />
  }

  return (
    <PageControl>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)}  >
          <div >
            <TextField
              fullWidth
              className={styles.m_b}
              defaultValue={data.faq.question}
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
              defaultValue={data.faq.answer}
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