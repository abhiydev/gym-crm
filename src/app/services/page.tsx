"use client";
import React from "react";
import Card from "@/components/magicui/Card";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function ServicesPage() {
  const cards = [
    {
      imageUrl: "/card1.png",
      imageAlt: "Strength Training",
      title: "Strength Training",
      description:
        "Personal training is a one-on-one session with a trainer who will create a customized workout plan for you based on your goals, fitness level, and preferences.",
      lastUpdated: "2024-01-01",
    },
    {
      imageUrl: "/card2.png",
      imageAlt: "Muscle Building",
      title: "Muscle Building",
      description:
        "Personal training is a one-on-one session with a trainer who will create a customized workout plan for you based on your goals, fitness level, and preferences.",
      lastUpdated: "2024-01-01",
    },
    {
      imageUrl: "/card3.png",
      imageAlt: "Personal Training",
      title: "Personal Training",
      description:
        "Personal training is a one-on-one session with a trainer who will create a customized workout plan for you based on your goals, fitness level, and preferences.",
      lastUpdated: "2024-01-01",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />

        <section className="relative bg-gray-900 text-white py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl max-w-[90%] mx-auto font-bold uppercase mt-10 tracking-wide mb-8 text-center">
          Our Services
        </h2>
        <div className="mt-10">
          <Card cards={cards} />
        </div>
      </section>

      <Footer />
    </main>
  );
}