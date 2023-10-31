import React, { useState } from 'react';




export default function Toolbar({ turn, hit, stay, chips, score, play, betScreen, placeBet }) {


    return (
        <div id="toolbar">
            <div id="chipSection">
                <div className="chipDisplay">Chips:</div>
                <div className="chipDisplay">${chips}</div>
            </div>
            <div id="buttonSection">


                {betScreen &&
                    <div id="betForm">
                        <h3>Bet:</h3>
                        <input id="bet" type="text"></input>
                        <button> Play</button>
                    </div>

                }


                {score < 21 && turn &&

                    <div>
                        <button onClick={hit}>Hit</button>
                        <button onClick={() => stay(score)}>Stay</button>
                    </div>
                }
                {score === 21 && turn &&

                    <button onClick={() => stay(score)}>Stay</button>
                }

                {score > 21 && turn &&

                    <button>Bust</button>
                }
            </div>

            <div id="rightSection"></div>


        </div>
    )




}