import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

console.log(colors);

const colorHeader = <h2 id="colorHead">Color Changer!</h2>;
const header = createRoot(document.getElementById('header'));
header.render(colorHeader);

const Board = () => {
  const [colors, setColors] = useState();

  // notice we can render all of the tags in the array boxes by writing {boxes}.
  // Any code appearing between curly braces in jsx will be evaluated as javascript.
  // This allows us to do things like: <div id={myVar}>Example!</div>
  const boxes = [];
  return (
    <div id="board">
      <button className="btn">New Colors!</button>
      {boxes}
    </div>
  );
}

const root = createRoot(document.getElementById('content'));
root.render(<Board />);
