import { Link } from "react-router-dom";
import view from "assets/icons/view.svg";
import activate from "assets/images/blacklist-user.png";
import blacklist from "assets/images/activate-user.png";
import styles from "./action-menu.module.scss";

interface ActionMenuProps {
  id: string;
}

export const ActionMenu = ({ id }: ActionMenuProps) => {
  return (
    <div className={styles.menu}>
      <Link to={`/user/${id}`} className={styles.menu__item}>
        <span>
          <img src={view} alt="View" />
        </span>
        View Details
      </Link>

      <div className={styles.menu__item}>
        <span>
          <img src={blacklist} alt="Blacklist user" />
        </span>
        Blacklist User{" "}
      </div>

      <div className={styles.menu__item}>
        <span>
          <img src={activate} alt="Activate user" />
        </span>
        Activate User
      </div>
    </div>
  );
};
