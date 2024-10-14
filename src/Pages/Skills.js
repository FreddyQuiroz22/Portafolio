import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode } from 'react-icons/fa';  // Importamos los iconos
import { SiTailwindcss, SiFirebase } from 'react-icons/si';  // Otros iconos adicionales

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" />, percentage: 85 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, percentage: 90 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" />, percentage: 80 },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, percentage: 85 },
  { name: 'Node.js', icon: <FaNode className="text-green-500" />, percentage: 70 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, percentage: 75 },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, percentage: 65 },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills</h2>

        {/* Lista de skills */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              {/* Icono de la tecnología */}
              <div className="w-12 h-12 flex items-center justify-center">
                {skill.icon}
              </div>
              {/* Nombre de la tecnología */}
              <div className="w-40 ml-4 text-lg font-semibold text-gray-700">
                {skill.name}
              </div>
              {/* Barra de progreso */}
              <div className="w-full bg-gray-300 rounded-full h-4 ml-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
              {/* Porcentaje */}
              <div className="ml-4 text-gray-600 font-semibold">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
