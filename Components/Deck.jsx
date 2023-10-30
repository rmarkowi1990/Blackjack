import React, { useState } from 'react';

export default function Deck() {

    this.deck = [

        {
            title: "2 of Clubs",
            number: 2,
            suit: "Clubs",
            image: 'url("./Images/2_of_clubs.png")'
        }, {
            title: "2 of Diamonds",
            number: 2,
            suit: "Diamonds",
            image: 'url("./Images/2_of_diamonds.png")',
        },
        {
            title: "2 of Hearts",
            number: 2,
            suit: "Hearts",
            image: 'url("./Images/2_of_hearts.png")',
        },
        {
            title: "2 of Spades",
            number: 2,
            suit: "Spades",
            image: 'url("./Images/2_of_spades.png")',
        },
        {
            title: "3 of Clubs",
            number: 3,
            suit: "Clubs",
            image: 'url("./Images/3_of_clubs.png")'
        }, {
            title: "3 of Diamonds",
            number: 3,
            suit: "Diamonds",
            image: 'url("./Images/3_of_diamonds.png")',
        },
        {
            title: "3 of Hearts",
            number: 3,
            suit: "Hearts",
            image: 'url("./Images/3_of_hearts.png")',
        },
        {
            title: "4 of Spades",
            number: 4,
            suit: "Spades",
            image: 'url("./Images/4_of_spades.png")',
        },
        {
            title: "4 of Clubs",
            number: 4,
            suit: "Clubs",
            image: 'url("./Images/4_of_clubs.png")'
        }, {
            title: "4 of Diamonds",
            number: 4,
            suit: "Diamonds",
            image: 'url("./Images/4_of_diamonds.png")',
        },
        {
            title: "4 of Hearts",
            number: 4,
            suit: "Hearts",
            image: 'url("./Images/4_of_hearts.png")',
        },

        {
            title: "4 of Spades",
            number: 4,
            suit: "Spades",
            image: 'url("./Images/4_of_spades.png")',
        },
        {
            title: "5 of Clubs",
            number: 5,
            suit: "Clubs",
            image: 'url("./Images/5_of_clubs.png")'
        }, {
            title: "5 of Diamonds",
            number: 5,
            suit: "Diamonds",
            image: 'url("./Images/5_of_diamonds.png")',
        },
        {
            title: "5 of Hearts",
            number: 5,
            suit: "Hearts",
            image: 'url("./Images/5_of_hearts.png")',
        },
        {
            title: "5 of Spades",
            number: 5,
            suit: "Spades",
            image: 'url("./Images/5_of_spades.png")',
        },
        {
            title: "6 of Clubs",
            number: 6,
            suit: "Clubs",
            image: 'url("./Images/6_of_clubs.png")'
        }, {
            title: "6 of Diamonds",
            number: 6,
            suit: "Diamonds",
            image: 'url("./Images/6_of_diamonds.png")',
        },
        {
            title: "6 of Hearts",
            number: 6,
            suit: "Hearts",
            image: 'url("./Images/6_of_hearts.png")',
        },
        {
            title: "6 of Spades",
            number: 6,
            suit: "Spades",
            image: 'url("./Images/6_of_spades.png")',
        },
        {
            title: "7 of Clubs",
            number: 7,
            suit: "Clubs",
            image: 'url("./Images/7_of_clubs.png")'
        }, {
            title: "7 of Diamonds",
            number: 7,
            suit: "Diamonds",
            image: 'url("./Images/7_of_diamonds.png")',
        },
        {
            title: "7 of Hearts",
            number: 7,
            suit: "Hearts",
            image: 'url("./Images/7_of_hearts.png")',
        },
        {
            title: "7 of Spades",
            number: 7,
            suit: "Spades",
            image: 'url("./Images/7_of_spades.png")',
        },
        {
            title: "8 of Clubs",
            number: 8,
            suit: "Clubs",
            image: 'url("./Images/8_of_clubs.png")'
        }, {
            title: "8 of Diamonds",
            number: 8,
            suit: "Diamonds",
            image: 'url("./Images/8_of_diamonds.png")',
        },
        {
            title: "8 of Hearts",
            number: 8,
            suit: "Hearts",
            image: 'url("./Images/8_of_hearts.png")',
        },
        {
            title: "8 of Spades",
            number: 8,
            suit: "Spades",
            image: 'url("./Images/8_of_spades.png")',
        },
        {
            title: "9 of Clubs",
            number: 9,
            suit: "Clubs",
            image: 'url("./Images/9_of_clubs.png")'
        }, {
            title: "9 of Diamonds",
            number: 2,
            suit: "Diamonds",
            image: 'url("./Images/9_of_diamonds.png")',
        },
        {
            title: "9 of Hearts",
            number: 9,
            suit: "Hearts",
            image: 'url("./Images/9_of_hearts.png")',
        },
        {
            title: "9 of Spades",
            number: 9,
            suit: "Spades",
            image: 'url("./Images/9_of_spades.png")',
        },
        {
            title: "10 of Clubs",
            number: 10,
            suit: "Clubs",
            image: 'url("./Images/10_of_clubs.png")'
        }, {
            title: "10 of Diamonds",
            number: 10,
            suit: "Diamonds",
            image: 'url("./Images/10_of_diamonds.png")',
        },
        {
            title: "10 of Hearts",
            number: 10,
            suit: "Hearts",
            image: 'url("./Images/10_of_hearts.png")',
        },
        {
            title: "10 of Spades",
            number: 10,
            suit: "Spades",
            image: 'url("./Images/10_of_spades.png")',
        },
        {
            title: "Jack of Clubs",
            number: 10,
            suit: "Clubs",
            image: 'url("./Images/jack_of_clubs2.png")'
        }, {
            title: "Jack of Diamonds",
            number: 10,
            suit: "Diamonds",
            image: 'url("./Images/jack_of_diamonds2.png")',
        },
        {
            title: "Jack of Hearts",
            number: 10,
            suit: "Hearts",
            image: 'url("./Images/jack_of_hearts2.png")',
        },
        {
            title: "Jack of Spades",
            number: 10,
            suit: "Spades",
            image: 'url("./Images/jack_of_spades2.png")',
        },
        {
            title: "Queen of Clubs",
            number: 10,
            suit: "Clubs",
            image: 'url("./Images/queen_of_clubs2.png")'
        }, {
            title: "Queen of Diamonds",
            number: 10,
            suit: "Diamonds",
            image: 'url("./Images/queen_of_diamonds2.png")',
        },
        {
            title: "Queen of Hearts",
            number: 10,
            suit: "Hearts",
            image: 'url("./Images/queen_of_hearts2.png")',
        },

        {
            title: "Queen of Spades",
            number: 10,
            suit: "Spades",
            image: 'url("./Images/queen_of_spades2.png")',
        },
        {
            title: "King of Clubs",
            number: 10,
            suit: "Clubs",
            image: 'url("./Images/king_of_clubs2.png")'
        }, {
            title: "King of Diamonds",
            number: 10,
            suit: "Diamonds",
            image: 'url("./Images/king_of_diamonds2.png")',
        },
        {
            title: "King of Hearts",
            number: 10,
            suit: "Hearts",
            image: 'url("./Images/king_of_hearts2.png")',
        },
        {
            title: "King of Spades",
            number: 10,
            suit: "Spades",
            image: 'url("./Images/king_of_spades2.png")',
        },
        {
            title: "Ace of Clubs",
            number: "A",
            suit: "Clubs",
            image: 'url("./Images/ace_of_clubs.png")'
        }, {
            title: "Ace of Diamonds",
            number: "A",
            suit: "Diamonds",
            image: 'url("./Images/ace_of_diamonds.png")',
        },
        {
            title: "Ace of Hearts",
            number: "A",
            suit: "Hearts",
            image: 'url("./Images/ace_of_hearts.png")',
        },
        {
            title: "Ace of Spades",
            number: "A",
            suit: "Spades",
            image: 'url("./Images/ace_of_spades2.png")',
        }
    ];

    const shuffleDeck = function (array) {
        {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        return array

    }

    return shuffleDeck(this.deck)







}


