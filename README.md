# Dynamic React Tiles

Dynamic React Tiles is a lightweight template designed for building complex dashboards in React with ease. By leveraging React portals, it offers a straightforward approach to preserving component state without the need for external state management libraries.

## Features

- **Efficient State Preservation:** With the use of React portals, Dynamic React Tiles efficiently preserves component state, minimizing unnecessary render cycles.
- **Simplified Dashboard Implementation:** Build intricate dashboards effortlessly with a clean and minimalistic codebase.
- **Flexibility:** Easily customize and extend the template to suit your project requirements.

## Usage

1. Clone this repository.
2. Install dependencies using `pnpm install`.
3. Start the development server with `pnpm run dev`.
4. Explore the magic!

## Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { TileProvider } from "./TileProvider";
import { Counter } from "./Counter";
import TilesContent from "./TilesContent";

function App() {
  const tiles = ['tile1', 'tile2'];

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

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

## Feedback and Contributions

Feedback and contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
