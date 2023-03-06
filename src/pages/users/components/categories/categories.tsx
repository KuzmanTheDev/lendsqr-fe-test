import { Data } from "pages/users/components/categories/data";
import styles from "./categories.module.scss";

export const Categories = () => {
  return (
    <div className={styles.categories}>
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
