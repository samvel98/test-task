import React from "react";
import { Sidebar } from '../';
import { useStyles } from './home.styles';

export const Home = () => {
  const styles = useStyles();
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.homeContainer}>
        
      </div>
    </div>
  );
}