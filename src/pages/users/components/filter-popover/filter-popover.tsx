import React from "react";
import { User } from "services/models/responses/user/user-model";
import styles from "./filter-popover.module.scss";
import { PrimaryButton } from "components/common/primary-button/primary-button";
import { SecondaryButton } from "components/common/secondary-button/secondary-button";

interface FilterPopoverProps {
  // filtering: boolean;
  setFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  data: User[] | undefined;
}

export const FilterPopover = ({ data, setFiltering }: FilterPopoverProps) => {
  return (
    <div className={styles.popover}>
      <div className={styles.field__wrapper}>
        <label htmlFor="organization">Organization</label>
        <select name="oragnization" defaultValue="Select">
          <option value="Select" disabled>
            Select
          </option>
          <option value="volvo">Volvo</option>
        </select>
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="User" />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" placeholder="Date" />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" name="phoneNumber" placeholder="Phone Number" />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="status">Status</label>
        <select name="status">
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className={styles.footer}>
        <SecondaryButton width="45%">Reset</SecondaryButton>
        <PrimaryButton width="45%" onClick={() => setFiltering(false)}>
          Filter
        </PrimaryButton>
      </div>
    </div>
  );
};
