import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For menu icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0d213d] text-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="w-[140px]">
          <img src="./logo.png" alt="Company Logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-bold text-lg">
          <li><a href="/">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/service">Service</a></li>
          <li><a href="/ourproject">Our Project</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4 bg-[#2E2E2E] font-semibold text-lg transition-all duration-300">
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/aboutus" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="/service" onClick={() => setIsOpen(false)}>Service</a></li>
          <li><a href="/ourproject" onClick={() => setIsOpen(false)}>Our Project</a></li>
          <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
