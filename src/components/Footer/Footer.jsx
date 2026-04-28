import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="footer"
        >
        <footer className="w-full bg-[#121212]/80 backdrop-blur-md border-t border-white/10 mt-20 py-8 relative z-10">
            <div className="w-full mx-auto max-w-6xl px-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-400 sm:text-center">© 2026 <a href="#Home" className="hover:text-[#f28e63] transition-colors duration-300">Prableen Singh</a>. Full Stack Developer in Faridabad, India. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-4 md:mt-0 text-sm font-medium text-gray-400">
                <li>
                    <a href="#Home" className="hover:text-[#f28e63] transition-colors duration-300 me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#About" className="hover:text-[#f28e63] transition-colors duration-300 me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#Work" className="hover:text-[#f28e63] transition-colors duration-300 me-4 md:me-6">Work</a>
                </li>
                <li>
                    <a href="#Projects" className="hover:text-[#f28e63] transition-colors duration-300">Projects</a>
                </li>
            </ul>
            </div>
        </footer>
        </motion.div>
    )
}

export default Footer
