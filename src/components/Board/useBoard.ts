import { useEffect, useState } from "react";
import { IBoard } from "../../types/board";
import { destructureLast, isStrictlyIncreasing, randomize, swap, isAdjacent } from "../../utils";

const randomizeBoard = (): IBoard => {
  const ordered = new Array(16).fill(null).map((_, idx) => idx === 0 ? "NONE" : idx);
  const randomBoard = randomize(ordered);
  return randomBoard;
};

const useBoard = (onWin: () => void): [IBoard, (value: number) => void] => {
  const [board, setBoard] = useState(randomizeBoard);
  useEffect(() => {
    const [head, last] = destructureLast(board);
    if (last === "NONE" && isStrictlyIncreasing(head as number[])) {
      onWin();
    }
  }, [board]);
  const changePlaces = (value: number): void => {
    const valueIndex = board.findIndex((val) => val === value);
    if (isAdjacent(board, valueIndex)) {
      const emptyIndex = board.findIndex((val) => val === "NONE");
      setBoard(swap(board, emptyIndex, valueIndex));
    }
  };
  return [board, changePlaces];
};

export default useBoard;
