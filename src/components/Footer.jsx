import { FaHeart, FaReact } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Marcos<span className="text-primary dark:text-blue-400">Camargo</span></h2>
            <p className="mt-2 text-gray-400 dark:text-gray-300">Desenvolvedor Front-end especializado em criar experiências web incríveis.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#home" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Sobre</a>
              <a href="#skills" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Habilidades</a>
              <a href="#projects" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Projetos</a>
              <a href="#contact" className="text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">Contato</a>
            </div>
            
            <p className="text-gray-400 dark:text-gray-300 flex items-center">
              Desenvolvido com <FaHeart className="text-red-500 mx-1" /> e <FaReact className="text-primary dark:text-blue-400 mx-1" /> 
              &copy; {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;