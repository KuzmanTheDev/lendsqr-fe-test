import styles from "./guarantor.module.scss";
import { GeneralDetailsProps } from "pages/user/components/general-details/general-details";

export const Guarantor = ({ details }: GeneralDetailsProps) => {
  return (
    <section className={styles.row}>
      <h4>Guarantor</h4>

      <div className={styles.details}>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>FULL NAME</span>
            <span className={styles.value}>
              {details?.guarantor.firstName} {details?.guarantor.lastName}
            </span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>PHONE NUMBER</span>
            <span className={styles.value}>
              {details?.guarantor.phoneNumber}
            </span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>EMAIL ADDRESS</span>
            <span className={styles.value}>debby@gmail.com</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>RELATIONSHIP</span>
            <span className={styles.value}>Sister</span>
          </div>
        </div>
      </div>
    </section>
  );
};
