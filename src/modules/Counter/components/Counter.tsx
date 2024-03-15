import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Add</button>
      <span>{count}</span>
      <button onClick={() => setCount((oldCount) => oldCount - 1)}>
        Remove
      </button>
    </div>
  );
}
