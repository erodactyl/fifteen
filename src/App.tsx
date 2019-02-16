import React, { useState } from "react";
import { Board } from "./components";

const App = () => {
  const [id, setId] = useState(Math.random());
  const [won, setWon] = useState(false);
  const showWin = () => {
    setWon(true);
  };
  const resetBoard = () => {
    setId(Math.random);
    setWon(false);
  };
  return (
    <>
      <Board key={id} showWin={showWin} />
      {won && "YOU WON! CONGRATS!"}
      <button onClick={resetBoard}>Reset board</button>
    </>
  );
};

export default App;
