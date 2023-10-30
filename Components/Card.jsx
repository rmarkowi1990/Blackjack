import React, { useState } from 'react';

export default function Card({ image }) {
    return (
        <div className="card" style={
            {
                'backgroundImage': image

            }
        }>

        </div>
    )
}