import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
  return (
    <nav className="lg:flex lg:justify-between items-center">
      <img className="ml-24" src={logo} alt="" />
      <div className="nav-bar">
        <a
          className="text-decoration-none md:ml-16 text-white font-bold"
          href="/order"
        >
          Order
        </a>
        <a
          className="text-decoration-none md:ml-16 text-white font-bold"
          href="/review"
        >
          Order Review
        </a>
        <a
          className="text-decoration-none md:ml-16 text-white font-bold"
          href="/inventory"
        >
          Manage Inventory
        </a>
        <a
          className="text-decoration-none md:ml-16 text-white font-bold mr-24"
          href="/login"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;