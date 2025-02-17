import { motion } from "framer-motion";
import { ArrowRight, Code, Shield, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/foto-perfil.jpg')", // Cambiado a /assets/
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900/75 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Icons Group */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <Code size={48} className="text-red-500" />
              <motion.img
                src="/assets/Pombo.png" 
                alt="Logo Pombo"
                className="w-16 h-16"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Shield size={48} className="text-yellow-500" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white border-red-500">Don Pombo</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-yellow-500 mb-8">
              Especialista en Ciberseguridad & Desarrollo Móvil con Flutter
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Combino el poder de Flutter con buenas prácticas de ciberseguridad
              para crear aplicaciones móviles seguras de alto rendimiento y
              escalables
            </p>

            {/* YouTube Channel Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-4 bg-red-500/10 rounded-lg border-2 border-red-500 hover:border-yellow-500 transition-colors"
            >
              <a
                href="https://youtube.com/@donpombo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <Youtube
                  size={40}
                  className="text-red-500 group-hover:text-yellow-500 transition-colors"
                />
                <span className="text-xl font-semibold text-white">
                  ¡Sígueme en YouTube!
                </span>
                <span className="text-gray-300">
                  Ciberseguridad, Aplicaciones móviles y más
                </span>
              </a>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Contactar <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="btn-primary bg-transparent border-2 border-red-500 hover:bg-red-500/20 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
              >
                Ver Mis Proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
