import React, { useState } from 'react';
import Card from './Card.jsx';


export default function Player({ hand, hit, stay, turn, total }) {

    const handDisplay = hand.map(card => <Card image={card.image} />)







    return (
        <div id="playerSection">
            <div className="hand">
                {handDisplay}

            </div>
            <h3>{total(hand)}</h3>

            {total(hand) < 21 && turn &&
                <div id="buttonSection">
                    <button onClick={hit}>Hit</button>
                    <button onClick={() => stay(total(hand))}>Stay</button>
                </div>}

            {total(hand) === 21 && turn &&
                <div id="buttonSection">
                    <button onClick={() => stay(total(hand))}>Stay</button>
                </div>}

            {total(hand) > 21 && turn &&
                <div id="buttonSection">
                    <button>Bust</button>
                </div>}
        </div>

    )







}