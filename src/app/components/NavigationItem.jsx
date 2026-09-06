import Link from "next/link";

export default function NavigationItem({ label, href, isActive, onClick }) {
  return (
    <li className="relative group">
      <Link href={href} onClick={onClick} className="nav-link">
        {label}
      </Link>
      <span
        className="nav-link-underline"
        style={{ width: isActive ? "100%" : "0%" }}
      ></span>
      <span className="nav-link-underline w-0 group-hover:w-full"></span>
    </li>
  );
}