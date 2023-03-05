import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "services/user-service";
import { format } from "date-fns";
import filter from "assets/icons/filter.svg";
import styles from "./users-table.module.scss";
import dropdown from "assets/icons/chevron-down.svg";
import more from "assets/icons/more.svg";
import { User } from "services/models/responses/user/user-model";
import { ActionMenu } from "pages/users/components/action-menu/action-menu";

export const UsersTable = () => {
  const [numberOfRows, setNumberOfRows] = useState<number>(10);
  const [pageCount, setPageCount] = useState<number>(0);
  const [displayedUsers, setDisplayedUsers] = useState<User[]>();
  const [visible, setVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [filtering, setFiltering] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  const { isLoading, data } = useQuery(
    ["users"],
    () => UserService.getUsers(),
    {
      onSuccess: (data) => {
        // console.log(data);
        setDisplayedUsers(() => data?.slice(0, numberOfRows));
        setPageCount(Math.ceil(data.length / 10));
      },
    }
  );

  const handleNumberOfRows = (number: number) => {
    console.log(number);
    setDisplayedUsers(() => data?.slice(0, number));
    setNumberOfRows(number);
    setVisible(false);
  };
  const onMore = (id: string) => {
    setShowMore((prev) => !prev);
    setSelected(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <div>
                ORGANIZATION{" "}
                <span className={styles.filter}>
                  <img src={filter} alt="Filter" />
                </span>
              </div>
            </th>

            <th className={styles.th}>
              <div>
                USERNAME{" "}
                <span className={styles.filter}>
                  <img src={filter} alt="Filter" />
                </span>
              </div>
            </th>

            <th className={styles.th}>
              <div>
                EMAIL{" "}
                <span className={styles.filter}>
                  <img src={filter} alt="Filter" />
                </span>
              </div>
            </th>

            <th className={styles.th}>
              <div>
                PHONE NUMBER{" "}
                <span className={styles.filter}>
                  <img src={filter} alt="Filter" />
                </span>
              </div>
            </th>

            <th className={styles.th}>
              <div>
                DATE JOINED{" "}
                <span className={styles.filter}>
                  <img src={filter} alt="Filter" />
                </span>
              </div>
            </th>

            <th className={styles.th}>
              <div>
                STATUS{" "}
                <span className={styles.filter}>
                  <img src={filter} alt="Filter" />
                </span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {displayedUsers?.map(
            ({ id, orgName, email, phoneNumber, userName, createdAt }) => (
              <tr key={id}>
                <td>Lendsqr</td>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{format(new Date(createdAt), "MMM dd, yyyy hh:mm a")}</td>
                <td>Status</td>
                <td className={styles.action}>
                  <button onClick={() => onMore(id)}>
                    <img src={more} alt="More" />
                  </button>

                  {showMore && selected === id && <ActionMenu id={id} />}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className={styles.footer}>
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

            <span>out of {data?.length}</span>
          </div>

          <div
            className={`${styles.select__rows_options} ${
              visible && styles.active
            }`}
          >
            <span role="button" onClick={() => handleNumberOfRows(10)}>
              10
            </span>
            <span role="button" onClick={() => handleNumberOfRows(20)}>
              20
            </span>
            <span role="button" onClick={() => handleNumberOfRows(50)}>
              50
            </span>
          </div>
        </div>

        <div className={styles.__pagination}> pagination</div>
      </div>
    </>
  );
};
