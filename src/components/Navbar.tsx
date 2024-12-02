import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href='#home' onClick={()=>navigate('/')} className="text-xl font-bold">Portfolio</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={()=>navigate('/')} href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a onClick={()=>navigate('/')}  href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a onClick={()=>navigate('/')}  href="#experience" className="hover:text-gray-300">
            Experience
          </a>
          <Link  to='/blogs' className="hover:text-gray-300">
            Blog
          </Link>
          <a onClick={()=>navigate('/')}  href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Dark Mode Toggle (Visible for both Desktop and Mobile) */}
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-800 rounded text-sm hover:bg-gray-700 focus:ring focus:ring-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="#home"
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#blog"
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
