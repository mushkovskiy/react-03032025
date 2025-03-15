import { Tab } from "../tab";

export const TabList = ({ items, activeItemId, setActiveItemId }) => {
  return (
    <ul style={{ display: "flex", gap: "10px" }}>
      {items.map(({ name, id }) => (
        <li key={id}>
          <Tab
            title={name}
            onClick={() => setActiveItemId(id)}
            isActive={id === activeItemId}
          />
        </li>
      ))}
    </ul>
  );
};
