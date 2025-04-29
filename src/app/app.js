import { AuthProvider } from "../providers/auth";
import { ReduxProvider } from "../providers/redux";
import { ThemeProvider } from "../providers/theme";

export const App = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
