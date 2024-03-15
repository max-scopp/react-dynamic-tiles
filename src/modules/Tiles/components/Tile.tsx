import { ReactNode } from "react";

export function Tile({ children }: { children: ReactNode }) {
    return <div style={{ padding: "10px", background: "red", margin: "10px" }}>{children}</div>
}