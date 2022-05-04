import { Button, TextField } from "@mui/material";
import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateOrCreateSettingsMutation } from "../../features/api/api.slice";
import { useStyles } from "../giftboxes/giftboxes.styles";

export type Inputs = {
  phone?: string;
  email?: string;
  address?: string;
  whatsApp?: string;
  tiktok?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
}

export const SettingsForm = ({ defaultValues }: { defaultValues: Inputs}) => {
  const [updateOrCreate] = useUpdateOrCreateSettingsMutation();
  const styles = useStyles()

  const { register, handleSubmit } = useForm<Inputs>({ defaultValues });
  
  const onSubmit: SubmitHandler<Inputs> = useCallback(async (values) => {
    updateOrCreate({ data: {
      ...values,
    }})
  }, [updateOrCreate])

  return (
    <form onSubmit={handleSubmit(onSubmit)}  >
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Phone"
          placeholder="Phone"
          
          {...register("phone")}
        />
      </div>
      <div >
        <TextField
          fullWidth
          className={styles.m_b}
          label="Address"
          placeholder="Address"
          {...register("address")}
        />
      </div>
      
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Whatsapp"
          placeholder="Whatsapp"
          {...register("whatsApp")}
        />
      </div>
      
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Instagram"
          placeholder="Instagram"
          {...register("instagram")}
        />
      </div>
      
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Facebook"
          placeholder="Facebook"
          {...register("facebook")}
        />
      </div>
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Tiktok"
          placeholder="Tiktok"
          {...register("tiktok")}
        />
      </div>
      
      
      <div>
        <TextField
          fullWidth
          className={styles.m_b}
          label="Youtube"
          placeholder="Youtube"
          {...register("youtube")}
        />
      </div>
      
      <Button type="submit" variant="contained" >
        Save
      </Button>

    </form>
  )
}