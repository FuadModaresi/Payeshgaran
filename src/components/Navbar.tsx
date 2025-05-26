'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center">
              <span className="ml-2">پایشگران زیست بوم صدرا</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              صفحه اصلی
            </Link>
            <Link href="/about" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              رسالت ما
            </Link>
            <Link href="/projects" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              پروژه‌ها
            </Link>
            <Link href="/contact" className="px-3 py-2 hover:bg-green-700 rounded transition duration-300">
              تماس با ما
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4">
              <Link 
                href="/" 
                className="px-3 py-2 hover:bg-green-700 rounded transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                صفحه اصلی
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 hover:bg-green-700 rounded transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                رسالت ما
              </Link>
              <Link 
                href="/projects" 
                className="px-3 py-2 hover:bg-green-700 rounded transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                پروژه‌ها
              </Link>
              <Link 
                href="/contact" 
                className="px-3 py-2 hover:bg-green-700 rounded transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                تماس با ما
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
