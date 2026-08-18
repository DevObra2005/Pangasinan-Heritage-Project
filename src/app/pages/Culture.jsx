import HeritageGrid from "../components/HeritageGrid";

const culture = [
  {
    title: "Bagoong",
    location: "Fermented Fish Paste",
    image: "/Images/Bagoong.jpg",
    description: "Pangasinan's beloved fermented fish paste — a savory staple in local cooking.",
    bestFor: "Local Cuisine",
    type: "culture",
    tags: ["🐟 Fermented", "🍚 Local Staple"],
  },
  {
    title: "Bonuan Bangus",
    location: "Dagupan",
    image: "/Images/Bangus.jpg",
    description: "Dagupan's prized milkfish, famed as the tastiest in the Philippines.",
    bestFor: "Local Delicacy",
    type: "culture",
    tags: ["🐟 Milkfish", "⭐ World-Class"],
  },
  {
    title: "Pista'y Dayat",
    location: "Lingayen",
    image: "/Images/PistayDayat.jpg",
    description: "Pangasinan's beloved Sea Festival — a coastal thanksgiving to the bounty of Lingayen Gulf.",
    bestFor: "Cultural Festival",
    type: "culture",
    tags: ["🌊 Sea Festival", "🎉 Held Every May"],
  },
  {
    title: "Puto Calasiao",
    location: "Calasiao",
    image: "/Images/Puto.jpg",
    description: "Soft, bite-sized steamed rice cakes — a sweet local delicacy.",
    bestFor: "Sweet Delicacy",
    type: "culture",
    tags: ["🍚 Rice Cake", "🍯 Sweet Treat"],
  },
  {
    title: "Salt-Making",
    location: "Coastal Towns",
    image: "/Images/Salt.jpg",
    description: "The traditional salt beds that gave Pangasinan its name.",
    bestFor: "Living Tradition",
    type: "culture",
    tags: ["🧂 Salt Beds", "📜 Heritage Craft"],
  },
  {
    title: "Bangus Festival",
    location: "Dagupan",
    image: "/Images/Festival.jpg",
    description: "A vibrant celebration of the milkfish with street dancing and feasts.",
    bestFor: "Cultural Festival",
    type: "culture",
    tags: ["🎊 Street Dancing", "🐟 Milkfish Feast"],
  },
];

export default function Culture({ onViewMore }) {
  return (
    <section
      id="culture"
      className="relative px-6 md:px-16 py-20 overflow-hidden bg-heritage-green"
    >
      <div className="absolute inset-0 backdrop-blur-xl bg-heritage-green/70"></div>

      {/* Content sits above everything */}
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-sm tracking-[0.3em] text-heritage-cream/50 uppercase">
            Living Traditions
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-heritage-cream mt-3">
            Culture and Heritage
          </h2>
          <p className="mt-4 text-lg text-heritage-cream/60 max-w-2xl mx-auto">
            The flavors, language, and traditions that make Pangasinan's
            heritage come alive.
          </p>
        </div>

        <HeritageGrid items={culture} columns={4} theme="glass" onViewMore={onViewMore} />
      </div>
    </section>
  );
}