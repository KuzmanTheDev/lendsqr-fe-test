import { useCallback, useMemo } from "react";
import "./status-badge.scss";

type statusTypes = "active" | "blacklisted" | "inactive" | "pending";

const status: statusTypes[] = ["active", "blacklisted", "inactive", "pending"];

export const StatusBadge = () => {
  const generateRandomStatus = useCallback(() => {
    return status[Math.floor(Math.random() * status.length)];
  }, []);

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const currentStatus = useMemo(
    () => generateRandomStatus(),
    [generateRandomStatus]
  );

  return (
    <div className={`badge ${currentStatus}`}>
      <span>{capitalize(currentStatus)}</span>
    </div>
  );
};
