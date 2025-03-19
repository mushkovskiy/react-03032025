import { useEffect, useState } from "react";

export const useScrollProgress = (ref) => {
  const [scrolledDistancePersentage, setScrolledDistancePercentage] =
    useState(0);

  const getScrollPercentage = () => {
    const containerBottom = ref.current.getBoundingClientRect().bottom;

    const viewportHeight = window.innerHeight;

    const totalScrollableDistance =
      ref.current.getBoundingClientRect().height - viewportHeight;

    const scrolledDistance =
      totalScrollableDistance - (containerBottom - viewportHeight);

    let scrollProgress = (scrolledDistance / totalScrollableDistance) * 100;

    scrollProgress = Math.min(Math.max(scrollProgress, 0), 100);
    setScrolledDistancePercentage(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPercentage);
    return () => {
      window.removeEventListener("scroll", getScrollPercentage);
    };
  }, []);

  return {
    scrolledDistancePersentage,
  };
};
