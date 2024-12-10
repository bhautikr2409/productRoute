import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import AddProductFormModel from './addProductFormModel';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Log scroll position for debugging
      console.log('Scroll position:', currentScrollTop);

      // Detect scroll direction
      if (currentScrollTop > lastScrollTop) {
        setScrollUp(false); // Scrolling down
      } else {
        setScrollUp(true);  // Scrolling up
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Update last scroll position

      if (headerRef.current) {
        // Apply Tailwind fixed class when scrolling down
        if (currentScrollTop > 0) {
          headerRef.current.classList.add("fixed", "top-0", "w-full", "z-50");
          headerRef.current.classList.remove("sticky"); // Remove sticky if it's applied
        } else {
          headerRef.current.classList.remove("fixed", "top-0", "w-full", "z-50");
          headerRef.current.classList.add("sticky"); // Revert back to sticky at top
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);


  return (
    <header ref={headerRef} className="bg-gray-800 text-white sticky top-0 w-full transition-all duration-300">
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
            <span className="font-bold">Orders</span>
          </div>
          <Link to='/cart' className="flex items-center space-x-1">
            <span className="font-bold">Cart</span>
            <span>({cart.length} 🛒)</span>
          </Link>
          <AddProductFormModel />
        </div>
      </div>
    </header>
  );
};

export default Header;
