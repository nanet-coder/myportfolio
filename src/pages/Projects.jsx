import { useState, useEffect } from "react";

export default function Projects() {

    const projects = [
        {
            title: "Portfolio Website",
            desc: "Personal portfolio built with React and Tailwind CSS",
            img: "https://images.unsplash.com/photo-1605902711622-cfb43c4439b9?auto=format&fit=crop&w=800&q=80",
            url: "https://systemcafe.vercel.app/#", // your own project (modal iframe works)
        },
        {
            title: "System of save Money",
            desc: "Task management app with clean UI and state handling",
            img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
            url: "https://system-my-finance.vercel.app/", // your own project
        },
        {
            title: "Facebook",
            desc: "External social media website",
            img: "https://images.unsplash.com/photo-1523475496153-3bcd0fdf7b37?auto=format&fit=crop&w=800&q=80",
            url: "https://webs-lyart-nine.vercel.app/", // external, open new tab
        },
        {
            title: "YouTube",
            desc: "External video platform",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
            url: "https://cvpersonal.vercel.app/", // external, open new tab
        },

        {
            title: "Blog Platform",
            desc: "Full-stack blog using React and Node.js",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            url: " https://testapp-nine-black.vercel.app/", // your own project
        },
        {
            title: "Blog Platform",
            desc: "Full-stack blog using React and Node.js",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            url: "https://personal-wine-five.vercel.app/", // your own project
        },
        {
            title: "Blog Platform",
            desc: "Full-stack blog using React and Node.js",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            url: "/", // your own project
        },
        {
            title: "Blog Platform",
            desc: "Full-stack blog using React and Node.js",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
            url: "/", // your own project
        },
    ];


    const [openProject, setOpenProject] = useState(null);

    // 🔒 Disable background scroll when modal open
    useEffect(() => {
        document.body.style.overflow = openProject ? "hidden" : "auto";
    }, [openProject]);

    return (
        <section id="projects" className="py-24 px-4 max-w-full mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

            {/* Horizontal Scroll */}
            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="min-w-[280px] max-w-xs bg-white/10  rounded-xl p-4 hover:bg-white/20 transition"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="rounded-lg mb-4 w-full h-40 object-cover"
                        />

                        <h3 className="text-lg font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3">
                            {project.desc}
                        </p>

                        <button
                            onClick={() => setOpenProject(project)}
                            className="text-blue-400 text-sm hover:underline"
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>

            {/* ================= MODAL ================= */}
            {openProject && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-3">

                    {/* Modal Box */}
                    <div
                        className="
              bg-white dark:bg-gray-900
              w-full
              max-w-[95vw] md:max-w-6xl
              h-[90vh] md:h-auto
              rounded-xl
              p-3 md:p-6
              relative
              animate-fadeIn
            "
                    >
                        {/* Close */}
                        <button
                            onClick={() => setOpenProject(null)}
                            className="absolute top-2 right-2 md:top-4 md:right-4
                         text-gray-500 hover:text-black dark:hover:text-white
                         text-2xl font-bold"
                        >
                            ✕
                        </button>

                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                            {openProject.title}
                        </h3>

                        {/* Iframe */}
                        <iframe
                            src={openProject.url}
                            title={openProject.title}
                            className="
                w-full
                h-[65vh] md:h-[700px]
                border rounded-lg
              "
                        />
                    </div>
                </div>
            )}
        </section>
    );
}






