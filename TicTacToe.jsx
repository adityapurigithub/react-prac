import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  let winPattern = [
    [0, 1, 2], // row
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // column
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonal
    [2, 4, 6],
  ];

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setPlayer("X");
  };
  const checkWin = () => {
    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        console.log(winPattern[i]);

        alert(`${squares[a]} wins`);
        handleReset();
      }
    }
  };

  const handleSqClick = (id) => {
    if (squares[id]) return; //cliced same square

    const squaresCopy = [...squares];
    squaresCopy[id] = player;
    setSquares(squaresCopy); //update the array position with current player
    setPlayer(player === "X" ? "O" : "X");

    checkWin();
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="grid grid-cols-3">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            className="p-5 px-6 border h-16 w-16"
            onClick={() => handleSqClick(index)}
          >
            {squares[index]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
