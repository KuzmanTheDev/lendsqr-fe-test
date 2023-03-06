import { GeneralDetailsProps } from "pages/user/components/general-details/general-details";
import styles from "./personal-information.module.scss";

export const PersonalInformation = ({ details }: GeneralDetailsProps) => {
  return (
    <section className={styles.row}>
      <h4>Personal Information</h4>

      <div className={styles.details}>
        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>FULL NAME</span>
            <span className={styles.value}>
              {details?.profile.firstName} {details?.profile.lastName}
            </span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>MARITAL STATUS</span>
            <span className={styles.value}>Single</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>PHONE NUMBER</span>
            <span className={styles.value}>{details?.profile.phoneNumber}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>CHILDREN</span>
            <span className={styles.value}>None</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>EMAIL</span>
            <span className={styles.value}>{details?.email}</span>
          </div>

          <div className={styles.detail}>
            <span className={styles.label}>TYPE OF RESIDENCE</span>
            <span className={styles.value}>Parent’s Apartment</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>BVN</span>
            <span className={styles.value}>{details?.profile.bvn}</span>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.detail}>
            <span className={styles.label}>GENDER</span>
            <span className={styles.value}>{details?.profile.gender}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
