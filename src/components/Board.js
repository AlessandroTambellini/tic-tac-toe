import Square from "./Square";
import "./Board.css";

function Board({ squares, onClick }) {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div id="board">
      <section id="row-indexes">
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </section>
      <div id="grid">
        <section className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </section>
        <section className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </section>
        <section className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </section>
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
