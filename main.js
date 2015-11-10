var header1 = React.createElement('h1', null, 'Simon');

ReactDOM.render(header1, document.getElementById('header'));


var Board = React.createClass({

  getInitialState: function() {
    var state = {};
    for (var i = 0; i < 16; i++) {
      state[i] = colors[Math.floor(Math.random() * colors.length)];
    }
    return state;
  },

  update: function() {
    for (var i = 0; i < 16; i++) {
      this.state[i] = colors[Math.floor(Math.random() * colors.length)];
    }
    this.setState(this.state);
  },

  render: function() {
    var boxes = [];
    for (var i = 0; i < 16; i++) {
      boxes[i] = React.createElement('div', { className: 'box', style: { background: this.state[i] } });
    }
    var button = React.createElement('button', { className: 'btn', onClick: this.update }, 'New Colors!');
    return React.createElement('div', { id: 'board' }, button, [boxes]);
  }
});

ReactDOM.render(React.createElement(Board), document.getElementById('content'));