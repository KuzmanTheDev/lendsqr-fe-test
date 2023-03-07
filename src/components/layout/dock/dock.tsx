import { UserFriendsIcon } from "assets/icons/user-friends";
import styles from "./dock.module.scss";
import { UsersIcon } from "assets/icons/users";
import { SackIcon } from "assets/icons/sack";
import more from "assets/icons/more-dot-grid.svg";
import { MoreGridIcon } from "assets/icons/more-dot-grid";

interface DockItem {
  name: string;
  icon: JSX.Element | string;
}

const DockItems: DockItem[] = [
  {
    name: "Users",
    icon: UserFriendsIcon(),
  },
  {
    name: "Guarantors",
    icon: UsersIcon(),
  },
  {
    name: "Loans",
    icon: SackIcon(),
  },
  {
    name: "More",
    icon: MoreGridIcon(),
  },
];

export const Dock = () => {
  return (
    <div className={styles.container}>
      {DockItems.map((item, index) => (
        <div className={styles.items} key={index}>
          <div className={styles.item__icon}>{item.icon}</div>
          <div className={styles.item__text}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};
