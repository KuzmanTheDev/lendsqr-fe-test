import { HandWithSackIcon } from "assets/icons/hand-with-sack";
import { HandshakeIcon } from "assets/icons/handshake";
import { SavingsIcon } from "assets/icons/piggy-bank";
import { SackIcon } from "assets/icons/sack";
import { UserCheckIcon } from "assets/icons/user-check";
import { UserFriendsIcon } from "assets/icons/user-friends";
import { UserTimesIcon } from "assets/icons/user-times";
import { UsersIcon } from "assets/icons/users";

export interface SubNavLinkProps {
  name: string;
  icon: JSX.Element;
}

export const CustomerSubNav: SubNavLinkProps[] = [
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
    name: "Decision Models",
    icon: HandshakeIcon(),
  },
  {
    name: "Savings",
    icon: SavingsIcon(),
  },
  {
    name: "Loan Request",
    icon: HandWithSackIcon(),
  },
  {
    name: "Whitelist",
    icon: UserCheckIcon(),
  },
  {
    name: "Karma",
    icon: UserTimesIcon(),
  },
];
