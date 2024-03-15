import { ReactNode } from "react";
import styles from "./Tile.module.css";

/**
 * Not technically needed, just to make the demo look better.
 */
export function Tile({ children }: { children: ReactNode }) {
  return <div className={styles.tile}>{children}</div>;
}
