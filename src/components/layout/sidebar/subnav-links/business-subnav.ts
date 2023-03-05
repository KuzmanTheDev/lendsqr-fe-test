import { BankIcon } from "assets/icons/bank";
import { BriefcaseIcon } from "assets/icons/briefcase";
import { ChartBarIcon } from "assets/icons/chart-bar";
import { CoinSolidIcon } from "assets/icons/coins-solid";
import { HandWithSackIcon } from "assets/icons/hand-with-sack";
import { ScrollIcon } from "assets/icons/scroll";
import { ServicesIcon } from "assets/icons/services";
import { TransactionsIcon } from "assets/icons/transactions";
import { UserCogIcon } from "assets/icons/user-cog";
import { SubNavLinkProps } from "components/layout/sidebar/subnav-links/customer-subnav";

export const BusinessSubNav: SubNavLinkProps[] = [
  {
    name: "Organizations",
    icon: BriefcaseIcon(),
  },
  {
    name: "Loan Products",
    icon: HandWithSackIcon(),
  },
  {
    name: "Savings Products",
    icon: BankIcon(),
  },
  {
    name: "Fees and Charges",
    icon: CoinSolidIcon(),
  },
  {
    name: "Transactions",
    icon: TransactionsIcon(),
  },
  {
    name: "Services",
    icon: ServicesIcon(),
  },
  {
    name: "Service Account",
    icon: UserCogIcon(),
  },
  {
    name: "Settlements",
    icon: ScrollIcon(),
  },
  {
    name: "Reports",
    icon: ChartBarIcon(),
  },
];
