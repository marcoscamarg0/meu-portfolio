import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Checker Credit Card",
      description: "Fiz um site para um meme entre meus amigos com fucionalidades de verificar se o cartão é clonado rsrs.",
      image: "/memecartao.jpg",
      technologies: ["React", "tailwind", "Vite"],
      github: "https://github.com/marcoscamarg0/cartao",
      demo: "http://cartao-two.vercel.app"
    },
    {
      title: "CAV Piscinas",
      description: "Landing page para apresentar o trabalho do CAV Piscinas, com informações sobre serviços e contato.",
      image: "/cavpiscinas.jpg",
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/marcoscamarg0/CAV-PISCINAS",
      demo: "https://cav-piscinas.vercel.app/"
    },
    {
      title: "App de monitoramento de percurso de Kart",
      description: "Aplicativo para para monitorar o percurso de kart, com funcionalidades de login, cadastro e visualização de dados em tempo real.",
      image: "/kartapp.jpg",
      technologies: ["React Native", "TypeScript", "Tailwind CSS", "Google Maps API"],
      github: "https://github.com/marcoscamarg0/KartApp",
      demo: ""
    },
    {
      title: "Calculadora pra rolê",
      description: "Site que faz a soma dos valores e diz se é possível dividir entre os participantes.",
      image: "/calculadora.jpg",
      technologies: ["React", "Vite", "CSS"],
      github: "https://github.com/marcoscamarg0/Calculadora_de_Role",
      demo: "http://roshamizade.vercel.app"
    },
    {
      title: "Terapia de reprocessamento generativo",
      description: "Landing page para terapia de reprocessamento generativo com informações sobre o método e depoimentos.",
      image: "/trg.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/marcoscamarg0/trg-pi1",
      demo: "https://trg-pi1.vercel.app/"
    },
    {
      title: "Site que mostra as horas",
      description: "WebSite simples que mostra a hora atual no horário de Brasília.",
      image: "/hora.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/marcoscamarg0/relogio-digital",
      demo: "https://relogio-digital-woad.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-dark dark:text-white mb-2">Meus Projetos</h2>
          <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">Confira alguns dos meus trabalhos recentes</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
