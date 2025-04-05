import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const isLoggedIn = true;
  const username = "Lakshya";

  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Refs for detecting outside clicks
  const dropdownRef = useRef();
  const buttonRef = useRef();

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setDropdownVisible(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 object-cover rounded-full shadow-md"
          />
          <span className="text-2xl font-semibold text-blue-700">Civil A-Z 🏗️</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link to="/" className="hover:bg-blue-100 px-5 py-2 rounded-md">Home</Link>
          <Link to="/materials" className="hover:bg-blue-100 px-5 py-2 rounded-md">Materials</Link>


          {isLoggedIn ? (
            <>
              <Link to="/cart" className="hover:bg-blue-100 px-5 py-2 rounded-md">🛒 Cart</Link>

              {/* Username with dropdown */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  ref={buttonRef}
                  className="px-5 py-2 font-semibold hover:bg-blue-100 rounded-md"
                >
                  {username}
                </button>

                {dropdownVisible && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 border border-gray-200 z-10"
                  >
                    <Link to="/profile" className="block px-4 py-2 hover:bg-blue-100">My Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 hover:bg-blue-100">Settings</Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login" className="px-5 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-100">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
