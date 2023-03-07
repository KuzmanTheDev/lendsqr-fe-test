import { Dispatch, SetStateAction, useState } from "react";
import { format } from "date-fns";
import filter from "assets/icons/filter.svg";
import more from "assets/icons/more.svg";
import { User } from "services/models/responses/user/user-model";
import { ActionMenu } from "pages/users/components/action-menu/action-menu";
import styles from "./users-table-web.module.scss";
import { Loader } from "components/common/loader";
import { StatusBadge } from "pages/users/components/status-badge/status-badge";

export interface UsersTableProps {
  users: User[] | undefined;
  loading: boolean;
  setFiltering: Dispatch<SetStateAction<boolean>>;
}

export const UsersTableWeb = ({
  users,
  loading,
  setFiltering,
}: UsersTableProps) => {
  const [selected, setSelected] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);

  const onMore = (id: string) => {
    setShowMore((prev) => !prev);
    setSelected(id);
  };

  if (loading) return <Loader />;

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>
            <button
              className={styles.filter}
              onClick={() => setFiltering((prev) => !prev)}
            >
              ORGANIZATION <img src={filter} alt="Filter" />
            </button>
          </th>

          <th className={styles.th}>
            <button
              className={styles.filter}
              onClick={() => setFiltering((prev) => !prev)}
            >
              USERNAME
              <img src={filter} alt="Filter" />
            </button>
          </th>

          <th className={styles.th}>
            <button
              className={styles.filter}
              onClick={() => setFiltering((prev) => !prev)}
            >
              EMAIL
              <img src={filter} alt="Filter" />
            </button>
          </th>

          <th className={styles.th}>
            <button
              className={styles.filter}
              onClick={() => setFiltering((prev) => !prev)}
            >
              PHONE NUMBER <img src={filter} alt="Filter" />
            </button>
          </th>

          <th className={styles.th}>
            <button
              className={styles.filter}
              onClick={() => setFiltering((prev) => !prev)}
            >
              DATE JOINED
              <img src={filter} alt="Filter" />
            </button>
          </th>

          <th className={styles.th}>
            <button
              className={styles.filter}
              onClick={() => setFiltering((prev) => !prev)}
            >
              STATUS
              <img src={filter} alt="Filter" />
            </button>
          </th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {users?.map(({ id, email, profile, userName, createdAt }) => (
          <tr key={id}>
            <td>Lendsqr</td>

            <td>{userName}</td>

            <td>{email}</td>

            <td>{profile.phoneNumber}</td>

            <td>{format(new Date(createdAt), "MMM dd, yyyy hh:mm a")}</td>

            <td>
              <StatusBadge />
            </td>

            <td className={styles.action}>
              <button onClick={() => onMore(id)}>
                <img src={more} alt="More" />
              </button>

              {showMore && selected === id && (
                <ActionMenu id={id} onClose={setShowMore} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
