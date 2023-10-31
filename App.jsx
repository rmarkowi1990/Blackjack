import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Player from './Components/Player.jsx';
import Deck from './Components/Deck.jsx';
import Card from './Components/Card.jsx';
import Dealer from './Components/Dealer.jsx';
import Toolbar from './Components/Toolbar.jsx';



function App() {

  const shuffled = new Deck();

  const [deck, setDeck] = useState(shuffled);

  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [turn, setTurn] = useState(true);
  const [play, setPlay] = useState(false);
  const [betScreen, setBetScreen] = useState(false)
  const [playerScore, setPlayerScore] = useState(0);
  const [chips, setChips] = useState(1000)
  const [bet, setBet] = useState(0)



  function deal() {

    if (deck.length < 10) {
      const reshuffle = new Deck();
      setDeck(reshuffle);
    }

    setPlayerHand([deck[0], deck[2]]);
    setDealerHand([deck[1], deck[3]]);
    setDeck([...deck].slice(4));
    // setPlayerScore(total(playerHand))


    setPlay(true);

  }

  function placeBet(betAmount) {
    setBet(betAmount)
    setChips(chips => chips - betAmount)
  }




  useEffect(() => {
    setPlayerScore(total(playerHand))
  }
    , [playerHand])




  console.log("playerscore:" + playerScore)

  function playerHit() {
    setPlayerHand([...playerHand, deck[0]]);
    setDeck([...deck].slice(1));

  }

  function playerStay(score) {
    setPlayerScore(score)
    setTurn(false)
  }

  function dealerHit(score) {
    console.log("total: " + score + "player: " + playerScore)
    if (score <= playerScore) {
      setDealerHand([...dealerHand, deck[0]]);
      setDeck([...deck].slice(1));
    } else {
      setBetScreen(true)
    }

  }


  function betHandler() {
    setBetScreen((betScreen) => !betScreen)
  }




  function total(arr) {

    let total = 0;
    let aces = 0;
    const totals = [];

    function recurse(totalNum, acesNum) {
      if (acesNum <= 0) {
        totals.push(totalNum)
      } else {
        recurse(totalNum + 1, acesNum - 1);
        recurse(totalNum + 11, acesNum - 1);

      }
    }

    for (let i in arr) {
      if (arr[i].number === "A") {
        aces++;
      } else {
        total += arr[i].number;
      }
    }
    if (aces === 0) {
      return total;
    }

    else {

      recurse(total, aces);
      const largestUnder = totals.filter(num => num <= 21);

      if (largestUnder.length > 0) {
        return largestUnder[largestUnder.length - 1];
      } else {
        return totals[0];
      }

    }

  }






  return (
    <div id={screen}>
      {!play && <button id="deal" onClick={deal}>Deal</button>}
      {play && <div id="board">
        <Dealer hand={dealerHand} total={total} turn={turn} hit={dealerHit} bet={betHandler} />
        <div id="pot">
          <div className="chipDisplay">Pot</div>
          <div className="chipDisplay">${bet}</div>
        </div>
        <Player hand={playerHand} hit={playerHit} stay={playerStay} total={total} turn={turn} score={playerScore} />
        <Toolbar turn={turn} hit={playerHit} stay={playerStay} chips={chips} score={playerScore} play={play} betScreen={betScreen} placeBet={placeBet} />
      </div>

      }
    </div >

  );
}


const root = createRoot(document.getElementById('content'));
root.render(<App />);




// ## Challenges
// Have a look at `main.jsx`. Notice how an `<h2>` tag is created using jsx syntax. We pass it a React property, or prop, called "id", which we set to "colorHeader". It is placed in the DOM with `ReactDOM.render`. We can create a new type of React component by defining a JavaScript function. Notice the `Board` component we're creating. The return value of this function is what our component will look like when it's rendered. Let's use this to create a 4x4 board. 
// - [ ] In the `Board` function, create 16 new React elements and add them to the `boxes` array. These elements should be `<div>` tags with the class `box` and have no children. 
// - [ ] Then render the `boxes` array by adding them as children to the `div#board`. Don't worry about the CSS styling for the grid, it is already written in the `box` class. It should look like this:![grid](./docs/assets/images/grid.png)

// Now let's give those boxes some color. 
// - [ ] In addition to the `box` class, give each `div.box` another prop: `style`. This will be an `object` with key value pairs that are CSS properties and values. Use it to make each box have a red background. 
// - [ ] We want these to be different colors, so let's take a different approach now. Within the Board component, we can use a special function, `useState`. This function runs when we render our Board component, and allows us to define and update its initial "state". Initialize the state variable `boxColors` as an object with keys 0-15, and assign their values to the first 16 strings in the `colors` array, which is an array of CSS colors. This array has already been defined in the `colors.js` file. It is global so you can access it in here. Then, when you create your boxes, instead of "red", give them a color from this `state`. The first box should be the color at index 0, the second should be the color at index 1, the third at index 2, etc.![color1](./docs/assets/images/color1.png)

// Now let's make this appear different every time the page is loaded. 
// - [ ] Go back to the `useState` call. Instead of the first 16 colors in the array, assign the keys to **random** elements from the `colors` array. Every time you refresh the page, the colors should all be different. 
// - [ ] Finally, let's enable the "New Colors!" button. Within the board component, create a handler function called `update`. (This function is not recognized by React in any special way.) Now, on the button component, add another prop called `onClick`, and give it your new `update` function. `onClick` is a special prop that React recognizes. It runs the given function when that component is clicked. 
// - [ ] Verify that your `update` handler gets called when the button is clicked. 
// - [ ] Finally, within `update`, use `setBoxColors`, the setter returned from `useState`, to change the colors in the state to new random colors. When done right, the `Board` function is automatically called again and your board will change! Click the button a few times and make sure it works.
