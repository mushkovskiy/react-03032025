import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");

createRoot(root).render(
  <StrictMode>
    {restaurants.map(({ name, menu, reviews }) => (
      <div>
        <h1>{name}</h1>
        <h3>Меню</h3>
        <ul>
          {menu.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {reviews.map(({ text }) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    ))}
  </StrictMode>
);
