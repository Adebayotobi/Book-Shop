import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
// import Signup from './Signup';
import Login from './Login';

const Nav: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const isAuthenticated: boolean = false;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log('my Log out');
  };

  const toggleRegisterModal = () => {
    setRegisterOpen(!isRegisterOpen);
  };
  const closeRegisterModal = () => {
    setRegisterOpen(false);
  };
  return (
    <nav className="flex items-center justify-between py-4 px-10 bg-primary text-white">
      <div className="flex items-center">
        <p className="text-lg font-bold">BookMart</p>
      </div>

      <div className="flex items-center bg-white rounded-md p-4 w-[400px]">
        <FaSearch className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          className="outline-none text-black w-[90%]"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer focus:text-primary"
            onClick={toggleDropdown}
          >
            <FaUser />
            <p>Account</p>
          </div>

          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white text-black p-4 rounded-md shadow-md px-4 text-sm cursor-pointer w-[8.3rem]">
              {isAuthenticated ? (
                <>
                  <div className="nav-dropdown-item hover:bg-gray-200" onClick={handleLogout}>
                    <p>Logout</p>
                  </div>
                  <div className="flex items-center my-3 hover:bg-gray-200 space-x-2">
                    <FaShoppingCart />
                    <p>Orders</p>
                  </div>
                  <div className="flex items-center hover:bg-gray-200 space-x-2">
                    <FaHeart />
                    <p>Saved Items</p>
                  </div>
                </>
              ) : (
                <>
                <div className="hover:bg-gray-200" onClick={toggleRegisterModal}>
                  <p>Register</p>
                </div>
                  <div className="flex items-center my-3 hover:bg-gray-200 space-x-2">
                  <FaShoppingCart />
                  <p>Orders</p>
                </div>
                <div className="flex items-center hover:bg-gray-900 space-x-2">
                  <FaHeart />
                  <p>Saved Items</p>
                </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleRegisterModal}>
          <FaShoppingCart />
          <p>Cart</p>
        </div>
      </div>
      {isRegisterOpen && (
    //    <Signup onClose={closeRegisterModal} />
       <Login onClose={closeRegisterModal} />
      )}
    </nav>
  );
};

export default Nav;
