// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Board(props) {
  let className = "board";
  if (props.selected) {
    className += " selected";
  }

  return <div className={className}>{props.index + 1}</div>;
}

function BoardSwitcher(props) {
  // Use state to track the currently selected board
  const [selectedBoard, setSelectedBoard] = useState(0);

  // Function to handle toggle button click
  const handleToggle = () => {
    setSelectedBoard((prevBoard) => (prevBoard + 1) % props.numBoards);
  };

  let boards = [];
  for (let ii = 0; ii < props.numBoards; ii++) {
    let isSelected = ii === selectedBoard; // Updated to use state for selected board
    boards.push(<Board index={ii} selected={isSelected} key={ii} />);
  }

  return (
    <div>
      <div className="boards">{boards}</div>
      <button onClick={handleToggle}>Toggle</button> {/* Add onClick to toggle button */}
    </div>
  );
}

export default BoardSwitcher;
