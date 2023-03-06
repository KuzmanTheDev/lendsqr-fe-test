import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    if (matchQueryList.matches !== matches) {
      setMatches(matchQueryList.matches);
    }

    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }

    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [matches, query]);

  return matches;
}

// export function useMediaQuery(query: string): boolean {
//   const getMatches = (query: string): boolean => {
//     // Prevents SSR issues
//     if (typeof window !== "undefined") {
//       return window.matchMedia(query).matches;
//     }
//     return false;
//   };

//   const [matches, setMatches] = useState<boolean>(getMatches(query));

//   const handleChange = useCallback(() => {
//     setMatches(getMatches(query));
//   }, [query]);

//   useEffect(() => {
//     const matchMedia = window.matchMedia(query);

//     // Triggered at the first client-side load and if query changes
//     handleChange();

//     // Listen matchMedia
//     matchMedia.addEventListener("change", handleChange);

//     // Unlisten matchMedia
//     return () => {
//       matchMedia.removeEventListener("change", handleChange);
//     };
//   }, [handleChange, query]);

//   return matches;
// }

// export function useMediaQuery(query: string) {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const mql = window.matchMedia(query);
//     if (mql.matches !== matches) {
//       setMatches(mql.matches);
//     }

//     const listener = () => {
//       setMatches(mql.matches);
//     };

//     window.addEventListener("change", listener);

//     return () => window.removeEventListener("change", listener);
//   }, [matches, query]);

//   return matches;
// }
