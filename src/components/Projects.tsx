import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import { Project } from '../types';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.png';
import img3 from '../Images/3.jpeg';
import img4 from '../Images/4.jpeg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpeg';
const projects: Project[] = [
  {
    id: 1,
    title: "Sinhala Spelling and Grammar Checker",
    description: " Developed multiple models to check Sinhala spellings and grammar errors . For final combined model, used custom LSTM model and Random Forest Calssifier. ",
    image: img1,
    technologies: ["AI", "ML", "DL"],
    githubUrl: "https://github.com/NimsaraLiyanage/Sinhala_spelling_corrector_and_grammar_checker.git",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Lecture hall booking system using React.js and Spring Boot",
    description: " Developed a comprehensive lecture hall booking system using React.js and Spring Boot .",
    image: img2,
    technologies: ["React", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/NimsaraLiyanage/VenueVista.git",
    category: "Fullstack"
  },
  {
    id: 3,
    title: "Plant Disease Detection Using VGG16 with ResNet50",
    description: " Developed a plant disease detection system to assist in early disease identification and improve crop management.",
    image: img3,
    technologies: ["Deep Learning", "ResNet50", "VGG16"],
    githubUrl: "https://github.com/NimsaraLiyanage/Plant-Disease-Detection-Using-Deep-Learning.git",
    category: "Deep Learning"
  },
  {
    id: 4,
    title: "Responsive React JS Blog Application",
    description: "my React JS blog application offers a comprehensive suite of features aimed at empowering users to create, manage, and share captivating content effortlessly. Its responsive design and utilization of React Router 6 underscore my commitment to delivering modern, user-centric web applications",
    image: img4,
    technologies: ["React","JS","CSS"],
    githubUrl: "https://github.com/NimsaraLiyanage/Responsive-React-JS-Blog-Application-.git",
    category: "Frontend"
  },
  {
    id: 5,
    title: "Smart Attendance System Using Fingerprint Recognition",
    description: "This project is a prototype that showcases how to build a biometric attendance system using the AS608 Fingerprint sensor and Arduino.And also I made a simple react application for this project.",
    image:img5,
    technologies: ["Embedded Systems","AS608 Sensor", "Arduino","React"],
    githubUrl: "https://github.com/NimsaraLiyanage/Smart-Attendance-System-Using-Fingerprint-Recognition.git",
    category: "Embedded Systems"
  }, 
  {
    id: 6,
    title: "Uber Eats Sample DatabaseApp",
    description: "This is a backend project using PHP.I got lot of knowledge about SQL queries,crud operations,SQL indexing and SQL joins(Inner,Left,Right,Full )",
    image: img6,
    technologies: ["Php", "CSS",],
    githubUrl: "https://github.com/NimsaraLiyanage/Uber-Eats-DatabaseApp.git",
    category: "Backend"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {/* <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a> */}
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}