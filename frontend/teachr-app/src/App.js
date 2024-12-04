import './App.css';
import AddProduit from './Pages/AddProducts';
import Navbar from './Components/Navbar/navbar';
import ProduitListe from './Components/Produits/produit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/add_produit' element={<AddProduit/>}/>
        <Route path='/' element={<ProduitListe/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
