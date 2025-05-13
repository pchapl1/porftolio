
'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-8 mt-16 relative">
      <div className="container mx-auto text-center">
        <p className="text-lg font-serif">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-gray-400 hover:text-white transform hover:scale-125 transition duration-300"
          >
            <FaEnvelope className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Reusable ContactForm modal */}
      {/* <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={()=> setIsModalOpen(false)} /> */}
      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </footer>
  );
}

