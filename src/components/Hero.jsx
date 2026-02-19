import { useState, useEffect } from "react";

export default function Hero() {
    const texts = [
        "Frontend Developer",
        "React Enthusiast",
        "Tailwind CSS Designer",
        "Building Modern Web Apps",
    ];

    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const type = () => {
            const fullText = texts[textIndex];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }

            setSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(type, speed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, textIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center px-6 md:px-60"
        >
            <div className="max-w-2xl text-white space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Hi! Everyone
                </h1>

                <h2 className="text-3xl font-bold">
                    Welcome to my Portfolio!
                </h2>

                <h3 className="text-4xl font-bold">
                    I'm Sok Lim Houn
                </h3>

                {/* Typing text */}
                <p className="text-xl text-gray-200 h-8">
                    {currentText}
                    <span className="border-r-2 border-white animate-blink ml-1"></span>
                </p>

                <div className="flex gap-4 mt-6">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Cursor animation */}
            <style>
                {`
                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s step-start infinite;
                }
                `}
            </style>
        </section>
    );
}
