"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Image from "next/image";

export default function PlanVisit() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selected, setSelected] = useState("Hundred Islands");

  const spots = [
    {
      name: "Hundred Islands",
      area: "Alaminos",
      category: "Island",
      tag: "🏝️ Island Hopping",
      blurb: "Over a hundred limestone islets, perfect for island hopping.",
      bestTime: "Nov – April",
      image: "/Images/HundredIsland.jpg",
    },
    {
      name: "Bolinao White Sand Beach",
      area: "Bolinao",
      category: "Beach",
      tag: "🏖️ Beach",
      blurb: "White sand, calm waters, and fresh coastal seafood nearby.",
      bestTime: "Nov – April",
      image: "/Images/Bolinao.jpg",
    },
    {
      name: "Bolinao Falls",
      area: "Bolinao",
      category: "Waterfall",
      tag: "💧 Waterfall",
      blurb: "Turquoise cascades tucked into the hills, great for a swim.",
      bestTime: "June – Oct",
      image: "/Images/BolinaoFalls.jpg",
    },
    {
      name: "Bolinao Lighthouse",
      area: "Bolinao",
      category: "Historic",
      tag: "🗼 Historic",
      blurb: "A 1905 beacon on Punta Piedra Point — scenic sunset views.",
      bestTime: "Year-round",
      image: "/Images/BolinaoLightHouse.jpg",
    },
    {
      name: "Malico",
      area: "San Nicolas",
      category: "Mountain",
      tag: "⛰️ Mountain",
      blurb: "Cool mountain air and rolling grasslands, quiet and scenic.",
      bestTime: "Dec – Feb",
      image: "/Images/Malico.jpg",
    },
    {
      name: "Colibra Island",
      area: "Dasol",
      category: "Island",
      tag: "🏕️ Camping",
      blurb: "A tiny uninhabited coralline island, great for sunsets.",
      bestTime: "March – May",
      image: "/Images/ColibraIsland.jpg",
    },
  ];

  const categories = ["All", "Island", "Beach", "Waterfall", "Historic", "Mountain"];

  const filteredSpots = spots.filter((spot) => {
    const matchesQuery =
      spot.name.toLowerCase().includes(query.toLowerCase()) ||
      spot.area.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilter === "All" || spot.category === activeFilter;
    return matchesQuery && matchesFilter;
  });

  const selectedSpot = spots.find((s) => s.name === selected);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    selected + ", Pangasinan, Philippines"
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    selected + ", Pangasinan, Philippines"
  )}`;

  return (
    <section id="visit" className="bg-heritage-cream px-6 md:px-16 py-24 overflow-hidden">
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

        {/* Search + filters */}
        <div className="mb-8 space-y-4" data-aos="fade-up">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search a tourist spot..."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-heritage-green text-heritage-cream border-heritage-green"
                    : "bg-white text-heritage-green/70 border-gray-200 hover:border-heritage-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 items-start">
          {/* Spot list */}
          <div
            data-aos="fade-up"
            className="lg:col-span-2 grid gap-3 max-h-[550px] overflow-y-auto pr-2"
          >
            {filteredSpots.length > 0 ? (
              filteredSpots.map((spot) => {
                const isSelected = selected === spot.name;
                return (
                  <button
                    key={spot.name}
                    onClick={() => setSelected(spot.name)}
                    className={`flex items-center gap-4 text-left rounded-2xl p-3 border transition-all duration-300 ${
                      isSelected
                        ? "bg-heritage-green text-heritage-cream border-heritage-green shadow-lg scale-[1.02]"
                        : "bg-white text-heritage-green border-gray-100 hover:border-heritage-green hover:shadow-md"
                    }`}
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image src={spot.image} alt={spot.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg truncate">{spot.name}</h3>
                      <p
                        className={`text-xs ${
                          isSelected ? "text-heritage-cream/70" : "text-gray-500"
                        }`}
                      >
                        {spot.area}
                      </p>
                      <span
                        className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-heritage-cream/20"
                            : "bg-heritage-green/10 text-heritage-green"
                        }`}
                      >
                        {spot.tag}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <p className="text-gray-500 italic">No spots match "{query}".</p>
            )}
          </div>

          {/* Map + info card */}
          <div data-aos="fade-up" className="lg:col-span-3 sticky top-24 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                key={mapSrc}
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`Map of ${selected}`}
              ></iframe>
            </div>

            {selectedSpot && (
              <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-heritage-green">
                      {selectedSpot.name}
                    </h3>
                    <p className="text-sm text-gray-500">{selectedSpot.area} · Best time: {selectedSpot.bestTime}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-heritage-green/10 text-heritage-green whitespace-nowrap">
                    {selectedSpot.tag}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedSpot.blurb}</p>
                
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-2 bg-heritage-green text-heritage-cream rounded-full py-2.5 px-6 text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Get Directions →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}