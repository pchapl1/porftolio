// // components/Hero.tsx
// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
// import { div } from "framer-motion/client";

// interface HeroProps {
//   onContactClick: () => void;
// }

// export default function Hero({ onContactClick }: HeroProps) {

//   return (
//     <section className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 text-center">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6"
//       >
//         Hi, I'm <span className="text-blue-600">Phil</span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//         className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-2xl"
//       >
//         I build modern, responsive websites and web applications.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.4, duration: 0.6 }}
//       >
//         <button
//           onClick={()=> {
//             console.log("hero contact clicked");
//             onContactClick();

//             }} // Call onContactClick prop on click
//           className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
//         >
//           Contact Me
//         </button>
//       </motion.div>

//       {/* Optional: Decorative Blobs or Background Effects */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-[-1]"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 z-[-1]"></div>


//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer text-blue-600 dark:text-blue-400"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >

//       </motion.div>
//     </section>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa'; // 👈 react-icons version of ChevronDown

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6"
      >
        Hi, I'm <span className="text-blue-600">Phil</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-2xl"
      >
        I build modern, responsive websites and web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button
          onClick={() => {
            console.log('hero contact clicked');
            onContactClick();
          }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg"
        >
          Contact Me
        </button>
      </motion.div>

      {/* Optional: Decorative Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob z-[-1]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 z-[-1]"></div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer text-blue-600 dark:text-blue-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#projects" aria-label="Scroll to projects">
          <FaChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
