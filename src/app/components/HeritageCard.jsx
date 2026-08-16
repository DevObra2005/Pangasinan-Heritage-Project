"use client";

import Image from "next/image";
import "../CSS/heritagecard.css";

export default function HeritageCard({ image, title, description, location, href = "#" }) {
  return (
   <a href={href} className="view-card group flex flex-col rounded-2xl overflow-hidden h-full">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="view-image object-cover"
        />
      </div>

      
      <div className="view-body relative p-5 flex flex-col flex-1">
        {location && (
          <span className="view-pin block mb-1.5">📍 {location}</span>
        )}
        <h3 className="view-title font-serif text-xl mb-2">{title}</h3>
        <p className="view-desc text-sm leading-relaxed">{description}</p>

        <span className="view-more inline-flex items-center gap-1.5 mt-auto pt-3 text-sm font-semibold">
          View More
          <span className="view-arrow">→</span>
        </span>
      </div>
    </a>
  );
}