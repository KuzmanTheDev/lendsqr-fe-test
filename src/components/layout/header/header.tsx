import { Link } from "react-router-dom";
import logo from "assets/icons/logo.svg";
import lendsqr from "assets/images/lendsqr.png";
import styles from "./header.module.scss";
import search from "assets/icons/search.svg";
import notification from "assets/images/notification-bell.png";
import dropdown from "assets/icons/dropdown.svg";
import avatar from "assets/images/avatar.png";
import { useMediaQuery } from "hooks/useMediaQuery";

export const Header = () => {
  const isMobile = useMediaQuery("( max-width: 450px )");

  return (
    <header className={styles.header}>
      {isMobile && (
        <div className={styles.logo__container}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>

          <div className={styles.lendsqr}>
            <img src={lendsqr} alt="Lendsqr" />
          </div>
        </div>
      )}

      <div className={styles.header__left}>
        <div className={styles.search__input_wrapper}>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search for anything"
          />
          <button>
            <img src={search} alt="Search" />
          </button>
        </div>
      </div>

      <div className={styles.header__right}>
        <Link to="/">
          <span className={styles.docs__link}>Docs</span>
        </Link>

        <div className={styles.notification__wrapper}>
          <div className={styles.notification}>
            <img src={notification} alt="Notification" />
          </div>

          <div className={styles.user}>
            <img src={avatar} alt="Avatar" />

            <div className={styles.user__name}>
              <span>Ayodeji</span>
            </div>
          </div>

          <button className={styles.dropdown}>
            <img src={dropdown} alt="Dropdown" />
          </button>
        </div>
      </div>
    </header>
  );
};
