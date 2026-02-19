export default function About() {
    return (
        <section
            id="about"
            className="py-28 px-6 max-w-6xl mx-auto"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT: IMAGE */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                        alt="Developer workspace"
                        className="rounded-2xl shadow-lg"
                    />

                    {/* soft overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-black/20"></div>
                </div>

                {/* RIGHT: CONTENT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About Me
                    </h2>

                    <p className="text-gray-200 text-lg leading-relaxed mb-8">
                        I am a passionate Frontend Developer specializing in building
                        modern, responsive, and user-friendly web applications.
                        I focus on clean code, performance, and great user experience.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="backdrop-blur bg-white/10 p-5 rounded-xl border border-white/20">
                            <h3 className="font-semibold text-lg mb-1">
                                Frontend
                            </h3>
                            <p className="text-gray-300 text-sm">
                                React, Tailwind, HTML, CSS, JavaScript
                            </p>
                        </div>

                        <div className="backdrop-blur bg-white/10 p-5 rounded-xl border border-white/20">
                            <h3 className="font-semibold text-lg mb-1">
                                Tools
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Git, GitHub, Vite, VS Code
                            </p>
                        </div>

                        <div className="backdrop-blur bg-white/10 p-5 rounded-xl border border-white/20 sm:col-span-2">
                            <h3 className="font-semibold text-lg mb-1">
                                Goal
                            </h3>
                            <p className="text-gray-300 text-sm">
                                Build real-world projects and grow as a professional developer
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
