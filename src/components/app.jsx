import { Layout } from "./layout";
import { RestaurantPage } from "./restaurant-page";
import "./app.css";
import { ThemeProvider } from "../providers/theme";
import { AuthProvider } from "../providers/auth";
export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
};
