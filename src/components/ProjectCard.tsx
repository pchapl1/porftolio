'use client';

import { FC } from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl: string;  
}

export default function ProjectCard({

    title, description, techStack, features, liveUrl, githubUrl, imageUrl

}: ProjectCardProps) {

    return (
        <motion.div
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition-all overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {/* Project Image */}
          <div className="h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover"
            />
          </div>
    
          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
            </div>
    
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
    
            <ul className="list-disc list-inside text-sm text-zinc-700 dark:text-zinc-300">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
    
            <div className="flex gap-4 items-center">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  <RiExternalLinkLine size={16} /> Live Site
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:underline text-sm"
                >
                  <FaGithub size={16} /> GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      );

}
