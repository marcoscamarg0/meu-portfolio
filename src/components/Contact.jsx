import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
  
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
   
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">Tem um projeto em mente? Vamos conversar!</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h3 className="text-2xl font-bold text-dark dark:text-white mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary dark:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">marcos.camarg0@outlook.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary dark:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white">Telefone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+55 (61) 98484-7979</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary dark:bg-blue-500 text-white p-3 rounded-full transition-colors duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-dark dark:text-white">Localização</h4>
                  <p className="text-gray-600 dark:text-gray-300">Brasília - Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/marcoscamarg0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 p-3 rounded-full transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/marcoscamarg0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 p-3 rounded-full transition-colors"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://wa.me/5561984847979?text=Ol%C3%A1%2C%20tudo%20bem%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-primary dark:hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 p-3 rounded-full transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/30 p-8 transition-colors duration-300">
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md">
                  {submitMessage}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-dark dark:text-white font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark dark:text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-dark dark:text-white font-medium mb-2">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark dark:text-white font-medium mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-300"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary dark:bg-blue-500 text-white rounded-md hover:bg-secondary dark:hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;