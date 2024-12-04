import React, { useState } from 'react';
import axios from 'axios';

const AddProduit = () => {
  const [categorie, setCategorie] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(prix) || prix <= 0) {
      setError('Le prix doit être un nombre positif.');
      return;
    }

    const produitData = {
      categorie,
      nom: titre,
      description,
      prix,
    };

    axios.post('http://127.0.0.1:8000/api/produits/new', produitData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 201) {
          setSuccess('Produit ajouté avec succès');
          setCategorie('');
          setTitre('');
          setDescription('');
          setPrix('');
          setError('');
        } else {
          setError('Erreur lors de l\'ajout du produit');
        }
      })
      .catch((error) => {
        setError('Une erreur s\'est produite : ' + error.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Ajouter un article</h2>

      {error && <div className="text-red-600 mb-4">{error}</div>}
      {success && <div className="text-green-600 mb-4">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-4">
          <label className="text-lg font-medium">Catégorie:</label>
          <div>
            <input 
              type="radio" 
              name="categorie" 
              value="categorie1" 
              required 
              className="mr-2" 
              onChange={() => setCategorie('categorie1')} 
            />
            <label className="text-gray-600">Catégorie 1</label>
          </div>
          <div>
            <input 
              type="radio" 
              name="categorie" 
              value="categorie2" 
              required 
              className="mr-2" 
              onChange={() => setCategorie('categorie2')} 
            />
            <label className="text-gray-600">Catégorie 2</label>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Titre:</label>
          <input 
            type="text" 
            value={titre}
            onChange={(e) => setTitre(e.target.value)} 
            required 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Description:</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            required 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700">Prix:</label>
          <input 
            type="number" 
            value={prix}
            onChange={(e) => setPrix(e.target.value)} 
            required 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" 
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Ajouter l'article
        </button>
      </form>
    </div>
  );
};

export default AddProduit;
