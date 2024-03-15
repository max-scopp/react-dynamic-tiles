import { ReactNode, createContext } from "react";

export type TileState = {
  elements: { [key: string]: ReactNode };
  tileContainers: HTMLDivElement[];
  tiles: string[];
};

export const TileContext = createContext<TileState>(null!);
