import { NavLink } from "react-router-dom";
import logo from "assets/icons/logo.svg";
import lendsqr from "assets/images/lendsqr.png";
import dropdown from "assets/icons/chevron-down.svg";
import signout from "assets/icons/sign-out.svg";
import home from "assets/icons/home.svg";
import styles from "./sidebar.module.scss";
import { CustomerSubNav } from "components/layout/sidebar/subnav-links/customer-subnav";
import { BriefcaseIcon } from "assets/icons/briefcase";
import { BusinessSubNav } from "components/layout/sidebar/subnav-links/business-subnav";
import { SettingsSubNav } from "components/layout/sidebar/subnav-links/settings-subnav";

export const Sidebar = () => {
  return (
    <aside role="navigation" className={styles.aside}>
      <div className={styles.logo__container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles.lendsqr}>
          <img src={lendsqr} alt="Lendsqr" />
        </div>
      </div>

      <button className={styles.switch}>
        <span>
          <BriefcaseIcon />
        </span>

        <span className={styles.switch__text}>Switch Organization</span>

        <span className={styles.switch__dropdown}>
          <img src={dropdown} alt="Dropdown" />
        </span>
      </button>

      <div className={styles.links}>
        <NavLink to="/" className={styles.nav__link}>
          <span className={styles.nav__link_icon}>
            <img src={home} alt="Home" />
          </span>
          <span className={styles.nav__link_text}>Dashboard</span>
        </NavLink>

        <div>
          <div className={styles.nav__sub_header}>
            <span>CUSTOMERS</span>
          </div>

          {CustomerSubNav.map(({ name, icon }, index) => (
            <NavLink to="/" className={styles.nav__link_wrapper} key={index}>
              {name === "Users" && <div className={styles.nav__link_flag} />}

              <div
                className={`${styles.nav__link} ${
                  name === "Users" && styles.active
                }`}
              >
                <span className={`${styles.nav__link_icon}`} title={name}>
                  {icon}
                </span>
                <span className={styles.nav__link_text}>{name}</span>
              </div>
            </NavLink>
          ))}
        </div>

        <div>
          <div className={styles.nav__sub_header}>
            <span>BUSINESSES</span>
          </div>

          {BusinessSubNav.map(({ name, icon }, index) => (
            <NavLink to="/" className={styles.nav__link_wrapper} key={index}>
              <div className={styles.nav__link}>
                <span className={styles.nav__link_icon} title={name}>
                  {icon}
                </span>
                <span className={styles.nav__link_text}>{name}</span>
              </div>
            </NavLink>
          ))}
        </div>

        <div>
          <div className={styles.nav__sub_header}>
            <span>SETTINGS</span>
          </div>

          {SettingsSubNav.map(({ name, icon }, index) => (
            <NavLink to="/" className={styles.nav__link_wrapper} key={index}>
              <div className={styles.nav__link}>
                <span className={styles.nav__link_icon} title={name}>
                  {icon}
                </span>
                <span className={styles.nav__link_text}>{name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <div className={styles.signout}>
        <button>
          <span className={styles.signout__icon}>
            <img src={signout} alt="Exit" />
          </span>
          <span className={styles.signout__text}>Logout</span>
        </button>

        <span className={styles.version}>v1.2.0</span>
      </div>
    </aside>
  );
};
