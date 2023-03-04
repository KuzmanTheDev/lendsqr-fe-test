import { LoginForm } from "pages/login/components/login-form/login-form";
import pablo from "assets/images/pablo.jpg";
import lendsqr from "assets/images/lendsqr.png";
import logo from "assets/icons/logo.svg";
import styles from "./login.module.scss";

export const LogIn = () => {
  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Lendsqr Logo" />
        </div>

        <div className="lendsqr">
          <img src={lendsqr} alt="Lendsqr" />
        </div>
      </section>

      <section className={styles.main__content}>
        <section className={styles.pablo}>
          <img src={pablo} alt="Pablo" />
        </section>

        <section className={styles.form}>
          <LoginForm />
        </section>
      </section>
    </main>
  );
};
