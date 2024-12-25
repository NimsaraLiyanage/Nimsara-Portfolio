import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', level: 85, category: 'technical' },
  { name: 'Java', level: 80, category: 'technical' },
  { name: 'Html/CSS/JS', level: 92, category: 'technical' },
  { name: 'AI/ML/DL', level: 80, category: 'technical' },
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Git', level: 83, category: 'tools' }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="max-w-2xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}