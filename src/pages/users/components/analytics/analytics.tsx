import { Data } from "pages/users/components/analytics/data";
import styles from "./analytics.module.scss";

export const Analytics = () => {
  return (
    <div className={styles.analytics}>
      {Data.map(({ title, value, icon }, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.card__icon}>
            <img src={icon} alt={title} />
          </div>

          <div className={styles.card__title}>
            <span>{title}</span>
          </div>

          <div className={styles.card__value}>
            <span>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
