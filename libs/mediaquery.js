// Cara Pakai :
// 1. export useMediaQuery
// 2. const isTablet = useMediaQuery("(min-width: 768px)");
import { useState, useEffect } from "react";

const tabletSize = "(min-width: 768px)";

export const isTablet = () => {
  return useMediaQuery(tabletSize);
};

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
