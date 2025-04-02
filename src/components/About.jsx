import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">Conheça um pouco sobre minha jornada como desenvolvedor</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full border-4 border-primary dark:border-blue-400">
              <img 
                src="src/assets/8686.jpg" 
                alt="Minha foto de perfil" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400/png';
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">Desenvolvedor Front-end Apaixonado</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Com mais de 1 ano de experiência, sou especializado em criar interfaces modernas, 
              responsivas e de alta performance. Minha paixão está em transformar designs complexos em código limpo e eficiente.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Trabalho principalmente com React, TypeScript, e frameworks CSS modernos como Tailwind. 
              Estou sempre aprendendo novas tecnologias e buscando as melhores práticas para entregar 
              produtos de qualidade que proporcionem uma excelente experiência ao usuário.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-dark dark:text-white mb-2">Educação</h4>
                <p className="text-gray-600 dark:text-gray-300">Tecnologia em sistemas para Internet</p>
                <p className="text-gray-600 dark:text-gray-300">Instituto Federal de Brasília, Cusrsando</p>
              </div>
              <div>
                <h4 className="font-bold text-dark dark:text-white mb-2">Localização</h4>
                <p className="text-gray-600 dark:text-gray-300">Brasília - Distrito Federal</p>
                <p className="text-gray-600 dark:text-gray-300">Disponível para trabalho remoto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;