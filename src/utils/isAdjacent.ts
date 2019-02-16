import { IBoard } from "../types/board";

const isFirstRow = (index: number) => index < 4;
const isLastRow = (index: number) => index >= 12;
const isFirstColumn = (index: number) => index % 4 === 0;
const isLastColumn = (index: number) => index % 4 === 3;
const isTopLeft = (index: number) => isFirstRow(index) && isFirstColumn(index);
const isTopRight = (index: number) => isFirstRow(index) && isLastColumn(index);
const isBottomLeft = (index: number) => isLastRow(index) && isFirstColumn(index);
const isBottomRight = (index: number) => isLastRow(index) && isLastColumn(index);

const isAdjacent = (board: IBoard, index: number) => {
  const emptyIndex = board.findIndex((el) => el === "NONE");
  if (isTopLeft(emptyIndex)) {
    return index === emptyIndex + 1 || index === emptyIndex + 4;
  } else if (isTopRight(emptyIndex)) {
    return index === emptyIndex - 1 || index === emptyIndex + 4;
  } else if (isBottomLeft(emptyIndex)) {
    return index === emptyIndex + 1 || index === emptyIndex - 4;
  } else if (isBottomRight(emptyIndex)) {
    return index === emptyIndex - 1 || index === emptyIndex - 4;
  } else if (isFirstRow(emptyIndex)) {
    return index === emptyIndex - 1 || index === emptyIndex + 1 || index === emptyIndex + 4;
  } else if (isLastRow(emptyIndex)) {
    return index === emptyIndex - 1 || index === emptyIndex + 1 || index === emptyIndex - 4;
  } else if (isFirstColumn(emptyIndex)) {
    return index === emptyIndex + 1 || index === emptyIndex - 4 || index === emptyIndex + 4;
  } else if (isLastColumn(emptyIndex)) {
    return index === emptyIndex - 1 || index === emptyIndex - 4 || index === emptyIndex + 4;
  } else {
    return index === emptyIndex - 1 || index === emptyIndex + 1 || index === emptyIndex - 4 || index === emptyIndex + 4;
  }
};

export default isAdjacent;
