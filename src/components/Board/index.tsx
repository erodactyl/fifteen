import React, { useState } from "react";
import Square from "../Square";
import "./styles.scss";
import useBoard from "./useBoard";

interface BoardProps {
  showWin: () => void;
}

const Board = ({ showWin }: BoardProps) => {
  const [disabled, setDisabled] = useState(false);
  const onWin = () => {
    showWin();
    setDisabled(true);
  };
  const [board, swap] = useBoard(onWin);
  const select = (selected: number) => {
    swap(selected);
  };
  return (
    <div className="board">
      {
        board.map((square) =>
          <Square
            key={square}
            num={square}
            onSelect={() => {
              if (!disabled && square !== "NONE") {
                select(square);
              }
            }}
          />
        )
      }
    </div>
  );
};

export default Board;
