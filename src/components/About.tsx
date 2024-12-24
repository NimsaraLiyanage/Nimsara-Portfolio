import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-40">
            <div>
              <h3 className="text-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
              🎓 Computer Engineering undergraduate at the University of Jaffna, pursuing B.Sc.(Eng)(Hons) with a passion for building innovative solutions at the intersection of software development and artificial intelligence.</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
             With over 2 years of experience in web development, I've worked on various projects.
             My passion lies in creating clean, efficient, and user-friendly solutions.
              </p>
              <br />
              <a
              href="https://drive.google.com/file/d/1VPOYwlW4iqNOmWxNwDEMdqft2bGH5b9H/view?usp=sharing"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
              <Download size={20} />
              Download Resume
              </a>
            </div>
            <div>
              <h3 className="text-center text-xl font-semibold mb-4 text-gray-900 dark:text-white">Core Expertise</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="text-center">• Full Stack Development</li>
              <li className="text-center">• React & Java</li>
              <li className="text-center">• MySQL</li>
              <li className="text-center">• UI/UX Design</li>
              <li className="text-center">• ML / DL / AI</li>
              <li className="text-center">• Embedded Systems</li>
              </ul>
            </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}