import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

  const {cart , removeFromCart} = useContext(CartContext)
  console.log("main cart",cart)
  
  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
  };


  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Cart Items */}
        <div className="col-span-2 bg-white p-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

          {
            cart.map((Product , index)=>(              
              <div key={index} className="flex items-start mb-4 border-b pb-4"> 
              {console.log("product id check",Product)}
              <img
                src={Product.image}
                alt="Product"
                className="w-20 h-20 object-cover mr-4"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{Product.title}</h3>
                <p className="text-gray-600">{Product.price}</p>
                <div className="flex items-center mt-2">
                  {/* <label className="text-sm mr-2">Qty:</label> */}
                  <p className="text-gray-600">Quantity: {Product.quantity}</p>
                  {/* <input
                    type="number"
                    min="1"
                    value="1"
                    className="w-12 text-center p-1 border rounded-md"
                    readOnly
                  /> */}
                </div>
              </div>


              <div className="ml-auto">
                <p className="font-bold">Subtotal: ${(Product.price * Product.quantity).toFixed(2)}</p>
                <button onClick={()=>{removeFromCart(Product.id)}} className="mt-2 text-red-500 hover:underline">Remove</button>
              </div>
            </div>

            ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items ({cart.length}):</span>
            <span>{calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge:</span>
            <span>00.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>{calculateTotal()}</span>
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

