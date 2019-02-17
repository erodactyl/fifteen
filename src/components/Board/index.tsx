import React, { useState } from "react";
import { isAdjacent } from "../../utils";
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
        board.map((square, index) => {
          const isSelectable = !disabled && isAdjacent(board, index);
          return (
            <Square
              key={square}
              num={square}
              onSelect={() => {
                if (isSelectable && square !== "NONE") {
                  select(square);
                }
              }}
              selectable={isSelectable}
            />
          );
        }
        )
      }
    </div>
  );
};

export default Board;
