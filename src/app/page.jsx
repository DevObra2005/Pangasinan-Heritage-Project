"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./components/Button";
import "./CSS/home.css";
import Loader from "./pages/Loader";
import Discover from "./pages/Discover";
import Culture from "./pages/Culture";
import PlanVisit from "./pages/PlanVisit";
import SpotDetail from "./components/HeritageCardDetails";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/Images/Bolinao.jpg",
  "/Images/BolinaoFalls.jpg",
  "/Images/HundredIsland.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selectedSpot, setSelectedSpot] = useState(null);

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

  useEffect(() => {
    if (selectedSpot) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [selectedSpot]);

  if (selectedSpot) {
    return (
      <SpotDetail
        spot={selectedSpot}
        onBack={() => setSelectedSpot(null)}
      />
    );
  }

  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen overflow-hidden"
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
            className={`hero-image object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0"></div>

        {/* Hero text */}
        <div className="relative max-w-3xl" data-aos="fade-up">
          <span className="hero-eyebrow">Ilocos Region · Philippines</span>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-heritage-cream leading-tight drop-shadow-lg">
            Discover <span className="hero-accent">Pangasinan</span>
          </h1>

          <p className="font-serif italic text-lg md:text-2xl text-heritage-cream/90 mt-5 drop-shadow-md">
            The land where salt was born and legends endure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" href="#discover">
              Discover More
            </Button>
            <Button variant="outlineglass" href="#about">
              Learn the Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#discover"
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-heritage-cream/80 animate-bounce hover:text-heritage-cream transition-colors"
        >
          <span className="text-md">SCROLL DOWN TO EXPLORE</span>
          <span className="text-2xl">↓</span>
        </a>
      </section>

      {/* Floating glass stats card */}
      <div
        className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-20"
        data-aos="fade-up"
      >
        <div className="bg-heritage-cream/10 backdrop-blur-md border border-heritage-cream/25 rounded-3xl grid grid-cols-3 py-6 px-4">
          <div className="text-center border-r border-heritage-cream/20 px-2">
            <p className="font-serif text-2xl md:text-4xl text-heritage-cream">3.1M</p>
            <p className="text-[10px] md:text-xs text-heritage-cream/70 tracking-[0.15em] mt-1">
              POPULATION
            </p>
          </div>
          <div className="text-center border-r border-heritage-cream/20 px-2">
            <p className="font-serif text-2xl md:text-4xl text-heritage-cream">44</p>
            <p className="text-[10px] md:text-xs text-heritage-cream/70 tracking-[0.15em] mt-1">
              TOWNS
            </p>
          </div>
          <div className="text-center px-2">
            <p className="font-serif text-2xl md:text-4xl text-heritage-cream">4</p>
            <p className="text-[10px] md:text-xs text-heritage-cream/70 tracking-[0.15em] mt-1">
              CITIES
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT PANGASINAN */}
      <section id="about" className="about-section px-6 md:px-16 py-28">
        <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          {/* Text */}
          <div data-aos="fade-up">
            <span className="about-eyebrow">About the Province</span>

            <h2 className="font-serif text-4xl md:text-5xl text-heritage-cream mt-5 mb-6 leading-tight">
              A Province Shaped by
              <span className="block text-[#e0b877]">Salt, Sea, and Story</span>
            </h2>

            <p className="text-heritage-cream/70 leading-relaxed text-lg mb-4">
              Pangasinan is a coastal province in the Ilocos Region of Luzon, with
              its capital at Lingayen. Its name comes from panag-asin-an — "the
              place where salt is made" — earning it the title Salt Capital of the
              Philippines.
            </p>
            <p className="text-heritage-cream/70 leading-relaxed text-lg mb-8">
              Home to over three million Pangasinenses, it blends Malayo-Polynesian,
              Hispanic, Chinese, and American influences — from the Hundred Islands
              of Alaminos to the famous 3Bs: Bangus, Bocayo, and Bagoong.
            </p>

            {/* Inline stats */}
            <div className="flex flex-wrap gap-6 md:gap-8 mt-8">
              <div className="about-stat">
                <div className="about-stat-num">5,451</div>
                <div className="about-stat-label">KM² AREA</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">1580</div>
                <div className="about-stat-label">FOUNDED</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">Lingayen</div>
                <div className="about-stat-label">CAPITAL</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div data-aos="fade-up" className="about-map h-80 lg:h-[28rem]">
            <iframe
              src="https://www.google.com/maps?q=Pangasinan,Philippines&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Map of Pangasinan"
            ></iframe>
          </div>
        </div>
      </section>
      <Loader />
      <Discover onViewMore={setSelectedSpot} />
      <Culture onViewMore={setSelectedSpot} />
      <PlanVisit />
    </>
  );
}