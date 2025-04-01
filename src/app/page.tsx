"use client";

import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Card from "@/components/magicui/Card";
import CoachesCard from "./components/coachesCard";
import ScheduleGrid from "./components/ScheduleGrid";
import Pricing from "./components/Pricing";
import GoogleMaps from "./components/googleMaps";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();

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

  const coaches = [
    {
      imageUrl: "/coach1.png",
      imageAlt: "Coach 1",
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl: "/coach2.png",
      imageAlt: "Coach 2",
      name: "Jane Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl: "/coach3.png",
      imageAlt: "Coach 3",
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageUrl: "/coach4.png",
      imageAlt: "Coach 4",
      name: "Jane Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const images: string[] = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(handleNext, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, images]);

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm bg-gray-800/80">
        <Navbar />
      </div>

      <div className="relative h-screen">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentIndex]}
              variants={heroVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt="Hero Background"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Body
            <br />
            Transform Your Life
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300 sm:text-xl">
            Join Kamiy Gym and start your fitness journey today. Our expert
            trainers and state-of-the-art facilities are here to help you achieve
            your goals.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => router.push("/signup")}
              className="hover:bg-gray-700 bg-gray-800 text-white shadow-lg px-6 py-2 rounded-md transition duration-300"
            >
              Get Started
            </button>
            <InteractiveHoverButton
              onClick={() => router.push("/plans")}
              className="hover:bg-gray-200 bg-white text-gray-900 transition duration-300"
            >
              View Plans
            </InteractiveHoverButton>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={handlePrev}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
              aria-label="Previous"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
              aria-label="Next"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      <section className="relative bg-gray-900 text-white py-16 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl max-w-[90%] mx-auto font-bold uppercase tracking-wide mb-8 text-center">
          What We Offer
        </h2>
        <div className="mt-10">
          <Card cards={cards} />
        </div>
      </section>

      <section className="relative bg-gray-900 text-white py-16 px-8 md:px-16">
        <div className="w-[90%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 text-center">
            About Our Gym
          </h2>
          <AspectRatio
            ratio={isMobile ? 16 / 9 : 31 / 9}
            className="rounded-2xl overflow-hidden w-full mb-8"
          >
            <Image
              src="/about.png"
              alt="About Us"
              width={1200}
              height={600}
              className="object-cover"
            />
          </AspectRatio>
          <div className={`flex flex-col md:flex-row items-center max-w-[90%] mx-auto ${isMobile ? 'mb-4 -mt-2' : 'mb-0'}`}>
            <p className="flex-1 text-sm md:text-lg text-gray-300 text-start mb-4 md:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
              venenatis. Suspendisse potenti.
            </p>
            <div className="mt-4 md:mt-0 md:ml-8">
              <button
                onClick={() => router.push("/about")}
                className="hover:bg-gray-700 bg-gray-800 text-white shadow-lg px-4 py-2 rounded-md min-w-[128px]"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-900 text-white md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl max-w-[90%] mx-auto font-bold uppercase tracking-wide text-center">
          Our Coaches
        </h2>
        <p className="text-gray-300 text-sm md:text-lg mb-4 md:px-16 text-center">
          Our coaches are here to help you achieve your goals. They are all
          certified and have years of experience in the fitness industry.
        </p>
        <div className="mt-10 flex justify-center items-center sm:flex-row flex-col gap-4">
          <CoachesCard coachesProps={coaches} />
        </div>
      </section>

      <section className="relative text-white md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl max-w-[90%] mx-auto font-bold uppercase tracking-wide text-center">
          Our Schedule
        </h2>
        <div className="max-w-[90%] mx-auto mt-4 flex flex-col items-center justify-center">
          <ScheduleGrid />
          <button
            onClick={() => router.push("/about")}
            className="hover:bg-gray-700 bg-gray-800 text-white shadow-lg px-4 py-2 rounded-md min-w-[128px] mt-4"
          >
            Read More
          </button>
        </div>
      </section>
      <Pricing />
      <GoogleMaps />
      <Footer />
    </main>
  );
}
