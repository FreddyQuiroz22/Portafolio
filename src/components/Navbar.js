import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Importamos los iconos de react-icons

const Navbar = () => {
  return (
    <nav className="bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 z-10 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Links de navegación */}
        <ul className="flex space-x-8 font-semibold text-gray-800">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/projects" className="hover:text-blue-500">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-500">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Iconos de redes sociales a la derecha */}
        <div className="flex space-x-4 text-gray-800">
          <a href="https://www.linkedin.com/in/freddy-quiroz-zavala-169569124" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/FreddyQuiroz22" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
