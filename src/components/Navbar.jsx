import { useState, useEffect, useCallback, memo } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = memo(({ scrollPosition = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });
  
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);
  
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    const handleClick = (e) => {
      if (isOpen && !e.target.closest('#mobile-menu')) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent dark:bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary dark:text-blue-400"
          aria-label="Go to home section"
        >
          M<span className="text-dark dark:text-white">C</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8" role="menubar">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-dark dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              role="menuitem"
              aria-label={`Go to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle Button (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition-colors"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
          
          <button 
            className="text-dark dark:text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 transition-transform duration-300 ${
          isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div 
          className="container mx-auto px-4 py-4 flex flex-col space-y-4"
          role="menu"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-dark dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              aria-label={`Go to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
});

Navbar.propTypes = {
  scrollPosition: PropTypes.number
};

Navbar.displayName = 'Navbar';

export default Navbar;