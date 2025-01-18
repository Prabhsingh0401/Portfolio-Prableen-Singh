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
            year: "Sep 2024 - Dec 2024",
            duration: "4 months",
            company: "PayMe Fintech",
            role: "Web Developer",
            stack: "React & Figma",
        },
    ];

    return (
        <div id="Work" className="mt-10 mb-10">
            <h1 className="text-5xl font-extrabold mb-10 ml-10 text-white">Work</h1>
            <div className="flex flex-col ml-10 mr-10">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-3 gap-5 lg:gap-60 items-center border-t border-b border-white/40 text-white py-5 hover:bg-white/10 transition duration-300 ease-in-out"
                    >
                        <div className="text-left ml-5">
                            <span className="block lg:text-xl text-sm">{exp.year}</span>
                            <span className="block text-sm">{exp.duration}</span>
                        </div>
                        <div className="text-left">
                            <span className="block text-lg font-bold">{exp.company}</span>
                            <span className="block text-sm">{exp.role}</span>
                        </div>
                        <div className="text-left text-sm">{exp.stack}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
