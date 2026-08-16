"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./components/Button";
import Discover from "./pages/Discover";
import Culture from "./pages/Culture";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/Images/Bolinao.jpg",
  "/Images/BolinaoFalls.jpg",
  "/Images/HundredIsland.jpg",
  
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Initialize AOS (Animate On Scroll) library
 useEffect(() => {
  AOS.init({
    duration: 1000,
  });
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen relative flex flex-col items-center justify-center text-center px-6"
      >
        {/* Background slideshow */}
        {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Pangasinan scenery"
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-heritage-green/40 via-heritage-green/30 to-heritage-green/60"></div>

        <div className="relative max-w-3xl">
          <h1
            data-aos="fade-up"
            className="font-serif text-5xl md:text-7xl font-bold text-heritage-cream leading-tight drop-shadow-lg">
            Discover Pangasinan
          </h1>

          <p 
          data-aos="fade-right" 
          className="font-serif italic text-lg md:text-2xl text-heritage-cream/90 mt-4 drop-shadow-md">
            The land where salt was born and legends endure.
          </p>

          <div className="mt-8">
            <Button variant="primary" href="#discover">
              Discover More
            </Button>
          </div>
        </div>

    
        <a href="#discover" className="absolute bottom-23 left-1/2 -translate-x-1/2 flex flex-col items-center text-heritage-cream/80 animate-bounce hover:text-heritage-cream transition-colors">
          <span className="text-xs tracking-[0.3em]">SCROLL</span>
          <span className="text-2xl">↓</span>
        </a>
      </section>
        
   
      <Discover />

      <Culture />
    </>
  );
}