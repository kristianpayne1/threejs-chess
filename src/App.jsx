import { useEffect, useState } from "react";
import Game from "./Game";
import Menu from "./Menu";

const App = () => {
  const [isPlaying, setIsPlaying] = useState();

  useEffect(() => {
    if (window.sessionStorage.getItem("fen")) setIsPlaying(true);
  }, []);

  return isPlaying ? (
    <Game setIsPlaying={setIsPlaying} />
  ) : (
    <Menu startGame={() => setIsPlaying(true)} />
  );
};

export default App;
