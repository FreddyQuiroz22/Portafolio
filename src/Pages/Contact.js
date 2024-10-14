import React from 'react';

const Contact = () => {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeP9J_xwOPwZHaTANo8gN2uoDpqTog5JfMNn6Utlopt95RbAA/viewform?usp=sf_link';

  return (
    <div className="bg-gray-100 min-h-screen p-12">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 pt-20">Contacto</h2>
      <div className="flex justify-center mb-12">
        <div className="border-b-2 border-yellow-400 w-24"></div>
      </div>
      <p className="text-lg mb-8 text-center text-gray-700">
        Si deseas ponerte en contacto conmigo, completa el siguiente formulario:
      </p>
      <div className="flex justify-center">
        <a 
          href={googleFormLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300"
        >
          Ir al Formulario
        </a>
      </div>
    </div>
  );
};

export default Contact;
