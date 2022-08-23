import { useState } from "react";
import Board from "./components/Board";
import MatchHistory from "./components/MatchHistory";
import isWinner from "./Helpers/isWinner";
import "./App.css";

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), idx: 0, moveAddress: [null, null] },
  ]);
  const [currLayoutVersion, setCurrLayoutVersion] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const squares = history[currLayoutVersion].squares.slice();
    if (
      isWinner(squares) ||
      squares[i] ||
      currLayoutVersion < history.length - 1 ||
      history[history.length - 1].idx !== currLayoutVersion
    )
      return;

    squares[i] = xIsNext ? "X" : "O";
    const col = (i + 1) % 3 ? (i + 1) % 3 : 3;
    const row = Math.ceil((i + 1) / 3);
    setHistory([
      ...history,
      { squares: squares, idx: history.length, moveAddress: [col, row] },
    ]);
    setCurrLayoutVersion(history.length); /* the not yet updated history */
    setXIsNext(!xIsNext);
  }

  function jumpTo(layoutIdx) {
    setCurrLayoutVersion(layoutIdx);
    setXIsNext(layoutIdx % 2 === 0);
  }

  function reverseHistory() {
    setCurrLayoutVersion(history[1].idx);
    setHistory([history[0], ...history.splice(1).reverse()]);
  }

  const winner = isWinner(
    history.find((layout) => layout.idx === history.length - 1).squares
  );
  const status = winner
    ? `${winner.symbol} wins`
    : history.length === 10
    ? "Draw"
    : `${xIsNext ? "X" : "O"} moves`;

  return (
    <main className="App">
      <h1>Tic-tac-toe</h1>
      <Board
        squares={
          history.find((layout) => layout.idx === currLayoutVersion).squares
        }
        onClick={(i) => handleClick(i)}
        winningLine={winner.winningLine}
      />
      <p>{status}</p>

      {history.length > 1 && (
        <button
          onClick={() => {
            setHistory([...history.splice(0, 1)]);
            setCurrLayoutVersion(0);
          }}
        >
          {winner || history.length === 10 ? "New Match" : "Restart Match"}
        </button>
      )}
      <MatchHistory
        history={history}
        onClick={(layoutIdx) => jumpTo(layoutIdx)}
        reverse={() => reverseHistory()}
      />
    </main>
  );
}

export default App;
