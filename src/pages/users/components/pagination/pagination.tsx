import { useState, Dispatch, SetStateAction } from "react";
import dropdown from "assets/icons/chevron-down.svg";
import { User } from "services/models/responses/user/user-model";
import styles from "./pagination.module.scss";

interface PaginationProps {
  users: User[] | undefined;
  numberOfRows: number;
  setNumberOfRows: Dispatch<SetStateAction<number>>;
  setDisplayedUsers: Dispatch<SetStateAction<User[] | undefined>>;
}

export const Pagination = ({
  users,
  numberOfRows,
  setNumberOfRows,
  setDisplayedUsers,
}: PaginationProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleNumberOfRows = (number: number) => {
    setDisplayedUsers(() => users?.slice(0, number));
    setNumberOfRows(number);
    setVisible(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.select__rows}>
          <span>Showing</span>

          <button
            className={styles.rows__button}
            onClick={() => setVisible((prev) => !prev)}
          >
            {numberOfRows}

            <img src={dropdown} alt="Dropdown" />
          </button>

          <span>out of {users?.length}</span>
        </div>

        <div
          className={`${styles.select__rows_options} ${
            visible && styles.active
          }`}
        >
          <button onClick={() => handleNumberOfRows(10)}>10</button>
          <button onClick={() => handleNumberOfRows(20)}>20</button>
          <button onClick={() => handleNumberOfRows(50)}>50</button>
        </div>
      </div>

      <div className={styles.__pagination}> pagination</div>

      {/* {filtering && (
      <FilterPopover setFiltering={setFiltering} data={displayedUsers} />
    )} */}
    </div>
  );
};
