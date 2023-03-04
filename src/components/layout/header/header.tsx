import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import search from "assets/icons/search.svg";
import notification from "assets/icons/Vector.svg";
import dropdown from "assets/icons/dropdown.svg";
import avatar from "assets/images/avatar.png";

export const Header = () => {
  return (
    <header className={styles.header}>
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

        <div className={styles.notification}>
          <img src={notification} alt="Notification" />
        </div>

        <div className={styles.user}>
          <img src={avatar} alt="Avatar" />

          <div className={styles.user__name}>
            <span>Ayodeji</span>
          </div>

          <button className={styles.dropdown}>
            <img src={dropdown} alt="Dropdown" />
          </button>
        </div>
      </div>
    </header>
  );
};
