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

  function handleNavigate(){
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    navigate('/');
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to='/' onClick={()=>window.scrollTo(0, 0)} className="text-xl font-bold">Portfolio</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
        <Link onClick={()=>window.scrollTo(0, 0)}  to='/' className="hover:text-gray-300">
            Home
          </Link>
          <Link onClick={()=>window.scrollTo(0, 0)}  to='/projects' className="hover:text-gray-300">
            Projects
          </Link>
          <Link onClick={()=>window.scrollTo(0, 0)}  to='/experience' className="hover:text-gray-300">
            Experience
          </Link>
          <Link onClick={()=>window.scrollTo(0, 0)}  to='/blogs' className="hover:text-gray-300">
            Blog
          </Link>
          <Link onClick={()=>window.scrollTo(0, 0)}  to='/contact' className="hover:text-gray-300">
            Contact
          </Link>
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
         <Link to='/'
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => handleNavigate()}
          >
            Home
          </Link>
          <Link to='/projects'
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => handleNavigate()}
          >
            Projects
          </Link>
          <Link to='/experience'
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => handleNavigate()}
          >
            Experience
          </Link>

          <Link to='/skills'
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => handleNavigate()}
          >
            Skills
          </Link>
          <Link to='/blogs'
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => handleNavigate()}
          >
            Blog
          </Link>
          <Link to='/contact'
            className="block px-6 py-2 text-gray-300 hover:bg-gray-700"
            onClick={() => handleNavigate()}
          >
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
