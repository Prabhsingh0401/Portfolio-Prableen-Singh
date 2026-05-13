import { motion } from 'framer-motion';

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
            year: "July 2025 - March 2026",
            duration: "8 months",
            company: "NEECOP Consultants",
            role: "Software Developer",
            stack: "MERN, AWS, GCP",
        },
        {
            year: "Oct 2025 - March 2026",
            duration: "6 months",
            company: "Encrobytes Technologies",
            role: "Software Developer",
            stack: "MERN, AWS, GCP",
        },
    ];

    return (
        <section id="Work" className="relative w-full px-6 sm:px-12 lg:px-24 py-20 flex flex-col items-center">
            
            <div className="w-full max-w-6xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-10">
                    <span className="text-[#f28e63]">/</span> experience
                </motion.h2>

                <div className="flex flex-col border-t border-[var(--border)]">

                    {experiences.map((exp, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            key={index}
                            className="border-b border-[var(--border)] text-[var(--text-primary)] py-8 px-4 sm:px-8 hover:bg-[var(--bg-hover)] hover:backdrop-blur-sm transition-all duration-300 ease-in-out group cursor-default"
                        >

                            {/* Mobile Layout */}
                            <div className="flex flex-col gap-3 lg:hidden">
                                <div>
                                    <p className="text-sm font-medium text-[#f28e63]">
                                        {exp.year} • {exp.duration}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[#f28e63] transition-colors">
                                        {exp.company}
                                    </p>
                                    <p className="text-base text-[var(--text-body)] mt-1">
                                        {exp.role}
                                    </p>
                                </div>
                                <div className="text-sm font-medium text-[var(--text-muted)] mt-2">
                                    {exp.stack}
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
                                <div className="col-span-3 text-left">
                                    <span className="block text-lg font-medium text-[#f28e63]">
                                        {exp.year}
                                    </span>
                                    <span className="block text-sm text-[var(--text-muted)] mt-1">
                                        {exp.duration}
                                    </span>
                                </div>

                                <div className="col-span-5 text-left">
                                    <span className="block text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#f28e63] transition-colors">
                                        {exp.company}
                                    </span>
                                    <span className="block text-base text-[var(--text-body)] mt-1">
                                        {exp.role}
                                    </span>
                                </div>

                                <div className="col-span-4 text-right text-base font-medium text-[var(--text-muted)]">
                                    {exp.stack}
                                </div>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Work;
