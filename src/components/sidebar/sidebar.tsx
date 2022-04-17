import React from "react";
import {
  CreditCard,
  DashboardTwoTone,
  CardGiftcardTwoTone,
  PersonTwoTone,
  LocalMallTwoTone,
  GroupsTwoTone,
  LiveHelpTwoTone,
  SubscriptionsTwoTone,
  SettingsApplicationsTwoTone
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useStyles } from './sidebar.styles';
export const Sidebar = () => {
  const styles = useStyles();
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={styles.logo}>YourMINIstore Admin</span>
        </Link>
      </div>
      <hr />
      <div className={styles.center}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardTwoTone className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LISTS</p>
          <Link to="/giftboxes" style={{ textDecoration: "none" }}>
            <li>
              <CardGiftcardTwoTone className={styles.icon} />
              <span>Giftboxes</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonTwoTone className={styles.icon} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <LocalMallTwoTone className={styles.icon} />
              <span>Orders</span>
            </li>
          </Link>
          <li>
            <GroupsTwoTone className={styles.icon} />
            <span>Team Members</span>
          </li>
          <li>
            <LiveHelpTwoTone className={styles.icon} />
            <span>FAQ</span>
          </li>
          <li>
            <SubscriptionsTwoTone className={styles.icon} />
            <span>Subscriptions</span>
          </li>
          <li>
            <SettingsApplicationsTwoTone className={styles.icon} />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
