import logo from "assets/icons/logo.svg";
import lendsqr from "assets/images/lendsqr.png";
import dropdown from "assets/icons/chevron-down.svg";
import home from "assets/icons/home.svg";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { CustomerSubNav } from "components/layout/sidebar/subnav-links/customer-subnav";
import { BriefcaseIcon } from "assets/icons/briefcase";
import { BusinessSubNav } from "components/layout/sidebar/subnav-links/business-subnav";

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
          <BriefcaseIcon />
        </span>
        <span className={styles.switch__text}>Switch Organization</span>
        <span>
          <img src={dropdown} alt="Dropdown" />
        </span>
      </button>

      <div className={styles.links}>
        <Link to="/" className={styles.nav__link}>
          <span className={styles.nav__link_icon}>
            <img src={home} alt="Home" />
          </span>
          <span className={styles.nav__link_text}>Dashboard</span>
        </Link>

        <div>
          <div className={styles.nav__sub_header}>
            <span>CUSTOMERS</span>
          </div>
          {CustomerSubNav.map(({ name, icon }, index) => (
            <Link
              to="/"
              className={`${styles.nav__link} ${styles.sub__nav}`}
              key={index}
            >
              <span className={styles.nav__link_icon} title={name}>
                {icon}
              </span>
              <span className={styles.nav__link_text}>{name}</span>
            </Link>
          ))}
        </div>

        <div>
          <div className={styles.nav__sub_header}>
            <span>BUSINESSES</span>
          </div>
          {BusinessSubNav.map(({ name, icon }, index) => (
            <Link
              to="/"
              className={`${styles.nav__link} ${styles.sub__nav}`}
              key={index}
            >
              <span className={styles.nav__link_icon} title={name}>
                {icon}
              </span>
              <span className={styles.nav__link_text}>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};
