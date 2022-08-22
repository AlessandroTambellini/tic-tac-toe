/* import { useState } from "react";
 */
function Move({ idx, onClick, info }) {
  /* const [clicked, setClicked] = useState(false); */
  return (
    <li>
      {idx > 0 && `[${info.col + info.row}] `}
      <button
        onClick={() => {
          onClick();
          //setClicked(!clicked);
        }}
      >
        {info.desc}
      </button>
      {/* {clicked && "displayed version"} */}
    </li>
  );
}

export default Move;
