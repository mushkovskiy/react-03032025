export const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        top: "0",
        left: "0",
        position: "fixed",
        height: "4px",
        background: "red",
        width: `${progress}%`,
      }}
    ></div>
  );
};
