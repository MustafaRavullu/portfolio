import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: TSectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActive, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);

  return { ref };
}
