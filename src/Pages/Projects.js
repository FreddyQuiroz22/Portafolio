import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 pt-20">Mis Proyectos</h2>
      <div className="flex justify-center mb-12">
        <div className="border-b-2 border-yellow-400 w-24"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tarjeta de Control de Gastos */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="/control-gastos.png" // Asegúrate de agregar una imagen para este proyecto
            alt="Control de Gastos"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Control de Gastos</h3>
            <p className="text-gray-600 mb-4">
              Aplicación de control de gastos con autenticación y Firebase.
            </p>
            <a
              href="https://github.com/FreddyQuiroz22/Control-Gastos"
              className="inline-block bg-yellow-400 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
            >
              Ver en GitHub
            </a>
          </div>
        </div>

        {/* Tarjeta de Prácticas Pre-Profesionales */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src="/ppp.jpg" // Asegúrate de agregar una imagen para este proyecto
            alt="Prácticas Pre-Profesionales"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Prácticas Pre-Profesionales</h3>
            <p className="text-gray-600 mb-4">
              Modificación de la página de Alcohólicos Anónimos, creación de nuevas funcionalidades y SEO de la página.
            </p>
            <a
              href="https://github.com/FreddyQuiroz22/Alcoholicos_Anonimos"
              className="inline-block bg-yellow-400 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
