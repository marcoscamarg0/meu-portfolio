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
      if (isOpen && !e.target.closest('#mobile-menu') && !e.target.closest('#menu-toggle')) {
        setIsOpen(false);
      }
    };
    
    // Desabilita o scroll quando o menu está aberto
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    window.addEventListener('keydown', handleEsc);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.removeEventListener('click', handleClick);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : isOpen 
            ? 'bg-white dark:bg-gray-900 shadow-md py-2'
            : 'bg-transparent dark:bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary dark:text-blue-400"
          aria-label="Ir para seção inicial"
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
              aria-label={`Ir para seção ${link.name}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </button>
          
          <button 
            id="menu-toggle"
            className="text-dark dark:text-white text-2xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed top-[var(--nav-height,56px)] left-0 right-0 bottom-0 bg-white dark:bg-gray-900 shadow-lg transition-opacity duration-300 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          '--nav-height': scrollPosition > 50 ? '56px' : '72px',
          height: 'calc(100vh - var(--nav-height))'
        }}
        aria-hidden={!isOpen}
      >
        <div 
          className="container mx-auto px-4 py-8 flex flex-col space-y-6"
          role="menu"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-dark dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors py-2 border-b border-gray-200 dark:border-gray-700"
              onClick={handleLinkClick}
              role="menuitem"
              aria-label={`Ir para seção ${link.name}`}
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
