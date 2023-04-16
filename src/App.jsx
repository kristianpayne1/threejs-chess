import { useEffect, useState } from "react";
import Game from "./Game";
import Menu from "./Menu";
import MainMenu from "./MainMenu";

const App = () => {
  const [isPlaying, setIsPlaying] = useState();

  useEffect(() => {
    if (window.sessionStorage.getItem("fen")) setIsPlaying(true);
  }, []);

  return isPlaying ? (
    <Game setIsPlaying={setIsPlaying} />
  ) : (
    <Menu>
      <MainMenu startGame={() => setIsPlaying(true)} />
    </Menu>
  );
};

export default App;
