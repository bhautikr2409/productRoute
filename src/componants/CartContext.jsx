import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("cart", cart);

  const addCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      else{

          return [...prevCart , { ...product , quantity : 1 }];
      }
    });


    console.log("product abc", product);
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeFromCart ,updateQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
