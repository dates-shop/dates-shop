"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
    border-[var(--reddish-black)] border-solid border-b-2
    ${scrolled ? "bg-[var(--off-white)] bg-opacity-100 h-16 shadow-md" : "bg-[var(--off-white-tp)] h-24"}`;

  const linkClasses = "block px-4 py-2 hover:underline text-[var(--reddish-black)]";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 relative flex items-center h-full">
        {/* Logo */}
        <div className="h-24 w-24 overflow-hidden">
          <img
            src="/icons/dates-shop.png"
            width="200"
            height="200"
            className={`object-cover transition-transform duration-300 ease-in-out ${scrolled ? "scale-100" : "scale-150"}`}
            alt="DatesShop logo"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-[20pt]">
          <li><a href="/" className={linkClasses}>Home</a></li>
          <li><a href="/dashboard" className={linkClasses}>Dashboard</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden ml-auto p-2 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--off-white)] border-t border-[var(--reddish-black)]">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a
                href="/"
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

