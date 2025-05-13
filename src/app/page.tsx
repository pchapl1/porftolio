'use client';
import Image from "next/image";
import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import Modal from "@/components/Modal";


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
  // const handleContactClick = () => {
  //   setShowContactForm(true);
  // }

  // const closeContactForm = () => {
  //   setShowContactForm(false);
  // }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero onContactClick = {openContactForm} />
        {/* <ContactForm isOpen={showContactForm} onClose={closeContactForm}/> */}
                {/* Modal wrapping the ContactForm */}
        <Modal isOpen={showContactForm} onClose={closeContactForm}>
          <ContactForm isOpen={showContactForm} onClose={closeContactForm} />
        </Modal>

      
      </main>
 
    </div>
  );
}
