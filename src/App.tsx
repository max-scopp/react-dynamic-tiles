import { useLocalStorage } from "usehooks-ts";
import { Counter } from "./modules/Counter/components/Counter";
import { Tile } from "./modules/Tiles/components/Tile";
import { TilePortal } from "./modules/Tiles/components/TilePortal";
import { TileProvider } from "./modules/Tiles/components/TileProvider";

const TilesContent: React.FC = () => {
  // where and how the tiles are managed is up to you.
  const [didMoved, setDidMoved] = useLocalStorage("didSwap", false);

  return (
    <>
      <button onClick={() => setDidMoved((oldMove) => !oldMove)}>
        Do the swap
      </button>
      <h2>BeforeMoved</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, auto)",
          gap: "10px",
        }}
      >
        {!didMoved ? <TilePortal tileId="tile1" /> : null}
        <TilePortal tileId="tile3" />
      </div>

      <h2>AfterMoved kept state</h2>
      <div>{didMoved ? <TilePortal tileId="tile1" /> : null}</div>
    </>
  );
};

function App() {
  const [tiles] = useLocalStorage<string[]>("tileStorage", [
    "tile1",
    "tile2",
    "tile3",
  ]);

  return (
    <div>
      <h1>Dynamic React Tiles</h1>
      <TileProvider
        tiles={tiles}
        elements={{
          tile1: (
            <Tile>
              <Counter />
            </Tile>
          ),
          tile2: <Tile>Second Tile</Tile>,
          tile3: (
            <Tile>
              <b>Third Tile</b>
              <Counter />
            </Tile>
          ),
        }}
      >
        <TilesContent />
      </TileProvider>
    </div>
  );
}

export default App;
