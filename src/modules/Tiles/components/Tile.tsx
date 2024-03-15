import { ReactNode } from "react";

/**
 * Not technically needed, just to make the demo look better.
 */
export function Tile({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: "10px", background: "red", margin: "10px" }}>
      {children}
    </div>
  );
}
