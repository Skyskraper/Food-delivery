import React, { useState } from 'react';
import food from '../src/assets/logo-7.png';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-white py-4">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Top Row */}
        <div className="flex items-center justify-between lg:justify-between">

          {/* Logo ) */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
            <img src={food} alt="logo" className="h-[55px]" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li className="nav-item border-r pr-4">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item border-r pr-4">
                <Link to="/about">ABOUT US</Link>
              </li>
              <li className="nav-item border-r pr-4">
                <Link to="/Features">FEATURES</Link>
              </li>
              <li className="nav-item border-r pr-4">
                <Link to="/Gallery">GALLERY</Link>
              </li>
              <li className="nav-item border-r pr-4">
                <Link to="/Blog">BLOG</Link>
              </li>
              <li className="nav-item border-r pr-4">
                <Link to="/Menu">MENU</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact">CONTACTS</Link>
              </li>
            </ul>
          </nav>

          {/* mobile only */}
          <div className="lg:hidden absolute right-6">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-6">
            <ul className="flex flex-col items-center gap-5 text-[16px] font-semibold text-[#414549]">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/Features">FEATURES</Link></li>
              <li><Link to="/Gallery">GALLERY</Link></li>
              <li><Link to="/Blog">BLOG</Link></li>
              <li><Link to="/Menu">MENU</Link></li>
              <li><Link to="/Contact">CONTACTS</Link></li>
            </ul>
          </div>
        )}

      </div>
    </section>
  );
};

export default Navbar;
