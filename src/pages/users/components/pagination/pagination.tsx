import { useState, Dispatch, SetStateAction } from "react";
import dropdown from "assets/icons/chevron-down.svg";
import previous from "assets/icons/chevron-left.svg";
import next from "assets/icons/chevron-right.svg";
import { User } from "services/models/responses/user/user-model";
import styles from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  users: User[] | undefined;
  numberOfRows: number;
  pageCount: number;
  itemOffset: number;
  setNumberOfRows: Dispatch<SetStateAction<number>>;
  setPageCount: Dispatch<SetStateAction<number>>;
  setDisplayedUsers: Dispatch<SetStateAction<User[] | undefined>>;
  setItemOffset: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({
  users,
  numberOfRows,
  pageCount,
  itemOffset,
  setNumberOfRows,
  setDisplayedUsers,
  setPageCount,
  setItemOffset,
}: PaginationProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleNumberOfRows = (number: number) => {
    setDisplayedUsers(() => users?.slice(itemOffset, number));
    setPageCount(Math.ceil(users?.length! / number));
    setNumberOfRows(number);
    setVisible(false);
  };

  const handlePageChange = (event: any) => {
    if (!users) return;
    const newOffset = (event.selected * numberOfRows) % users.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.container}>
      <div style={{ position: "relative" }}>
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

      <div className={styles.pagination}>
        <ReactPaginate
          previousLabel={<img src={previous} alt="previous" title="previous" />}
          nextLabel={<img src={next} alt="next" title="next" />}
          pageClassName={styles.page_item}
          pageLinkClassName={styles.page__link}
          previousClassName={styles.previous}
          previousLinkClassName={styles.page_link}
          nextClassName={styles.next}
          nextLinkClassName={styles.next_link}
          breakLabel="..."
          breakClassName={styles.page_item}
          breakLinkClassName={styles.page_link}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          activeLinkClassName={styles.active}
        />
      </div>
    </div>
  );
};
