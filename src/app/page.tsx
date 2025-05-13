'use client';

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";


const ProjectSection = dynamic( ()=> import('@/components/ProjectSection'), {
  ssr: false,
  loading: ()=> <div className="text-gray-500 mt-20">Loading projects...</div>,
})

export default function Home() {

  useEffect(() => {
    // Check user's system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const [ showContactForm, setShowContactForm ] = useState(false);
  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      
      {/* Hero Section: Fullscreen & centered */}
      <section className="min-h-screen flex items-center justify-center px-8 sm:px-20">
        <Hero onContactClick={openContactForm} />
      </section>

      {/* Modal for Contact Form */}
      <Modal isOpen={showContactForm} onClose={closeContactForm}>
        <ContactForm isOpen={showContactForm} onClose={closeContactForm} />
      </Modal>

      {/* 👇 Lazy-loaded project section */}
      <div id="projects" className="w-full">
        <ProjectSection />
      </div>

    </div>

  );

}
