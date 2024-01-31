import React, { useState } from 'react';

const Home = () => {
    const [diceRoll, setDiceRoll] = useState([]);
    const [showResultButton, setShowResultButton] = useState(false);

    const rollDice = () => {
        const newDiceRoll = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
        setDiceRoll(newDiceRoll);
        setShowResultButton(true);
    };

    const navigateToResult = () => {
        window.location.href = "/result";
    };

    return (
        <div>
            <button onClick={rollDice}>Jouer</button>
            {showResultButton && <button onClick={navigateToResult}>Résultat</button>}
        </div>
    );
};

export default Home;
