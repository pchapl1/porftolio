'use client';

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectSection () {

    return (
        <section id="projects" className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-zinc-900 dark:text-white">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
      </section>
    )
}