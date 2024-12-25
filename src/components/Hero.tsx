import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Profile from '../Images/profile.png';

export default function Hero() {
  const firstName = "NIMSARA";
  const lastName = "LIYANAGE";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="text-10xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi I'm{' '}
              <motion.span
                className="text-orange-500"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2, // Delay between letters
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  },
                }}
              >
                {firstName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>{' '}
              <motion.span
                className="text-blue-800"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      delayChildren: 0.5, // Delay for the last name
                    },
                  },
                }}
              >
                {lastName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </h1>
            <p className=" text-amber-700 dark:text-amber-700 mb-8">
            "Turning ideas into impactful solutions through code and innovation."
            </p>
            <p className=" text-gray-600 dark:text-gray-300 mb-8">
            Final-year Computer Engineering undergraduate specializing in Software Engineering, Artificial Intelligence, Machine Learning, and Deep Learning.            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Contact Me
              </a>
              <a href="#projects" className="border border-gray-300 text-black dark:text-white dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                View Work
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/NimsaraLiyanage" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">
                <Github size={35} />
              </a>
              <a href="https://www.linkedin.com/in/nimsaraliyanage/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">
                <Linkedin size={35} />
              </a>
              <a href="mailto:tharindanimsara457@egmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition">
                <Mail size={35} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative w-90 h-90 mx-auto rounded-full p-1 bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 hover:scale-105 transition-transform duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.5)]">
              <img
                src={Profile}
                alt="Profile"
                className="rounded-full w-full h-full object-cover hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.7)] transition-shadow duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
