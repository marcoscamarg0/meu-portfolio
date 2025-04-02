import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
   
    const animation = document.createElement('div');
    animation.className = 'hero-animation';
    Object.assign(animation.style, {
      width: '500px',
      height: '500px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none' 
    });
    
    heroElement.appendChild(animation);
    animationRef.current = animation;
    
   
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const { left, top } = heroElement.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          
          animation.style.left = `${x}px`;
          animation.style.top = `${y}px`;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    heroElement.addEventListener('mousemove', handleMouseMove);
    
   
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
      animation.remove(); 
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light dark:bg-gray-900 transition-colors duration-300"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl text-primary dark:text-blue-400 font-semibold mb-2"
          >
            Olá, eu sou Marcos Camargo
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-dark dark:text-white mb-6"
          >
            Desenvolvedor Front-end
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            Criando experiências web interativas e responsivas com as tecnologias mais modernas do mercado.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-white dark:bg-blue-600 dark:hover:bg-blue-700 rounded-md hover:bg-secondary transition-colors"
              aria-label="Ver meus projetos"
            >
              Ver Projetos
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-primary text-primary dark:border-blue-400 dark:text-blue-400 rounded-md hover:bg-primary hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
              aria-label="Entre em contato"
            >
              Contato
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;