'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="navbar-link hover:text-blue-600 transition">About</Link>
          <Link href="#projects" className="navbar-link hover:text-blue-600 transition">Projects</Link>
          <Link href="#contact" className="navbar-link hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden group"
          aria-label="Toggle Menu"
        >
          {/* Top bar */}
          <span
            className={`absolute block h-0.5 w-8 bg-gray-800 transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          {/* Middle bar */}
          <span
            className={`absolute block h-0.5 w-8 bg-gray-800 transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`absolute block h-0.5 w-8 bg-gray-800 transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col mt-24 space-y-8 px-6 text-lg">
          <Link href="#about" onClick={closeMenu} className=" navbar-link hover:text-blue-600 transition">About</Link>
          <Link href="#projects" onClick={closeMenu} className=" navbar-link hover:text-blue-600 transition">Projects</Link>
          <Link href="#contact" onClick={closeMenu} className=" navbar-link hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
