
"use client";

import { useEffect, useState } from "react";
 
const FORM_SPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_ID;

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    if (!FORM_SPREE_URL) {
        console.log('not found url')
        setError("Formspree URL not configured.");
        return;
      }

    try {
        const res = await fetch(FORM_SPREE_URL, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div
        className="bg-white p-8 rounded-lg w-96 shadow-lg transform transition-all duration-300 scale-95 opacity-0 animate-fadeScale"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl mb-4 text-gray-800">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">Message sent! Closing...</p>}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded text-gray-800 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-gray-300 p-2 rounded text-gray-800 placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 p-2 rounded text-gray-800 placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
          >
            Send
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:underline text-sm mt-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
