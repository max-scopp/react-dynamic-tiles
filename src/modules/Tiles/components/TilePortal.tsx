import { useEffect, useRef } from "react";
import { ROOT_TILE_CONTAINER } from "../helpers/ROOT_TILE_CONTAINER";
import { tileContainerSelector } from "../helpers/tileContainerSelector";

export function TilePortal({ tileId }: { tileId: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById(tileContainerSelector(tileId));

    if (!container) {
      console.warn(`Cannot find tile container with tileId: ${tileId}`);
      return;
    }

    ref.current?.appendChild(container);

    return () => {
      // when unmount - meaning the tile portal is no longer needed,
      // place the portal container element back into the hidden collection of containers.
      ROOT_TILE_CONTAINER.append(container);
    };
  });

  return (
    <>
      <div ref={ref} />
    </>
  );
}
