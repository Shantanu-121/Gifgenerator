import "./App.css";
import { Random } from "./components/random";
import { Tag } from "./components/tag";
function App() {
  return (
    <div className="App">
      <h1>RANDOM GIFS</h1>
      <Random />
      <Tag />
    </div>
  );
}

export default App;
