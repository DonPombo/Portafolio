import { motion } from "framer-motion";
import {
  Smartphone,
  Shield,
  Database,
  Cloud,
  Users,
  Brain,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Desarrollo Móvil",
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      items: [
        "Flutter",
        "Dart",
        "UI/UX Móvil",
        "Gestión de Estado",
        "APIs Nativas",
      ],
    },
    {
      category: "Seguridad",
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      items: ["Ciberseguridad", "Código Seguro", "Auditoría de Seguridad"],
    },
    {
      category: "Backend y Cloud",
      icon: <Cloud className="w-8 h-8 text-yellow-500" />,
      items: ["Firebase", "Supabase", "APIs RESTful"],
    },
    {
      category: "Base de Datos",
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      items: ["SQLite", "PostgreSQL", "Firestore"],
    },
    {
      category: "Habilidades Blandas",
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      items: [
        "Comunicación",
        "Resolución de Problemas",
        "Gestión de Proyectos",
        "Aprendizaje continuo",
      ],
    },
    {
      category: "Aprendizaje",
      icon: <Brain className="w-8 h-8 text-yellow-500" />,
      items: [
        "Autoaprendizaje",
        "Escritura Técnica",
        "Compartir Conocimiento",
        "Mentoría",
      ],
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
          <h2 className="section-title text-center">
            Habilidades y Experiencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-bold text-red-500">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
