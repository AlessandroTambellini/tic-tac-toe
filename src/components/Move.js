function Move({ idx, onClick, clicked, info }) {
  return (
    <li>
      {idx > 0 && `[${info.col + info.row}] `}
      <button onClick={() => onClick()}>{info.desc}</button>
      {clicked === idx && "displayed version"}
    </li>
  );
}

export default Move;
