import HeritageGrid from "../components/HeritageGrid";

const spots = [
  {
    title: "Hundred Islands",
    location: "Alaminos",
    image: "/Images/HundredIsland.jpg",
    description: "Over a hundred limestone islets — perfect for island hopping and snorkeling.",
  },
  {
    title: "Bolinao Beach",
    location: "Bolinao",
    image: "/Images/Bolinao.jpg",
    description: "White-sand beaches, a century-old lighthouse, and fresh coastal seafood.",
  },
  {
    title: "Bolinao Falls",
    location: "Bolinao",
    image: "/Images/BolinaoFalls.jpg",
    description: "Turquoise cascades tucked in the hills — a cool, refreshing inland escape.",
  },
  {
    title: "Bolinao Lighthouse",
    location: "Bolinao",
    image: "/Images/BolinaoLightHouse.jpg",
    description: "A 1905 beacon on Punta Piedra Point — the country's second-tallest lighthouse.",
  },
  {
    title: "Malico",
    location: "San Nicolas",
    image: "/Images/Malico.jpg",
    description: "The 'Little Baguio of Pangasinan' — cool mountain air and rolling grasslands.",
  },
  {
    title: "Colibra Island",
    location: "Dasol",
    image: "/Images/ColibraIsland.jpg",
    description: "A tiny, uninhabited coralline island — once called Snake Island.",
  },
];

export default function Discover() {
  return (
    <section id="discover" className="bg-heritage-cream px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span data-aos="fade-up" className="text-sm tracking-[0.3em] text-heritage-green/50 uppercase">
            Explore the Province
          </span>
          <h2 data-aos="fade-up" className="font-serif text-4xl md:text-5xl text-heritage-green mt-3">
            Discover Pangasinan
          </h2>
          <p data-aos="fade-up" className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From scattered islands to hidden waterfalls, explore the places
            that make Pangasinan unforgettable.
          </p>
        </div>
        <HeritageGrid items={spots} columns={4} theme="light" />
      </div>
    </section>
  );
}