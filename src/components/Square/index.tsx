import React, { memo } from "react";
import "./styles.scss";

interface SquareProps {
  num: number | "NONE";
  onSelect: () => void;
  selectable: boolean;
}

const Square = ({ num, onSelect, selectable }: SquareProps) => {
  const isEmpty = num === "NONE";
  const className = `square ${isEmpty && "empty"} ${selectable && "selectable"}`;
  return (
    <div
      className={className}
      onClick={onSelect}
    >
      {isEmpty ? null : num}
    </div>
  );
};

export default memo(Square);
