import React from "react";
import { PageControl } from "../";
import { useGetSettingsQuery } from "../../features/api/api.slice";
import { useStyles } from "../giftboxes/giftboxes.styles";
import { SettingsForm } from "./settings-form";
import type { Inputs } from './settings-form';

export const Settings = () => {
  const styles = useStyles()
  const { data, isFetching } = useGetSettingsQuery({});

  return (
    <PageControl>
      <div className={styles.container} >
        {!isFetching && 
          <SettingsForm defaultValues={data as Inputs} />
        }
      </div>
    </PageControl>
  )
}