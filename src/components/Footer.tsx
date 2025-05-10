'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
    setIsModalOpen(false);
  };

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

      {/* Modal */}
      {isModalOpen && (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg w-96 shadow-lg transform transition-all duration-300 scale-95 opacity-0 animate-fadeScale">
            <h2 className="text-2xl mb-4 text-gray-800">Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-2 rounded text-gray-800 placeholder-gray-400"
                required
                />
                <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-2 rounded text-gray-800 placeholder-gray-400"
                required
                />
                <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-2 rounded text-gray-800 placeholder-gray-400"
                rows={4}
                required
                ></textarea>
                <button
                type="submit"
                className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
                >
                Send
                </button>
                <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:underline text-sm mt-2"
                >
                Cancel
                </button>
            </form>
            </div>
        </div>
        )}

    </footer>
  );
}
