import React from 'react';

const Resultat = ({ diceRoll }) => {
    // Fonction de vérification des combinaisons (vous devrez ajuster cela selon les règles de votre jeu)
    const checkCombination = (diceRoll) => {
        // Exemple de logique de vérification (à adapter en fonction de vos règles)
        const isWinningCombination = diceRoll.every((value) => value === 6);
        return isWinningCombination ? 'Gagné !' : 'Perdu.';
    };

    const result = checkCombination(diceRoll);

    return (
        <div>
            <h2>Résultat</h2>
            <p>Résultat du lancer de dés : {diceRoll.join(', ')}</p>
            <p>{result}</p>
        </div>
    );
};

export default Resultat;
