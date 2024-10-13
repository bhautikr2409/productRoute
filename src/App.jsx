import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./componants/Products";
import SingleProduct from "./componants/SingalProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
