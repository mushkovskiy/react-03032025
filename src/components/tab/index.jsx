import { use } from "react";
import { Button } from "../button";
import { ThemeContext } from "../../providers/theme";

export const Tab = ({ title, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {title}
    </Button>
  );
};
