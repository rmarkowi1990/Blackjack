import React from 'react';
import ReactDOM from 'react-dom';
import colors from './colors';

console.log(colors);

const colorHeader = <h2 id="colorHead">Color Changer!</h2>;
ReactDOM.render(colorHeader, document.getElementById('header'));

class Board extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
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
}

ReactDOM.render(<Board />, document.getElementById('content'));
