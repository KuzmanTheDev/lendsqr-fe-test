import styles from "./education.module.scss";
import { GeneralDetailsProps } from "pages/user/components/general-details/general-details";

export const Education = ({ details }: GeneralDetailsProps) => {
  return (
    <section className={styles.row}>
      <h4>Education and Employment</h4>

      <div className={styles.details}>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>LEVEL OF EDUCATION</span>
            <span className={styles.value}>{details?.education.level}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>OFFICE EMAIL</span>
            <span className={styles.value}>{details?.email}</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>EMPLOYMENT</span>
            <span className={styles.value}>
              {details?.education.employmentStatus}
            </span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>MONTHLY INCOME</span>
            <span className={styles.value}>
              {details?.education.monthlyIncome[0]}
              {details?.education.monthlyIncome[1]}
            </span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>SECTOR OF EMPLOYMENT</span>
            <span className={styles.value}>{details?.education.sector}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>LOAN REPAYMENT</span>
            <span className={styles.value}>
              {details?.education.loanRepayment}
            </span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>DURATION OF EMPLOYMENT</span>
            <span className={styles.value}>{details?.education.duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
