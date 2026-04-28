import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="About" className="relative w-full px-6 sm:px-12 lg:px-24 py-20 flex flex-col items-center">
            
            <div className="w-full max-w-6xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                    <span className="text-[#f28e63]">/</span> about_me
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl text-gray-300 font-medium text-base sm:text-lg md:text-xl leading-relaxed">
                    I build technology to simplify complexity and rethink how things should work, not just how they have always worked.
                    As a Computer Science student and full stack developer, I design products that scale, feel intuitive, and solve real human problems.
                    <br /><br />
                    Let’s connect on LinkedIn or GitHub.
                </motion.p>

                {/* Skill Cards Row 1 */}
                <div className="flex flex-col lg:flex-row gap-6 mt-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-3xl p-8 text-white transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-[#f28e63]">Front-end</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                            ReactJS / NextJS / Typescript / Vite / Tailwind / SCSS
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-3xl p-8 text-white transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-[#f28e63]">Languages & Tools</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                            Java / Python / C / C++ / Javascript / AWS / GCP
                        </p>
                    </motion.div>
                </div>

                {/* Skill Cards Row 2 */}
                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="w-full lg:w-2/3 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-3xl p-8 text-white transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-[#f28e63]">Backend</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                            MongoDB / Node / Express / Firebase
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="w-full lg:w-1/3 bg-gradient-to-br from-[#f28e63]/20 to-transparent border border-[#f28e63]/30 backdrop-blur-md rounded-3xl p-8 flex items-center justify-center text-center transition-all duration-300">
                        <p className="text-white font-medium text-base sm:text-lg italic">
                            Crafting solutions, stacking skills, and building with flair
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
