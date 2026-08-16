"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function PlanVisit() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Pangasinan");

  const spots = [
    { name: "Hundred Islands", area: "Alaminos" },
    { name: "Bolinao White Sand Beach", area: "Bolinao" },
    { name: "Bolinao Falls", area: "Bolinao" },
    { name: "Bolinao Lighthouse", area: "Bolinao" },
    { name: "Malico", area: "San Nicolas" },
    { name: "Colibra Island", area: "Dasol" },
  ];

  // Filter spots by search text (matches name or area)
  const filteredSpots = spots.filter(
    (spot) =>
      spot.name.toLowerCase().includes(query.toLowerCase()) ||
      spot.area.toLowerCase().includes(query.toLowerCase())
  );

  // Build the map URL from the selected place
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    selected + ", Pangasinan, Philippines"
  )}&output=embed`;

  return (
    <section id="visit" className="bg-heritage-cream px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-sm tracking-[0.3em] text-heritage-green/50 uppercase">
            Explore the Map
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-heritage-green mt-3">
            Plan Your Visit
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Search a destination and see it on the map — start planning your
            Pangasinan adventure.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-12" data-aos="fade-up">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search a tourist spot..."
          />
        </div>

     
        <div className="grid gap-8 lg:grid-cols-2 items-start">
      
          <div data-aos="fade-right" className="grid gap-3">
            {filteredSpots.length > 0 ? (
              filteredSpots.map((spot) => (
                <button
                  key={spot.name}
                  onClick={() => setSelected(spot.name)}
                  className={`flex items-center gap-4 text-left rounded-2xl p-5 border transition-all duration-300 ${
                    selected === spot.name
                      ? "bg-heritage-green text-heritage-cream border-heritage-green"
                      : "bg-white text-heritage-green border-gray-100 hover:border-heritage-green"
                  }`}
                >
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-serif text-xl">{spot.name}</h3>
                    <p
                      className={`text-sm ${
                        selected === spot.name
                          ? "text-heritage-cream/70"
                          : "text-gray-500"
                      }`}
                    >
                      {spot.area}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <p className="text-gray-500 italic">
                No spots match "{query}".
              </p>
            )}
          </div>

          {/* Map */}
          <div data-aos="fade-left" className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[450px]">
            <iframe
              key={mapSrc}
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Map of ${selected}`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}