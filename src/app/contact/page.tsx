"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Navbar } from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

export default function Contact() {
  const router = useRouter();

  // Contact form state & handlers
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here (e.g., API call)
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm bg-gray-800/80">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            We would love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-16 space-y-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Address & Google Maps Section */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FaMapMarker className="mr-2" /> Our Location
              </h2>
              <p className="mb-4">
                <span className="font-semibold">Address:</span> 123 Fitness Ave,
                Gym City, GC 12345
              </p>
              <p className="mb-2 flex items-center">
                <FaPhone className="mr-2" /> (123) 456-7890
              </p>
              <p className="mb-4 flex items-center">
                <FaEnvelope className="mr-2" /> info@gymdomain.com
              </p>
              <button
                onClick={() =>
                  router.push(
                    "https://www.google.com/maps/place/123+Fitness+Ave,+Gym+City,+GC+12345"
                  )
                }
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-400 transition duration-300 flex items-center justify-center"
              >
                <FaMapMarker className="mr-2" /> Open in Google Maps
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b3%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
  }