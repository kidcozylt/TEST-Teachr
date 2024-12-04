import React from "react";
import logo from "../Assets/teachr-logo.png"

const Navbar = () => {
    return(
<nav className="bg-white shadow sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <img src={logo} alt="Logo" className="h-8 w-auto"/>
    </div>
    </nav>
    
)};

export default Navbar; 