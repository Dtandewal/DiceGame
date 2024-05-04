import styled from "styled-components";
import StartGames from "./components/StartGames";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGames toggle={toggleGamePlay} />}</>
  );
}

export default App;
