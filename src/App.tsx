import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import "./App.css";
import { Counter } from "./modules/Counter/components/Counter";
import { TilePortal } from "./modules/Tiles/components/TilePortal";
import { TileProvider } from "./modules/Tiles/components/TileProvider";

const TilesContent: React.FC = () => {
  const [didMoved, setDidMoved] = useState(false);
  return (
    <>
      <button onClick={() => setDidMoved((oldMove) => !oldMove)}>
        Do the swap
      </button>
      <h2>BeforeMoved</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
        {!didMoved ? <TilePortal tileId="tile1" /> : null}
      </div>

      <h2>AfterMoved kept state</h2>
      <div>{didMoved ? <TilePortal tileId="tile1" /> : null}</div>
    </>
  );
};

function App() {
  const [tiles] = useLocalStorage<string[]>("tileStorage", ["tile1", "tile2"]);

  return (
    <div>
      <h1>Dynamic React Tiles</h1>
      <TileProvider
        tiles={tiles}
        elements={{ tile1: <Counter />, tile2: <p>Tile 2</p> }}
      >
        <TilesContent />
      </TileProvider>
    </div>
  );
}

export default App;
