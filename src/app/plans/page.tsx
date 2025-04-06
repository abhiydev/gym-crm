"use client";

import Footer from "../components/Footer";
import GoogleMaps from "../components/googleMaps";
import { Navbar } from "../components/Navbar";
import Pricing from "../components/Pricing";

import React from 'react'

const Plans = () => {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Pricing />
      <GoogleMaps />
      <Footer />
    </main>
  );
};

export default Plans
