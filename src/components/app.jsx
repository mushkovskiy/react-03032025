import { Layout } from "./layout";
import { RestaurantPage } from "./restaurant-page";
import "./app.css";
import { ThemeProvider } from "../providers/theme";
import { AuthProvider } from "../providers/auth";
import { Provider } from "react-redux";
import { store } from "../store";
export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <Layout>
            <RestaurantPage />
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
