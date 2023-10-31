import React, { useState } from 'react';
import Card from './Card.jsx';


export default function Dealer({ hand, turn, total, hit }) {

    let handDisplay;

    if (turn) {

        handDisplay = [
            <Card image={'url("./Images/cardback.png")'} />,
            <Card image={hand[1].image} />

        ]
    }


    if (!turn) {
        handDisplay = hand.map(card => <Card image={card.image} />)
        setTimeout(() => hit(total(hand)), 1000)
    }




    return (
        <div id="dealerSection">
            <div className="hand">
                {[handDisplay]}
            </div>
            <h3>{!turn ? total(hand) : "-"}</h3>
        </div>

    )
}