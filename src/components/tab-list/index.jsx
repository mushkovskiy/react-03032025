import { Tab } from "../tab";

export const TabList = ({ children }) => {
  return <ul style={{ display: "flex", gap: "10px" }}>{children}</ul>;
};
