import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import EatExpressLogo from "../../public/img/EatExpress-Logo.png"
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const {loggedInUser} = useContext(UserContext);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

    //Selector
  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleLogout = () => {
    startTransition(() => {
    setIsLoggedIn(false);
    });
  };

  return (
    <div className="flex justify-between items-center bg-white fixed top-0 w-full header z-50 h-20 ">
      <div className="logo-container">
        <img className="w-36 logo ml-12" src={EatExpressLogo} alt="EatExpress Logo" />
      </div>

      <div className="flex items-center nav-items">
        <ul className="flex p-4 m-4 text-lg">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">🛒{cartItems.length} items</Link></li>
          {!isLoggedIn ? (
            <div className="flex space-x-2">
              <button 
                className="bg-orange-500 text-white px-4 py-1 rounded-lg"
                onClick={() => {
                  setShowLoginModal(true);
                  setShowSignupModal(false);
                }}
              >
                Login
              </button>
              <button 
                className="bg-green-500 text-white px-4 py-1 rounded-lg"
                onClick={() => {
                  setShowSignupModal(true);
                  setShowLoginModal(false);
                }}
              >
                Signup
              </button>
            </div>
          ) : (
            <button 
              className="bg-orange-500 text-white px-4 py-1 rounded-lg"
              onClick={handleLogout}
            >
              Logout({loggedInUser})
            </button>
          )}
        </ul>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h2 className="text-3xl font-bold text-orange-600 mb-6">Login</h2>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 pl-10 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 pl-10 pr-12 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setShowSignupModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h2 className="text-3xl font-bold text-green-600 mb-6">Create Account</h2>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 pl-10 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 pl-10 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 pl-10 pr-12 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;