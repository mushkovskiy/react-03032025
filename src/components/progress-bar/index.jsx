import { useScrollProgress } from "../../hooks/use-scroll-progress";

export const ProgressBar = ({ ref }) => {
  const { scrolledDistancePersentage } = useScrollProgress(ref);

  return (
    <div
      style={{
        top: "0",
        left: "0",
        position: "fixed",
        height: "4px",
        background: "red",
        width: `${scrolledDistancePersentage}%`,
      }}
    />
  );
};
