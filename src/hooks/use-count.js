import { useCallback, useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;
export const useCount = () => {
  const [count, setCount] = useState(0);

  const onIncrement = useCallback(
    () => setCount((prev) => (prev < 5 ? ++prev : MAX_COUNT)),
    []
  );
  const onDecrement = useCallback(
    () => setCount((prev) => (prev > 0 ? --prev : MIN_COUNT)),
    []
  );

  return {
    count,
    onIncrement,
    onDecrement,
  };
};
