import Image from "next/image";

export default function HeritageCard({ image, title, description, theme = "light" }) {
  const styles = {
    light: {
      card: "bg-white border-gray-200 hover:shadow-xl",
      title: "text-heritage-green",
      text: "text-gray-600",
    },
    glass: {
      card: "bg-heritage-cream/10 backdrop-blur-md border-heritage-cream/20 hover:bg-heritage-cream/15",
      title: "text-heritage-cream",
      text: "text-heritage-cream/75",
    },
  };

  const style = styles[theme];

  return (
    <div className={`group rounded-2xl overflow-hidden border transition-all duration-300 h-full flex flex-col ${style.card}`}>
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="p-6">
        <h3 className={`font-serif text-2xl mb-2 ${style.title}`}>{title}</h3>
        <p className={`leading-relaxed ${style.text}`}>{description}</p>
      </div>
    </div>
  );
}