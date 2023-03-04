import logo from "assets/icons/logo.svg";
import lendsqr from "assets/images/lendsqr.png";
import dropdown from "assets/icons/chevron-down.svg";
import briefcase from "assets/icons/briefcase.svg";
import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.logo__container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className="lendsqr">
          <img src={lendsqr} alt="Lendsqr" />
        </div>
      </div>

      <button className={styles.switch}>
        <span>
          <img src={briefcase} alt="Briefcase" />
        </span>
        <span className={styles.switch__text}>Switch Organization</span>
        <span>
          <img src={dropdown} alt="Dropdown" />
        </span>
      </button>

      <div className={styles.links}></div>
    </aside>
  );
};
