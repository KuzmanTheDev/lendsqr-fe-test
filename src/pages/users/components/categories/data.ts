import users from "assets/icons/users-data.svg";
import active_users from "assets/icons/active-users.svg";
import loans from "assets/icons/users-loans.svg";
import savings from "assets/icons/users-savings.svg";

interface CardData {
  icon: string;
  title: string;
  value: string;
}

export const Data: CardData[] = [
  {
    icon: users,
    title: "USERS",
    value: "2,453",
  },
  {
    icon: active_users,
    title: "ACTIVE USERS",
    value: "1,453",
  },
  {
    icon: loans,
    title: "USERS WITH LOANS",
    value: "12,453",
  },
  {
    icon: savings,
    title: "USERS WITH SAVINGS",
    value: "2,453",
  },
];
