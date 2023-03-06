import { useState } from "react";
import previous from "assets/icons/go-back.svg";
import avatar from "assets/icons/avatar.svg";
import filled_star from "assets/icons/filled-star.svg";
import empty_star from "assets/icons/empty-star.svg";
import styles from "./user.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "services/user-service";
import { User } from "services/models/responses/user/user-model";
import { GeneralDetails } from "pages/user/components/general-details/general-details";

export const UserDetails = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const userDetails = localStorage.getItem(`user_${id}`);
  //   if (userDetails) {
  //     setUser(JSON.parse(userDetails));
  //   } else {
  //     setUser(undefined);
  //   }
  // }, [id]);

  console.log(user);

  const { isLoading, data } = useQuery(
    ["user", id],
    () => UserService.getUser(id as string),
    {
      // enabled: !!user,
      onSuccess: (data) => {
        setUser(data);
        console.log(data);
        localStorage.setItem(`user_${id}`, JSON.stringify(data));
      },
    }
  );

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <button
          className={styles.back__button}
          onClick={() => navigate("/users")}
        >
          <img src={previous} alt="Left arrow" />
          <span>Back to Users</span>
        </button>

        <div className={styles.header__bottom}>
          <h1 className={styles.h1}>User Details</h1>

          <div>
            <button className={styles.blacklist}>BLACKLIST USER</button>
            <button className={styles.activate}>ACTIVATE USER</button>
          </div>
        </div>
      </section>

      <section className={styles.overview}>
        <section className={styles.overview__meta}>
          <div className={styles.user__info}>
            <div className={styles.avatar}>
              <img src={data?.profile.avatar || avatar} alt="User avatar" />
            </div>

            <div className={styles.name__block}>
              <h3 className={styles.h2}>
                {data?.profile.firstName} {data?.profile.lastName}
              </h3>
              <span>LSQFf587g90</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.tier__block}>
            <span>User's Tier</span>

            <div className={styles.stars}>
              <img src={filled_star} alt="Filled star" />
              <img src={empty_star} alt="Empty star" />
              <img src={empty_star} alt="Empty star" />
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.account__block}>
            <span className={styles.amount}>₦200,000.00</span>
            <span className={styles.bank__details}>
              9912345678/Providus Bank
            </span>
          </div>
        </section>

        <section className={styles.tabs}>
          <button className={styles.active}>
            <span>General Details</span>
          </button>

          <button>
            <span>Documents</span>
          </button>

          <button>
            <span>Bank Details</span>
          </button>

          <button>
            <span>Loans </span>
          </button>

          <button>
            <span>Savings </span>
          </button>

          <button>
            <span>App and System</span>
          </button>
        </section>
      </section>

      <GeneralDetails details={user} />
    </section>
  );
};
