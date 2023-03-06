import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

interface ScrollToTopProps {
  children: React.ReactNode;
}

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [navType, pathname]);
  return <>{children}</>;
};
