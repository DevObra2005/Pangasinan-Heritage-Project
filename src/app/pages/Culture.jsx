import HeritageGrid from "../components/HeritageGrid";

const culture = [
  {
    title: "Bagoong",
    image: "/Images/Bagoong.jpg",
    description:
      "Pangasinan's beloved fermented fish paste — a savory staple that gives local dishes their unmistakable depth of flavor.",
  },
  {
    title: "Bonuan Bangus",
    image: "/Images/Bangus.jpg",
    description:
      "The prized milkfish of Dagupan, widely considered the tastiest in the Philippines thanks to the region's unique brackish waters.",
  },
  {
    title: "Pangasinan Language",
    image: "/Images/Language.jpg",
    description:
      "One of the province's living treasures — a rich Austronesian tongue spoken by millions and carried through generations.",
  },
  {
    title: "Puto Calasiao",
    image: "/Images/Puto.jpg",
    description:
      "Soft, bite-sized steamed rice cakes from Calasiao — a sweet delicacy famous across the region and beyond.",
  },
  {
    title: "Salt-Making",
    image: "/Images/Salt.jpg",
    description:
      "The traditional salt beds that gave Pangasinan its name — panag-asinan, the place where salt is made.",
  },
  {
    title: "Bangus Festival",
    image: "/Images/Festival.jpg",
    description:
      "Dagupan's vibrant celebration of the milkfish, featuring street dancing, feasts, and the famous longest-grill spectacle.",
  },
];

export default function Culture() {
  return (
    <section id="culture" className="bg-heritage-green px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
    
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-heritage-cream">
            Culture and Heritage
          </h2>
          <p className="mt-4 text-lg text-heritage-cream/60 max-w-2xl mx-auto">
            The flavors, language, and traditions that make Pangasinan's
            heritage come alive.
          </p>
        </div>

        {/* Cards with Load More */}
        <HeritageGrid items={culture} columns={3} theme="glass" />
      </div>
    </section>
  );
}