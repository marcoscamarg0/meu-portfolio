import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite } from 'react-icons/si';
import { memo } from 'react';


const SkillIcon = memo(({ name, Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 p-4"
    role="listitem"
    aria-label={`${name} skill`}
  >
    <Icon 
      className="w-12 h-12 md:w-16 md:h-16 transition-colors duration-300" 
      style={{ color }} 
      aria-hidden="true"
    />
    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</span>
  </motion.div>
));

SkillIcon.displayName = 'SkillIcon';


const skillsData = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'React Native', icon: FaReact, color: '#483d8b' }
];

const Skills = memo(() => {
  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 
            id="skills-heading" 
            className="text-3xl font-bold text-center mb-12 text-dark dark:text-white"
          >
            Minhas Habilidades
          </h2>
          
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
            role="list"
            aria-label="Lista de habilidades técnicas"
          >
            {skillsData.map((skill) => (
              <SkillIcon
                key={skill.name}
                name={skill.name}
                Icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;