import { motion } from "framer-motion";
import { Youtube, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">Sobre Mí</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card backdrop-blur-sm bg-gray-900/50">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Trayectoria Profesional
              </h3>
              <p className="text-gray-300 mb-4">
                Soy un apasionado de la tecnología con un pie en el mundo de la
                ciberseguridad y otro en el desarrollo móvil. Estudié
                ciberseguridad porque siempre me ha fascinado proteger lo que
                más importa: la información y la privacidad de las personas. Sin
                embargo, en mi camino descubrí otra pasión: el desarrollo de
                aplicaciones móviles, donde puedo crear soluciones innovadoras
                que impactan directamente en la vida de los usuarios.
              </p>
              <p className="text-gray-300 mb-4">
                Hoy, mi misión es unir estas dos áreas para construir
                aplicaciones móviles no solo funcionales y atractivas, sino
                también seguras y confiables. Creo que la tecnología del futuro
                debe ser tan intuitiva como robusta, y estoy comprometido a
                contribuir a ese equilibrio.
              </p>
            </div>

            <div className="card backdrop-blur-sm bg-gray-900/50">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Creación de Contenido
              </h3>
              <p className="text-gray-300 mb-4">
                Comparto mi conocimiento y experiencias a través de mi canal de
                {/* YouTube "Don Pombo", donde creo contenido principalmente sobre */}
                desarrollo móvil y ciberseguridad
              </p>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-semibold text-red-500">
                  Fortalezas Principales
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Fuertes habilidades de comunicación </li>
                  <li>Excelente capacidad de colaboración en equipo</li>
                  <li>Enfoque proactivo en la resolución de problemas</li>
                  <li>Mentalidad de aprendizaje continuo</li>
                  <li>Proceso de desarrollo orientado al detalle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* YouTube Channel Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 card backdrop-blur-sm bg-gray-900/50 border-2 border-red-500 hover:border-yellow-500 transition-colors"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                ¡Únete a mi Canal de YouTube!
              </h3>
              <p className="text-gray-300 mb-6">
                Descubre tutoriales, consejos y mejores prácticas sobre
                desarrollo móvil, Flutter y ciberseguridad. ¡Nuevo contenido
                cada semana!
              </p>
              <a
                href="https://youtube.com/@donpombo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Youtube size={24} />
                <span>Suscríbete Ahora</span>
              </a>
            </div>
          </motion.div>

          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://youtube.com/@donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              <Youtube size={32} />
            </a>
            <a
              href="https://github.com/donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
