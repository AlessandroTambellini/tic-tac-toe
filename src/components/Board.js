import "./Board.css";

function Board({ squares, onClick }) {
  return (
    <div id="board">
      <section id="row-indexes">
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </section>
      <div id="grid">
        <section className="board-row">
          {" "}
          <button className="square" onClick={() => onClick(6)}>
            {squares[6]}
          </button>
          <button className="square" onClick={() => onClick(7)}>
            {squares[7]}
          </button>
          <button className="square" onClick={() => onClick(8)}>
            {squares[8]}
          </button>
        </section>
        <section className="board-row">
          {" "}
          <button className="square" onClick={() => onClick(3)}>
            {squares[3]}
          </button>
          <button className="square" onClick={() => onClick(4)}>
            {squares[4]}
          </button>
          <button className="square" onClick={() => onClick(5)}>
            {squares[5]}
          </button>
        </section>
        <section className="board-row">
          <button className="square" onClick={() => onClick(0)}>
            {squares[0]}
          </button>
          <button className="square" onClick={() => onClick(1)}>
            {squares[1]}
          </button>
          <button className="square" onClick={() => onClick(2)}>
            {squares[2]}
          </button>
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
