import { Layout } from "./layout";
import { RestaurantPage } from "./restaurant-page";
import "./app.css";
import { ThemeProvider } from "../providers/theme";
import { AuthProvider } from "../providers/auth";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../pages/home-page";
import { RestaurantsPage } from "../pages/restaurants-page";
import { Restaurant } from "./restaurant";
import { MenuList } from "./menu-list";
import { ReviewList } from "./review-list";
import { Dish } from "./dish";
export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />}>
                  <Route path=":id" element={<Restaurant />}>
                    <Route path="menu" element={<MenuList />} />
                    <Route path="reviews" element={<ReviewList />} />
                  </Route>
                  <Route path="dish/:id" element={<Dish />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </Provider>
  );
};
