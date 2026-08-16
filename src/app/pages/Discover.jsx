import HeritageGrid from "../components/HeritageGrid";

const spots = [
  {
    title: "Hundred Islands",
    image: "/Images/HundredIsland.jpg",
    description:
      "Over a hundred limestone islets scattered across Alaminos — Pangasinan's most iconic natural wonder, perfect for island hopping and snorkeling.",
  },
  {
    title: "Bolinao White Sand Beach",
    image: "/Images/Bolinao.jpg",
    description:
      "A coastal town famed for its century-old lighthouse, white-sand beaches, and fresh seafood on the edge of the West Philippine Sea.",
  },
  {
    title: "Bolinao Falls",
    image: "/Images/BolinaoFalls.jpg",
    description:
      "Turquoise cascades tucked in the hills of Bolinao — a refreshing inland escape surrounded by lush greenery and cool, clear pools.",
  },
  {
    title: "Bolinao Lighthouse",
    image: "/Images/BolinaoLightHouse.jpg",
    description:
      "Built in 1905 atop rocky Punta Piedra Point, this historic beacon is the Philippines' second-tallest lighthouse, offering sweeping views of the West Philippine Sea.",
  },
  {
    title: "Malico - San Nicolas",
    image: "/Images/Malico.jpg",
    description:
      "The 'Little Baguio of Pangasinan' — a cool, high-elevation mountain village along the Villa Verde Trail, known for pine-scented air and rolling grasslands.",
  },
  {
    title: "Colibra Island - Dasol",
    image: "/Images/ColibraIsland.jpg",
    description:
      "A tiny, uninhabited coralline island off Dasol Bay — once called Snake Island — ringed with white sand and prized for camping and sunset views.",
  },
];

export default function Discover() {
  return (
    <section id="discover" className="bg-heritage-cream px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 data-aos="slide-up" className="font-serif text-4xl md:text-5xl text-heritage-green">
            Discover Pangasinan
          </h2>
          <p data-aos="slide-up" className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From scattered islands to hidden waterfalls, explore the places
            that make Pangasinan unforgettable.
          </p>
        </div>
        <HeritageGrid items={spots} columns={3} theme="light" />
      </div>
    </section>
  );
}