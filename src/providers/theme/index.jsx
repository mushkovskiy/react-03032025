import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
