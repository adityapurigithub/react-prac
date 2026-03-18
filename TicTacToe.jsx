import React from "react";

const TicTacToe = () => {
  const [player, setPlayer] = React.useState("X");
  const [squares, setSquares] = React.useState(Array(9).fill(null)); //empty array of 9 squares

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

  const isWon = () => {
    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return alert(`Won :${squares[a]}`);
      }
    }
    return null;
  };

  const handleSqClick = (id) => {
    if (isWon()) {
      return;
    }

    if (squares[id]) return; //if the square is already clicked, return

    const updatedSq = [...squares];
    updatedSq[id] = player;

    setSquares(updatedSq);

    setPlayer(player === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setPlayer("X");
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="border grid grid-cols-3 my-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            className="border p-4 h-16 w-16 flex alich-center justify-center"
            key={index}
            onClick={() => handleSqClick(index)}
          >
            {squares[index]}
          </div>
        ))}
      </div>
      <button
        className="p-2 px-4 rounded bg-black text-white dark:bg-white dark:text-black"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
