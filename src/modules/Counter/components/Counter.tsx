import { useState } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>Add</button>
      <span>{count}</span>
      <button onClick={() => setCount((oldCount) => oldCount - 1)}>
        Remove
      </button>
    </div>
  );
}
