import React from 'react';
import Navbar from './Navebar';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
