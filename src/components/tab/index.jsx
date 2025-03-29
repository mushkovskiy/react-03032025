import { use } from "react";
import { Button } from "../button";
import { ThemeContext } from "../../providers/theme";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button disabled={isActive} onClick={onClick}>
      {title}
    </Button>
  );
};
