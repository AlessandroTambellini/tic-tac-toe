import Move from "./Move";
import "./MatchHistory.css";

function MatchHistory({ history, onClick }) {
  return (
    <article className="match-info">
      <h2>Match History</h2>
      <ol className="history-list">
        {history.map(({ squares, moveAddress }, idx) => {
          const desc = idx ? "Go to move #" + idx : "Go to game start";
          const letter =
            moveAddress[0] === 1 ? "a" : moveAddress[0] === 2 ? "b" : "c";
          return (
            <Move
              key={idx}
              idx={idx}
              onClick={() => onClick(idx)}
              info={{ desc, col: letter, row: moveAddress[1] }}
            />
          );
        })}
      </ol>
    </article>
  );
}

export default MatchHistory;
