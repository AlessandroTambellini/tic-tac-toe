import Move from "./Move";
import "./MatchHistory.css";

function MatchHistory({ history, onClick, reverse }) {
  return (
    <article className="match-info">
      <h2>Match History</h2>
      <button onClick={() => reverse()}>&uarr;&darr;</button>
      <ol className="history-list">
        {history.map(({ squares, idx, moveAddress }) => {
          const desc = idx ? "Go to move #" + idx : "Go to game start";
          const col =
            moveAddress[0] === 1 ? "a" : moveAddress[0] === 2 ? "b" : "c";
          return (
            <Move
              key={idx}
              idx={idx}
              onClick={() => onClick(idx)}
              info={{ desc, col, row: moveAddress[1] }}
            />
          );
        })}
      </ol>
    </article>
  );
}

export default MatchHistory;
