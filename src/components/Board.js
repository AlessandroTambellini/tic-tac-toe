import "./Board.css";

function Board({ squares, onClick, winningLine }) {
  return (
    <div id="board">
      <section id="row-indexes">
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </section>
      <div id="grid">
        {squares.map((square, idx) => {
          return (
            <button
              key={idx}
              className={`square ${winningLine?.includes(idx) && "light-blue"}`}
              onClick={() => onClick(idx)}
            >
              {square}
            </button>
          );
        })}
      </div>
      <section id="col-indexes">
        <span>a</span>
        <span>b</span>
        <span>c</span>
      </section>
    </div>
  );
}

export default Board;
