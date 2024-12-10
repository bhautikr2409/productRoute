// src/components/Footer.js
import React from 'react';

const Footer = () => {

  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-800 text-white">
      {/* Back to Top Button */}
      <div className="bg-gray-700 text-center py-4 cursor-pointer hover:bg-gray-600">
        <button onClick={scrollToTop}   className="text-sm font-semibold">Back to Top</button>
      </div>

      {/* Footer Navigation Links */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-4 text-sm">
        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">About Amazon</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Amazon Devices</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Make Money with Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
            <li><a href="#" className="hover:underline">Sell on Amazon Business</a></li>
            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="hover:underline">Self-Publish with Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Amazon Payment Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Amazon Business Card</a></li>
            <li><a href="#" className="hover:underline">Shop with Points</a></li>
            <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
            <li><a href="#" className="hover:underline">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Let Us Help You</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Amazon and COVID-19</a></li>
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Your Orders</a></li>
            <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
            <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
          </ul>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-gray-700 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center space-x-6 text-xs">
          <a href="#" className="hover:underline">Conditions of Use</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Interest-Based Ads</a>
          <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
