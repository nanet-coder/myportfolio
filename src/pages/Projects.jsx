


import { useState, useEffect } from "react";

export default function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            desc: "Personal portfolio built with React and Tailwind CSS",
            img: "https://images.unsplash.com/photo-1605902711622-cfb43c4439b9?auto=format&fit=crop&w=800&q=80",
            url: "https://systemcafe.vercel.app/#",
        },
        {
            title: "Money Saving System",
            desc: "Finance management system with clean UI",
            img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
            url: "https://system-my-finance.vercel.app/",
        },
        {
            title: "Social Media UI",
            desc: "Facebook-like frontend interface",
            img: "https://images.unsplash.com/photo-1523475496153-3bcd0fdf7b37?auto=format&fit=crop&w=800&q=80",
            url: "https://webs-lyart-nine.vercel.app/",
        },
        {
            title: "Personal Website",
            desc: "Modern personal website with animations",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            url: "https://cvpersonal.vercel.app/",
        },
        {
            title: "Blog Platform",
            desc: "Full-stack blog using React and Node.js",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            url: "https://testapp-nine-black.vercel.app/",
        },
        {
            title: "Personal Blog",
            desc: "Minimal blog with modern UI",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            url: "https://personal-wine-five.vercel.app/",
        },
    ];


    const [openProject, setOpenProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow = openProject ? "hidden" : "auto";
    }, [openProject]);

    return (
        <section
            id="projects"
            className="py-24 px-4 bg-gray-900 text-white overflow-hidden"
        >
            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                Projects
            </h2>

            {/* ===== MOBILE: HORIZONTAL SCROLL ===== */}
            <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onOpen={setOpenProject}
                        mobile
                    />
                ))}
            </div>

            {/* ===== DESKTOP: GRID ===== */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onOpen={setOpenProject}
                    />
                ))}
            </div>

            {/* ===== MODAL ===== */}
            {openProject && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
                    <div className="bg-gray-900 w-full max-w-6xl h-[90vh] rounded-2xl p-4 relative animate-fadeIn">
                        <button
                            onClick={() => setOpenProject(null)}
                            className="absolute top-3 right-4 text-2xl text-white/60 hover:text-white"
                        >
                            ✕
                        </button>

                        <h3 className="text-xl font-bold mb-4">
                            {openProject.title}
                        </h3>

                        <iframe
                            src={openProject.url}
                            title={openProject.title}
                            className="w-full h-full rounded-xl border border-white/10"
                        />
                    </div>
                </div>
            )}

            {/* ANIMATIONS */}
            <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { scrollbar-width: none; }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
        </section>
    );
}

/* ================= PROJECT CARD ================= */
function ProjectCard({ project, onOpen, mobile }) {
    return (
        <div
            className={`
        group relative overflow-hidden rounded-3xl bg-white/10 border border-white/20 backdrop-blur
        transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:scale-110
        ${mobile ? "min-w-[90%] snap-center" : ""}
      `}
        >
            {/* IMAGE */}
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-end">
                <div className="p-6 w-full">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white
            translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-300 mb-4
            translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        {project.desc}
                    </p>

                    <button
                        onClick={() => onOpen(project)}
                        className="
              px-5 py-3 rounded-full text-sm md:text-base font-medium
              bg-white/20 backdrop-blur hover:bg-white hover:text-black
              translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-500 delay-300
            "
                    >
                        View Project →
                    </button>
                </div>
            </div>
        </div>
    );
}

