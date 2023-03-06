import { Categories } from "pages/users/components/categories/categories";
import { UsersTableWeb } from "pages/users/components/users-table/views/web/users-table-web";
import { useMediaQuery } from "hooks/useMediaQuery";
import { useQuery } from "@tanstack/react-query";

import styles from "./users.module.scss";
import { UsersTableMobile } from "pages/users/components/users-table/views/mobile/users-table-mobile";
import { useEffect, useState } from "react";
import { User } from "services/models/responses/user/user-model";
import { UserService } from "services/user-service";
import { Pagination } from "pages/users/components/pagination/pagination";

export const Users = () => {
  const isTabletOrMobile = useMediaQuery("( max-width: 768px )");

  const [numberOfRows, setNumberOfRows] = useState<number>(10);
  // const [pageCount, setPageCount] = useState<number>(0);
  // const [filtering, setFiltering] = useState<boolean>(false);
  const [displayedUsers, setDisplayedUsers] = useState<User[]>();

  const { isLoading, data } = useQuery(
    ["users"],
    () => UserService.getUsers(),
    {
      onSuccess: (data) => {
        setDisplayedUsers(() => data?.slice(0, numberOfRows));
        // setPageCount(Math.ceil(data.length / 10));
      },
    }
  );

  useEffect(() => {
    if (data) {
      setDisplayedUsers(() => data?.slice(0, numberOfRows));
    }
  }, [data, numberOfRows]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Users</h1>

      <Categories />

      {isTabletOrMobile ? (
        <UsersTableMobile loading={isLoading} users={displayedUsers} />
      ) : (
        <UsersTableWeb loading={isLoading} users={displayedUsers} />
      )}

      {data && (
        <Pagination
          users={data}
          numberOfRows={numberOfRows}
          setNumberOfRows={setNumberOfRows}
          setDisplayedUsers={setDisplayedUsers}
        />
      )}
    </div>
  );
};
