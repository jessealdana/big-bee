import React, { useState } from "react";
import "./beeStyle.css";

function BeeAlgo() {
    const [number1, setNumber1] = useState(0);
    const [result, setResult] = useState(number1 * 100 / 70);

    function calculateResult() {
        setResult(Math.round(number1 * 100 / 70));
    }

    return (
    <div className="container">
        <h1 className="title">The Queen</h1>
        <p className="description">In the New York Times Spelling Bee the rank of genius is reached at 70% of the total points available that day.  To find out how many points it will take to get today's Queen, enter the number for today's genius rank below.</p>
        <div className="number-input">
            <input
                type="number"
                value={number1}
                onChange={e => setNumber1(+e.target.value)}               
            />
        </div>
        <br />
        <button onClick={calculateResult}>Calculate!</button>
        <h2>{result}</h2>
    </div>
    );

};

export default BeeAlgo