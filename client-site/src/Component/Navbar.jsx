import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <a className="btn btn-ghost text-xl" href="#">Student Info</a>
        </div>

        {/* Navigation items */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/form" className="text-white">Form</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
