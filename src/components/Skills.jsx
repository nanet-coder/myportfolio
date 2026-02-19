export default function Skills() {
    const skills = [
        { name: "HTML", color: "bg-orange-500", rating: "80%" },
        { name: "CSS", color: "bg-blue-500", rating: "75%" },
        { name: "JavaScript", color: "bg-yellow-400 text-black", rating: "85%" },
        { name: "React", color: "bg-cyan-500", rating: "80%" },
        { name: "Tailwind", color: "bg-sky-400", rating: "70%" },
        { name: "Node", color: "bg-green-500", rating: "65%" },
        { name: "Git", color: "bg-red-500", rating: "80%" },
        { name: "GitHub", color: "bg-gray-800", rating: "75%" },
        { name: "Flutter", color: "bg-blue-400", rating: "60%" },
        { name: "Bootstrap", color: "bg-purple-500", rating: "70%" },
        { name: "MySQL", color: "bg-blue-600", rating: "75%" },
        { name: "Spring Boot", color: "bg-green-600", rating: "65%" },
        { name: "Laravel", color: "bg-red-600", rating: "60%" },
        { name: "PostgreSQL", color: "bg-indigo-500", rating: "70%" },
        { name: "UX/UI", color: "bg-pink-500", rating: "80%" },
    ];

    const isFewSkills = skills.length <= 6;

    return (
        <section id="skills" className="py-16 px-2 w-full">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
                My Skills
            </h2>

            {/* Scrollable container */}
            <div className="overflow-x-auto no-scrollbar">
                <div
                    className={`flex gap-4 py-4 min-w-max ${isFewSkills ? "justify-center w-full" : ""}`}
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-sm md:text-base font-semibold text-white shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:shadow-xl bg-white/20 backdrop-blur-sm`}
                        >
                            {/* Skill Name */}
                            <span className="text-center">{skill.name}</span>

                            {/* Rating */}
                            {skill.rating && (
                                <span className="text-xs text-white/80 mt-1">{skill.rating}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
