import { use } from "react";
import { ThemeContext } from "../../providers/theme";
import { Button } from "../button";

export const ToggleThemeButton = () => {
  const { toggleTheme } = use(ThemeContext);

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};
