export const ROOT_TILE_CONTAINER = document.createElement("div");
ROOT_TILE_CONTAINER.style.display = "none";
ROOT_TILE_CONTAINER.dataset.tilePortalContainer = "";

// add this container before any react code ever ran.
document.body.append(ROOT_TILE_CONTAINER);

// when changing modules, cleanup the old container before replacing.
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    ROOT_TILE_CONTAINER.remove();
  });
}
