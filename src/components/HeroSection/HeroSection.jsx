import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section
            id="Home"
            className="relative w-full min-h-[80vh] pt-32 lg:pt-48 pb-12 lg:pb-16 px-6 sm:px-12 flex flex-col items-center justify-center"
            aria-label="Hero section introducing Prableen Singh, Full Stack Developer"
        >
            {/* Background Glow Effect */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] sm:w-[60vw] lg:w-[40vw] h-[30vh] bg-[#f28e63]/15 blur-[120px] rounded-full pointer-events-none -z-10"
            ></motion.div>

            <div className="flex flex-col justify-center items-center w-full max-w-6xl z-10 text-center">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-300 font-medium text-xl sm:text-xl md:text-2xl lg:text-2xl leading-relaxed mb-6 lg:mb-10"
                >
                    Hi, I'm <span className="text-[#f28e63] font-semibold">Prableen Singh</span>
                </motion.p>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="animated-gradient font-bold tracking-tight leading-tight w-full text-6xl sm:text-6xl md:text-7xl lg:text-[7.5rem] gradient-text pb-2 px-2"
                >
                    Full Stack Developer
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-8 w-full max-w-4xl text-gray-300 font-medium text-xl sm:text-xl md:text-2xl lg:text-2xl leading-relaxed"
                >
                    Full Stack Developer based in India. I build scalable web applications with modern technologies and frameworks.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;
