import styles from "./socials.module.scss";
import { GeneralDetailsProps } from "pages/user/components/general-details/general-details";

export const Socials = ({ details }: GeneralDetailsProps) => {
  return (
    <section className={styles.row}>
      <h4>Socials</h4>

      <div className={styles.details}>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>TWITTER</span>
            <span className={styles.value}>{details?.socials.twitter}</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>FACEBOOK</span>
            <span className={styles.value}>{details?.socials.facebook}</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>INSTAGRAM</span>
            <span className={styles.value}>{details?.socials.instagram}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
