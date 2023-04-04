import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="lg:flex lg:justify-between items-center">
      <img className="ml-24" src={logo} alt="" />
      <div className="nav-bar">
        <Link
          className="text-decoration-none md:ml-16 text-white font-bold"
          to="/"
        >
          Shop
        </Link>
        <Link
          className="text-decoration-none md:ml-16 text-white font-bold"
          to="/review"
        >
          Order Review
        </Link>
        <Link
          className="text-decoration-none md:ml-16 text-white font-bold"
          to="/inventory"
        >
          Manage Inventory
        </Link>
        <Link
          className="text-decoration-none md:ml-16 text-white font-bold mr-24"
          to="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;