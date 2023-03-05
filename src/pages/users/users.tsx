import { Analytics } from "pages/users/components/analytics/analytics";
import styles from "./users.module.scss";
import { UsersTable } from "pages/users/components/users-table/users-table";

export const Users = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Users</h1>

      <Analytics />

      <UsersTable />
    </div>
  );
};
