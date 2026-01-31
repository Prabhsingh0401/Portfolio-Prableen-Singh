const Work = () => {
    const experiences = [
        {
            year: "Oct 2024 - Dec 2024",
            duration: "3 months",
            company: "DevNBrand",
            role: "Frontend Developer",
            stack: "React & Tailwind",
        },
        {
            year: "July 2025 - Present",
            duration: "Ongoing",
            company: "NEECOP Consultants",
            role: "Software Developer",
            stack: "MERN, AWS, GCP",
        },
        {
            year: "Oct 2025 - Present",
            duration: "Ongoing",
            company: "Encrobytes Technologies",
            role: "Software Developer",
            stack: "MERN, AWS, GCP",
        },
    ];

    return (
        <section id="Work" className="mt-10 mb-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 ml-5 lg:ml-10 text-white">
                Work
            </h2>

            <div className="flex flex-col ml-5 mr-5 lg:ml-10 lg:mr-10">

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border-t border-b border-white/40 text-white py-6 hover:bg-white/10 transition duration-300 ease-in-out"
                    >

                        {/* Mobile Layout */}
                        <div className="flex flex-col gap-2 lg:hidden">

                            <div>
                                <p className="text-sm opacity-70">
                                    {exp.year} • {exp.duration}
                                </p>
                            </div>

                            <div>
                                <p className="text-lg font-bold">
                                    {exp.company}
                                </p>
                                <p className="text-sm">
                                    {exp.role}
                                </p>
                            </div>

                            <div className="text-sm opacity-80">
                                {exp.stack}
                            </div>

                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden lg:grid grid-cols-3 gap-20 items-center">

                            <div className="text-left">
                                <span className="block text-xl">
                                    {exp.year}
                                </span>
                                <span className="block text-sm">
                                    {exp.duration}
                                </span>
                            </div>

                            <div className="text-left">
                                <span className="block text-lg font-bold">
                                    {exp.company}
                                </span>
                                <span className="block text-sm">
                                    {exp.role}
                                </span>
                            </div>

                            <div className="text-left text-sm">
                                {exp.stack}
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Work;
