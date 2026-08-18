"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../components/Button";
import "../CSS/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#home", id: "home" },
    { label: "Discover", href: "/#discover", id: "discover" },
    { label: "Culture", href: "/#culture", id: "culture" },
  ];

  // Detect scroll to toggle glass
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for active section
  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`nav-bar text-heritage-cream ${scrolled ? "scrolled" : "at-top"}`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="nav-logo-circle">P</div>
          <span className="font-bold font-serif transition-colors duration-300 group-hover:text-yellow-200">
            Pangasinan Heritage
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href} className="relative group">
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
                <span
                  className="nav-link-underline"
                  style={{ width: isActive ? "100%" : "0%" }}
                ></span>
                <span className="nav-link-underline w-0 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Button href="#visit" className="hidden md:block" variant="secondary">
          Visit Pangasinan
        </Button>

        {/* Hamburger */}
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

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
        <div className="nav-mobile-panel">
          <ul className="flex flex-col gap-2 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-xl transition-colors ${
                      isActive ? "bg-heritage-cream/10 text-yellow-200" : "hover:bg-heritage-cream/5 hover:text-yellow-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <Button href="#visit" onClick={() => setIsOpen(false)} className="w-full" variant="secondary">
              Visit Pangasinan
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}