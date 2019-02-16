import React, { memo } from "react";
import "./styles.scss";

interface SquareProps {
  num: number | "NONE";
  onSelect: () => void;
}

const Square = ({ num, onSelect }: SquareProps) => {
  const isEmpty = num === "NONE";
  return (
    <div
      className={`square ${isEmpty && "empty"}`}
      onClick={onSelect}
    >
      {isEmpty ? null : num}
    </div>
  );
};

export default memo(Square);
