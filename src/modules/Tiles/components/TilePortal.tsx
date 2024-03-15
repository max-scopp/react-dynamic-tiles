import { useEffect, useRef } from "react";
import { tileContainerSelector } from "../helpers/tileContainerSelector";
import { ROOT_TILE_CONTAINER } from "./TileProvider";

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
      ROOT_TILE_CONTAINER.append(container);
    };
  });

  return (
    <>
      <div ref={ref} />
    </>
  );
}
