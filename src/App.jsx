import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./componants/Products";
import SingleProduct from "./componants/SingalProduct";
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import Cart from "./componants/Cart";

function App() {
  return (
    <>
    {/* <Header/> */}
    <Router>
    <Header/>
      <Routes>
        {/* <Route path="" element={<Header/>}> */}
          <Route path="/" element={<Products/>} />
          <Route path="/product/:id" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
        {/* </Route> */}
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
