"use client";

import { useState } from "react";

export default function MapEmbed({ query, title, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  if (loaded) {
    return (
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
        className={className}
      ></iframe>
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className={`group relative w-full h-full min-h-full overflow-hidden cursor-pointer ${className}`}
      aria-label={`Load interactive map of ${title}`}
    >
      {/* Static map-style background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #a8c8b0 0%, #8fb89a 25%, #b4d0bc 50%, #9ac2a5 75%, #a8c8b0 100%)",
        }}
      >
        {/* Fake map grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#4a7a5a 1px, transparent 1px), linear-gradient(90deg, #4a7a5a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Overlay + button */}
      <div className="absolute inset-0 bg-heritage-green/30 group-hover:bg-heritage-green/20 transition-colors flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-full bg-heritage-cream flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <span className="text-2xl">📍</span>
        </div>
        <span className="bg-heritage-cream text-heritage-green text-sm font-semibold px-5 py-2 rounded-full shadow-md">
          View Interactive Map
        </span>
      </div>
    </button>
  );
}