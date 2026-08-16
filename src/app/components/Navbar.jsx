"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "/#home", id: "home" },
    { label: "Discover", href: "/#discover", id: "discover" },
    { label: "Culture", href: "/#culture", id: "culture" },
  ];

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-heritage-green/90 backdrop-blur-md text-heritage-cream px-6 md:px-16 py-3 shadow-lg">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-heritage-cream text-heritage-green flex items-center justify-center font-bold text-lg font-serif transition-transform duration-300 group-hover:scale-110">
            P
          </div>
          <span className="font-bold transition-colors duration-300 group-hover:text-yellow-200">
            Pangasinan Heritage
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href} className="relative group">
                <Link href={link.href} className="py-2">
                  {link.label}
                </Link>
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-yellow-200 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA button */}
        <Button href="#visit" className="hidden md:block" variant="secondary">
          Visit Pangasinan
        </Button>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-heritage-cream transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-heritage-cream transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-heritage-cream transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-1 hover:text-yellow-200 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="w-full" variant="secondary">
          Visit Pangasinan
        </Button>
      </div>
    </nav>
  );
}