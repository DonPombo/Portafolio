import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Un Lugar Chido",
      description:
        "Aplicación móvil para mostrar el catálogo de productos del restaurante ULC, con un panel de administracion para realizar todas las funciones necesarias con los productos.",
      image: "assets/ULC.png",
      tags: ["Flutter", "Supabase", "Restaurante", "Administración"],
      githubUrl: "https://github.com/DonPombo/Un-Lugar-Chido",
    },
    {
      title: "Plataforma de Formación en Ciberseguridad",
      description:
        "Aplicación móvil para formación en ciberseguridad, con lecciones interactivas y escenarios de seguridad del mundo real.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["Flutter", "Firebase", "Educación", "Seguridad"],
      comingSoon: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">Proyectos Destacados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {project.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-full font-bold shadow-lg"
                      >
                        ¡Próximamente!
                      </motion.div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-yellow-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
