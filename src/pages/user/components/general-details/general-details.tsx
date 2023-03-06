import { User } from "services/models/responses/user/user-model";
import styles from "./general-details.module.scss";
import { PersonalInformation } from "pages/user/components/general-details/personal-information/personal-information";
import { Education } from "pages/user/components/general-details/education/education";
import { Socials } from "pages/user/components/general-details/socials/socials";
import { Guarantor } from "pages/user/components/general-details/guarantor/guarantor";

export interface GeneralDetailsProps {
  details: User | undefined;
}

export const GeneralDetails = ({ details }: GeneralDetailsProps) => {
  return (
    <section className={styles.container}>
      <PersonalInformation details={details} />

      <Education details={details} />

      <Socials details={details} />

      <Guarantor details={details} />
    </section>
  );
};
