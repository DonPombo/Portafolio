import React from 'react';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-red-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://youtube.com/@donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://twitter.com/donpombo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Don Pombo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;