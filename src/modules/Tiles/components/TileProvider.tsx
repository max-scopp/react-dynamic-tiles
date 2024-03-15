import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";
import { TileContext } from "../contexts/TileContext";
import { tileContainerSelector } from "../helpers/tileContainerSelector";

type TileProviderProps = {
  children: ReactNode;
  tiles: string[];
  elements: {
    [key: string]: ReactNode;
  };
};

document.querySelector(`[data-tile-portal-container]`)?.remove();
export const ROOT_TILE_CONTAINER = document.createElement("div");
ROOT_TILE_CONTAINER.style.display = "none";
ROOT_TILE_CONTAINER.dataset.tilePortalContainer = "";
document.body.append(ROOT_TILE_CONTAINER);

export function TileProvider({ children, elements, tiles }: TileProviderProps) {
  const tileContainers = useMemo(() => {
    ROOT_TILE_CONTAINER.innerHTML = "";
    return tiles.reduce((previous, tileId) => {
      const container = document.createElement("div");
      container.id = tileContainerSelector(tileId);
      ROOT_TILE_CONTAINER.append(container);
      return { ...previous, [tileId]: container };
    }, {});
  }, [tiles]);

  const portals = tiles.map((tileId) =>
    createPortal(
      elements[tileId],
      document.getElementById(tileContainerSelector(tileId))!,
    ),
  );

  return (
    <TileContext.Provider
      value={{
        elements,
        tiles,
        tileContainers: tileContainers as any,
      }}
    >
      {children}
      {portals}
    </TileContext.Provider>
  );
}
