import { format } from "date-fns";
import { UsersTableProps } from "pages/users/components/users-table/views/web/users-table-web";
import styles from "./users-table-mobile.module.scss";
import more from "assets/icons/more.svg";
import { useState } from "react";
import { ActionMenu } from "pages/users/components/action-menu/action-menu";
import { Loader } from "components/common/loader";
import { StatusBadge } from "pages/users/components/status-badge/status-badge";

export const UsersTableMobile = ({
  users,
  loading,
  error,
}: UsersTableProps) => {
  const [selected, setSelected] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);

  const onMore = (id: string) => {
    setShowMore((prev) => !prev);
    setSelected(id);
  };

  if (loading) return <Loader />;

  if (users?.length === 0) return <p>There are no users</p>;

  if (error) return <p>Something went wrong. Try again</p>;

  return (
    <div className={styles.container}>
      {users?.map(({ id, createdAt, email, userName }) => (
        <div className={styles.card} key={id}>
          <div className={styles.top}>
            <span className={styles.date}>
              {format(new Date(createdAt), "MMM dd, yyyy hh:mm a")}
            </span>

            <button onClick={() => onMore(id)}>
              <img src={more} alt="More" />
            </button>

            {showMore && selected === id && (
              <ActionMenu id={id} onClose={() => setShowMore(false)} />
            )}
          </div>

          <div className={styles.details}>
            <div className={styles.details__left}>
              <span>Lendsqr</span>

              <span>{userName}</span>

              <span>{email}</span>
            </div>

            <div>
              <StatusBadge />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
