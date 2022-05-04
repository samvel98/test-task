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
  SettingsApplicationsTwoTone,
  BookTwoTone
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
          <Link to="/giftbooks" style={{ textDecoration: "none" }}>
            <li>
              <BookTwoTone className={styles.icon} />
              <span>Giftbooks</span>
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
          <Link to="/team-members" style={{ textDecoration: "none" }}>
            <li>
              <GroupsTwoTone className={styles.icon} />
              <span>Team Members</span>
            </li>
          </Link>
          <Link to="/FAQ" style={{ textDecoration: "none" }}>
            <li>
              <LiveHelpTwoTone className={styles.icon} />
              <span>FAQ</span>
            </li>
          </Link>
          <Link to="/subscriptions" style={{ textDecoration: "none" }}>
            <li>
              <SubscriptionsTwoTone className={styles.icon} />
              <span>Subscriptions</span>
            </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsApplicationsTwoTone className={styles.icon} />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
