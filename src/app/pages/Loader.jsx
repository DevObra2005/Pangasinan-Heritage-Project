"use client";

import { useState, useEffect } from "react";
import "../CSS/loader.css";

const quotes = [
  "Home to a hundred islands and countless stories.",
  "Where every shore holds a piece of history.",
  "Salt, sea, and soul — the heart of the north.",
];

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Rotate quotes every 1.4s
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // fade out
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(false); // fade in new quote
      }, 500);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  // Hide the loader after 2.8s
  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-screen ${hidden ? "hidden" : ""}`}>
      <span className="loader-eyebrow">Ilocos Region · Philippines</span>
      <h1 className="loader-title">
        Pangasinan <span>Heritage</span>
      </h1>

      <div className="loader-track">
        <div className="loader-fill"></div>
      </div>

      <p className={`loader-quote ${fade ? "fade" : ""}`}>
        {quotes[quoteIndex]}
      </p>
    </div>
  );
}