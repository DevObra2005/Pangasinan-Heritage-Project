import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}) {
  const base = "px-6 py-3 rounded-full font-medium transition-colors duration-300";

  const variants = {
    primary: "bg-heritage-green text-heritage-cream hover:bg-heritage-green/90",
    secondary: "bg-heritage-cream text-heritage-green hover:bg-white",
    outlinelight: "border border-heritage-green text-heritage-green hover:bg-heritage-green hover:text-heritage-cream",
    outlineglass: "border border-heritage-cream text-heritage-cream hover:bg-heritage-cream hover:text-heritage-green",
  };

  const classes = `${base} ${variants[variant]} ${className}`;


  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}