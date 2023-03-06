import { BadgePercentIcon } from "assets/icons/badge-percent";
import { ClipBoardIcon } from "assets/icons/clipboard-list";
import { SlidersIcon } from "assets/icons/sliders";
import { LogsIcon } from "assets/icons/tire";

export interface SubNavLinkProps {
  name: string;
  icon: JSX.Element;
}

export const CustomerSubNav: SubNavLinkProps[] = [
  {
    name: "Preferences",
    icon: SlidersIcon(),
  },
  {
    name: "Fees and Pricing",
    icon: BadgePercentIcon(),
  },
  {
    name: "Audit Logs",
    icon: ClipBoardIcon(),
  },
  {
    name: "System Messages",
    icon: LogsIcon(),
  },
];
