"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-[var(--reddish-black)] border-solid border-b-2
                ${scrolled ? "bg-[var(--off-white)] bg-opacity-100 h-16 shadow-md" : "bg-[var(--off-white-tp)] h-24"}`}
        >
            <div className="max-w-7xl mx-auto px-4 relative flex items-center h-full">
                {/* Logo - left aligned */}
                <div className="h-24 w-24 overflow-hidden">
                    <img
                        src="/icons/dates-shop.png"
                        width="200"
                        height="200"
                        className={`object-cover transition-transform duration-300 ease-in-out ${scrolled ? "scale-100" : "scale-150"}`}
                        alt="DatesShop logo"
                    />
                </div>
            
                {/* Nav links - centered */}
                <ul className="text-[20pt] absolute left-1/2 -translate-x-1/2 flex gap-15 text-[var(--reddish-black)]">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="about" className="hover:underline">About</a></li>
                    <li><a href="contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
            
        </nav>
    );
}
