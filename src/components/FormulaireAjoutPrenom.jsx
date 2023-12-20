import React, { useState, useEffect } from 'react';

const FormulaireAjoutPrenom = ({ listePrenomsExistant }) => {
  const [nouveauPrenom, setNouveauPrenom] = useState('');
  const [listePrenoms, setListePrenoms] = useState(listePrenomsExistant);
  const [erreur, setErreur] = useState('');

  useEffect(() => {
    const savedListePrenoms = localStorage.getItem('listePrenoms');
    if (savedListePrenoms) {
      setListePrenoms(JSON.parse(savedListePrenoms));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listePrenoms', JSON.stringify(listePrenoms));
  }, [listePrenoms]);

  const handleChange = (e) => {
    setNouveauPrenom(e.target.value.toUpperCase());
    setErreur('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nouveauPrenom.trim() === '') {
      setErreur('Le champ ne peut pas être vide.');
      return;
    }

    if (listePrenoms.includes(nouveauPrenom)) {
      setErreur('Cet utilisateur existe déjà.');
      return;
    }

    setListePrenoms([...listePrenoms, nouveauPrenom]);
    setNouveauPrenom('');
    setErreur('');
  };

  return (
    <div>
      <h2>Liste des prénoms</h2>
      <ul>
        {listePrenoms.map((prenom, index) => (
          <li key={index}>{prenom}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Nouveau prénom:
          <input type="text" value={nouveauPrenom} onChange={handleChange} />
        </label>
        <button type="submit">Ajouter</button>
      </form>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
    </div>
  );
};

export default FormulaireAjoutPrenom;
