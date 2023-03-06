import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import view from "assets/icons/view.svg";
import activate from "assets/images/blacklist-user.png";
import blacklist from "assets/images/activate-user.png";
import styles from "./action-menu.module.scss";

interface ActionMenuProps {
  id: string;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const ActionMenu = ({ id, onClose }: ActionMenuProps) => {
  return (
    <div className={styles.menu}>
      <Link to={`/users/${id}`} className={styles.menu__item}>
        <span>
          <img src={view} alt="View" />
        </span>
        View Details
      </Link>

      <button
        className={styles.menu__item}
        onClick={() => onClose((prev) => !prev)}
      >
        <span>
          <img src={blacklist} alt="Blacklist user" />
        </span>
        Blacklist User{" "}
      </button>

      <button
        className={styles.menu__item}
        onClick={() => onClose((prev) => !prev)}
      >
        <span>
          <img src={activate} alt="Activate user" />
        </span>
        Activate User
      </button>
    </div>
  );
};
