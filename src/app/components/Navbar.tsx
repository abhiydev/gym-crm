"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 bg-opacity-80 px-4 py-6 transition-all duration-300 fade-in fade-out ${isScrolled ? "bg-black/50 backdrop-blur-xl" : ""}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <Link href="/" className="text-white">logoHere</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Plans", path: "/plans" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-gray-300 transition px-4 py-2 rounded-md hover:bg-white/10"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          {isLoggedIn ? (
            <button
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => router.push("/profile")}
            >
              Profile
            </button>
          ) : (
            <button
              className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => router.push("/signup")}
            >
              Get Started
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center p-6 space-y-4 text-white animate-slide-down ${isScrolled ? "bg-black backdrop-blur-xl" : ""}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Plans", path: "/plans" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <button
              key={item.name}
              className="text-lg py-2 w-full text-center hover:text-gray-300"
              onClick={() => {
                setMenuOpen(false);
                router.push(item.path);
              }}
            >
              {item.name}
            </button>
          ))}

          {isLoggedIn ? (
            <button
              className="bg-white text-black px-6 py-2 rounded-md w-full text-center hover:bg-gray-200"
              onClick={() => {
                setMenuOpen(false);
                router.push("/profile");
              }}
            >
              Profile
            </button>
          ) : (
            <button
              className="bg-white text-black px-6 py-2 rounded-md w-full text-center hover:bg-gray-200"
              onClick={() => {
                setMenuOpen(false);
                router.push("/signup");
              }}
            >
              Get Started
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
