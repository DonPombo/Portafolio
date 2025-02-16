import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src="/src/assets/Pombo.png"
              alt="Logo Pombo"
              className="w-8 h-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-red-500">Don Pombo</span>
              <span className="px-2 py-1 text-xs font-semibold bg-yellow-500/10 text-yellow-500 rounded-full border border-yellow-500/50">
                BETA
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={getNavLinkClass('/')}>Inicio</Link>
              <Link to="/about" className={getNavLinkClass('/about')}>Sobre Mí</Link>
              <Link to="/projects" className={getNavLinkClass('/projects')}>Proyectos</Link>
              <Link to="/skills" className={getNavLinkClass('/skills')}>Habilidades</Link>
              <Link to="/contact" className={getNavLinkClass('/contact')}>Contacto</Link>
            </div>
            <a
              href="https://youtube.com/@donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <Link to="/" className={getNavLinkClass('/')}>Inicio</Link>
            <Link to="/about" className={getNavLinkClass('/about')}>Sobre Mí</Link>
            <Link to="/projects" className={getNavLinkClass('/projects')}>Proyectos</Link>
            <Link to="/skills" className={getNavLinkClass('/skills')}>Habilidades</Link>
            <Link to="/contact" className={getNavLinkClass('/contact')}>Contacto</Link>
            <a
              href="https://youtube.com/@donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-red-500 hover:text-red-400"
            >
              <Youtube size={20} />
              <span>Sígueme en YouTube</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;