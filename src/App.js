import { useState } from "react";
import Board from "./components/Board";
import MatchHistory from "./components/MatchHistory";
import isWinner from "./Helpers/isWinner";
import "./App.css";

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), moveAddress: [null, null] },
  ]);
  const [currLayoutVersion, setCurrLayoutVersion] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const squares = history[currLayoutVersion].squares.slice();
    if (isWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";

    const col = (i + 1) % 3 ? (i + 1) % 3 : 3;
    const row = Math.ceil((i + 1) / 3);
    setHistory([...history, { squares: squares, moveAddress: [col, row] }]);
    setCurrLayoutVersion(history.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(layoutIdx) {
    setCurrLayoutVersion(layoutIdx);
    setXIsNext(layoutIdx % 2 === 0);
  }

  const winner = isWinner(history[currLayoutVersion].squares);
  const status = winner ? `${winner} wins` : `${xIsNext ? "X" : "O"} moves`;

  return (
    <main className="App">
      <h1>Tic-tac-toe</h1>
      <Board
        squares={history[currLayoutVersion].squares}
        onClick={(i) => handleClick(i)}
      />
      <p>{status}</p>
      <MatchHistory
        history={history}
        onClick={(layoutIdx) => jumpTo(layoutIdx)}
      />
    </main>
  );
}

export default App;
