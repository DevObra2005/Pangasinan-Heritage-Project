import Image from "next/image";
import MapEmbed from "./MapEmbed";
import "../CSS/heritagecarddetails.css";

export default function SpotDetail({ spot, onBack }) {
  const isPlace = spot.type !== "culture";

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    spot.title + ", " + spot.location + ", Pangasinan"
  )}`;

  return (
    <div className="sd-page">
      {/* Hero */}
      <div className="sd-hero">
        <Image src={spot.image} alt={spot.title} fill priority sizes="100vw" className="sd-hero-img" />
        <div className="sd-hero-overlay"></div>

        <button onClick={onBack} className="sd-back" aria-label="Go back">
          ←
        </button>

        <div className="sd-hero-text">
          <div className="sd-eyebrow">{spot.location}</div>
          <h1 className="sd-title">{spot.title}</h1>
        </div>
      </div>

      {/* Floating card */}
      <div className="sd-body">
        <div className="sd-card">
          {/* Tag chips */}
          {spot.tags && spot.tags.length > 0 && (
            <div className="sd-chips">
              {spot.tags.map((tag) => (
                <span key={tag} className="sd-chip">{tag}</span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="sd-desc">{spot.longDescription || spot.description}</p>

          {/* Stats */}
          <div className="sd-stats">
            <div>
              <div className="sd-stat-label">{isPlace ? "Location" : "Origin"}</div>
              <div className="sd-stat-value">{spot.location}</div>
            </div>
            {spot.bestFor && (
              <div>
                <div className="sd-stat-label">{isPlace ? "Best For" : "Known For"}</div>
                <div className="sd-stat-value">{spot.bestFor}</div>
              </div>
            )}
            {spot.bestTime && (
              <div>
                <div className="sd-stat-label">Best Time</div>
                <div className="sd-stat-value">{spot.bestTime}</div>
              </div>
            )}
          </div>

          {/* Map + Directions — only for places */}
          {isPlace && (
            <>
              <div className="sd-map">
                <MapEmbed
                  query={`${spot.title}, ${spot.location}, Pangasinan`}
                  title={`Map of ${spot.title}`}
                />
              </div>

              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="sd-btn">
                📍 Get Directions
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}