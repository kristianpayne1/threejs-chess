import { useState } from "react";
import Game from "./Game";
import Menu from "./Menu";

const App = () => {
  const [isPlaying, setIsPlaying] = useState();
  return isPlaying ? <Game /> : <Menu startGame={() => setIsPlaying(true)} />;
};

export default App;
