import React from "react";
import _ from "lodash";
import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form";
import { User } from "services/models/responses/user/user-model";
import styles from "./filter-popover.module.scss";
import { PrimaryButton } from "components/common/primary-button/primary-button";
import { SecondaryButton } from "components/common/secondary-button/secondary-button";

interface FilterPopoverProps {
  filtering: boolean;
  displayedUsers: User[] | undefined;
  setFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayedUsers: React.Dispatch<React.SetStateAction<User[] | undefined>>;
}
interface FormInputProps {
  email: string;
  username: string;
  organization: string;
  date: string;
  phoneNumber: string;
  status: string;
}
interface MyRegisterOptions {
  email: RegisterOptions;
  username: RegisterOptions;
  organization: RegisterOptions;
  date: RegisterOptions;
  phoneNumber: RegisterOptions;
  status: RegisterOptions;
}
const registerOptions: MyRegisterOptions = {
  email: {},
  username: {},
  organization: {},
  date: {},
  phoneNumber: {},
  status: {},
};

//filterObjectSchema

export const FilterPopover = ({
  displayedUsers,
  setFiltering,
  setDisplayedUsers,
}: FilterPopoverProps) => {
  const {
    register,
    handleSubmit,
    reset,
    // formState,
  } = useForm<FormInputProps>();

  // const onFilter = (data: FormInputProps) => {
  //   console.log(data);
  //   const filteredData = _.filter(displayedUsers, {
  //     userName: data.username,
  //     email: data.email,
  //   });
  //   setDisplayedUsers(filteredData);
  // };

  const onSubmit: SubmitHandler<FormInputProps> = (data) => {
    for (let key in data) {
      if (!data[key as keyof typeof data]) {
        delete data[key as keyof typeof data];
      }
    }
    // onFilter(data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.popover}>
      <div className={styles.field__wrapper}>
        <label htmlFor="organization">Organization</label>
        <select
          defaultValue="Lendsqr"
          {...register("organization", registerOptions.organization)}
        >
          <option value="Select" disabled>
            Select
          </option>
          <option value="Lendsqr">Lendsqr</option>
          <option value="Irorun">Irorun</option>
        </select>
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="User"
          {...register("username", registerOptions.username)}
        />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email", registerOptions.email)}
        />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          placeholder="Date"
          {...register("date", registerOptions.date)}
        />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          {...register("phoneNumber", registerOptions.phoneNumber)}
        />
      </div>

      <div className={styles.field__wrapper}>
        <label htmlFor="status">Status</label>
        <select
          defaultValue="Pending"
          {...register("status", registerOptions.status)}
        >
          <option value="Pending">Pending</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Blacklisted">Blacklisted</option>
        </select>
      </div>

      <div className={styles.footer}>
        <SecondaryButton width="45%" type="reset" onClick={() => reset()}>
          Reset
        </SecondaryButton>
        <PrimaryButton width="45%" type="submit">
          Filter
        </PrimaryButton>
      </div>
    </form>
  );
};
