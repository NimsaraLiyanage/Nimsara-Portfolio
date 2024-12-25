import React, { useState } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-transparent dark:bg-transparent backdrop-blur-sm shadow-sm z-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-black  dark:text-white ">Nimsara Liyanage</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-08 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600 px-2 py-3 rounded-md text-2xl font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="https://github.com/NimsaraLiyanage" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/nimsaraliyanage/" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:tharindanimsara457@egmail.com" className="text-gray-500 hover:text-indigo-600 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Social Links - Mobile */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex justify-center">
            <a href="https://github.com" className="text-gray-500 hover:text-indigo-600 transition-colors mx-2">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-indigo-600 transition-colors mx-2">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:your@email.com" className="text-gray-500 hover:text-indigo-600 transition-colors mx-2">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
