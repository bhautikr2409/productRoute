import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import AddProductFormModel from './addProductFormModel';


const Header = () => {

  const { cart } = useContext(CartContext)


  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4">

        {/* Logo */}

        <Link to={"/"} className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-24 h-auto"
          />
        </Link>



        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="absolute top-0 right-0 h-full px-4 bg-yellow-500 rounded-r-md hover:bg-yellow-600">
              🔍
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-6">
          <Link to={'/'} className="flex items-center font-bold">Home</Link>

          <div className="flex items-center">
            <span className="font-bold"> Orders</span>
          </div>

          <Link to='/cart' className="flex items-center space-x-1">
            <span className="font-bold">Cart</span>
            <span>({cart.length} 🛒)</span>
          </Link>

          <AddProductFormModel  />


        </div>
      </div>
    </header>
  );
};

export default Header;
