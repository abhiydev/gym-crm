"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { MdFitnessCenter } from "react-icons/md"; // Added a fitness-related icon

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-gray-800/80">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            <MdFitnessCenter className="inline-block mr-2" /> Discover our journey, our passion, and our commitment to your fitness.
          </p>
        </motion.div>
      </section>

      {/* Our Story & Facility Sections */}
      <section className="py-16 px-4 md:px-16 space-y-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-300 text-lg">
                Founded with a passion for fitness and community, our gym has grown into a state-of-the-art facility where individuals of all levels can achieve their personal best. We believe that fitness is not just about physical strength but also about building a supportive community.
              </p>
              <p className="text-gray-300 text-lg">
                Our expert trainers, modern equipment, and inclusive environment empower you to push past your limits and transform your life.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={"/hero1.jpg"} // Updated image URL to ensure it works
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Our Facility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={"/hero2.jpg"}
                  alt="Our Facility"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Facility</h2>
              <p className="text-gray-300 text-lg">
                Step into our modern facility designed to inspire and motivate. With cutting-edge equipment and a variety of classes, we cater to every fitness journey. Whether you’re looking for high-intensity workouts, personal training, or a supportive community, you’ll find it here.
              </p>
              <p className="text-gray-300 text-lg">
                Experience the blend of technology and comfort as you work toward a healthier, happier you.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
