import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { ROOT_TILE_CONTAINER } from "../helpers/ROOT_TILE_CONTAINER";
import { tileContainerSelector } from "../helpers/tileContainerSelector";

type TileProviderProps = {
  children: ReactNode;
  tiles: string[];
  elements: {
    [key: string]: ReactNode;
  };
};

export function TileProvider({ children, elements, tiles }: TileProviderProps) {
  // not too clean, but also don't really care.
  ROOT_TILE_CONTAINER.innerHTML = "";

  // we need to before the elements before the render has been committed to react,
  // so the portal containers can be found.
  tiles.forEach((tileId) => {
    const container = document.createElement("div");

    container.id = tileContainerSelector(tileId);

    ROOT_TILE_CONTAINER.append(container);
  });

  const portals = tiles.map((tileId) =>
    createPortal(
      elements[tileId],
      document.getElementById(tileContainerSelector(tileId))!,
    ),
  );

  return (
    <>
      {children}
      {portals}
    </>
  );
}
