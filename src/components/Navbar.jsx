import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 text-white">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <h1 className="font-bold text-xl tracking-widest">HOUN</h1>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 text-sm uppercase">
                    <a href="#home" className="hover:text-gray-300">
                        Home
                    </a>
                    <a href="#skills" className="hover:text-gray-300">
                        Skills
                    </a>
                    <a href="#about" className="hover:text-gray-300">
                        About
                    </a>
                    <a href="#projects" className="hover:text-gray-300">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-gray-300">
                        Contact
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur w-full absolute top-full left-0 flex flex-col items-center py-4 space-y-4 text-white uppercase text-lg">
                    <a
                        href="#home"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Home
                    </a>
                    <a
                        href="#skills"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Skills
                    </a>
                    <a
                        href="#about"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-gray-300"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-gray-300"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}
