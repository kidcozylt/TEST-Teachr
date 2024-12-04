import React from "react";

const Navbar = () => {
    return(
<nav className="bg-white shadow sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-2xl font-bold text-blue-600">
          Teach'r
        </a>
        <div className="hidden md:flex space-x-8">
          <a
            href=""
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Produits
          </a>
          <a
            href=""
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Ajouter un produit
          </a>
        </div>
        </div>
    </nav>
    
)};

export default Navbar; 