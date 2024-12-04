import React from "react";

const ProduitListe = () => {
    return(
            <div className="container mx-auto py-8">
              <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-2 px-4">Nom du produit</th>
                    <th className="py-2 px-4">Description</th>
                    <th className="py-2 px-4">Prix</th>
                    <th className="py-2 px-4">Catégorie</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr  className="border-b hover:bg-gray-100">
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4"></td>
                      <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2 hover:bg-blue-700 transition duration-300">
                          Modifier
                        </button>
                        <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition duration-300">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  
                </tbody>
              </table>
              <div className="mt-4">
            <a href="/add_produit">
                <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                  Ajouter un produit
                </button>
            </a>
                </div>
              </div>
    );
};

export default ProduitListe