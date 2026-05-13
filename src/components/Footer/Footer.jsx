import { motion } from "framer-motion";
import logo from "/portfoliologo.svg";

const Footer = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="footer relative"
        >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <h2 className="text-[12vw] md:text-[10vw] font-bold text-[var(--text-primary)] opacity-[0.03] whitespace-nowrap select-none" style={{ textShadow: '0 0 80px rgba(255,255,255,0.15)' }}>
                Prableen Singh
            </h2>
        </div>
        <footer className="w-full bg-[var(--bg-nav)] backdrop-blur-md border-t border-[var(--border)] mt-20 py-8 relative z-10">
            <div className="w-full mx-auto max-w-6xl px-6 md:flex md:items-center md:justify-between">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
                <span className="text-sm text-[var(--text-muted)] sm:text-center">© 2026 <a href="#Home" className="hover:text-[#f28e63] transition-colors duration-300">Prableen Singh</a>. All Rights Reserved.
                </span>
            </div>
            <ul className="flex flex-wrap items-center mt-4 md:mt-0 text-sm font-medium text-[var(--text-muted)]">
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
