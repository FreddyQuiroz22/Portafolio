import React from 'react';

const Home = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to right, #5b88a5, #F4F4F2)',
      }}
    >     
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">

        {/* Columna derecha: Imagen personal */}
        <div className="flex-2">
          <img
            src="/pages.jpeg" // Ruta de la imagen
            alt="Tu nombre"
            className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Columna izquierda: Texto con nombre y resumen */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold text-gray-800">Hola Mundo!. Soy Freddy Quiroz</h1>
          <p className="mt-4 text-lg text-white-600 leading-relaxed">
            Soy un desarrollador front-end enfocado en crear experiencias web atractivas
            y funcionales. Me apasiona el diseño limpio y las interfaces de usuario
            intuitivas, y siempre estoy buscando mejorar mis habilidades y aprender nuevas
            tecnologías.
          </p>
          <a
            href="/cv.pdf"  // Ruta del CV
            download="Mi-CV.pdf"
            className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
          >
            Descargar CV
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default Home;
