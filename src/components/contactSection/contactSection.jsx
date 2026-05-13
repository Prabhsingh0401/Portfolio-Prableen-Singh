import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="Contact" className="relative w-full px-6 sm:px-12 lg:px-24 py-20 flex flex-col items-center">
            
            <div className="w-full max-w-6xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-10">
                    <span className="text-[#f28e63]">/</span> contact
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-6">

                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 bg-[var(--bg-elevated)] backdrop-blur-md border border-[var(--border)] hover:border-[var(--border-hover)] rounded-3xl p-8 text-[var(--text-primary)] transition-all duration-300">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#f28e63]">Email</h3>
                        <p className="text-base sm:text-lg font-medium text-[var(--text-body)] break-all">
                            prableensingh0401@gmail.com
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full lg:w-1/2 bg-[var(--bg-elevated)] backdrop-blur-md border border-[var(--border)] hover:border-[var(--border-hover)] rounded-3xl p-8 text-[var(--text-primary)] transition-all duration-300">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#f28e63]">Phone</h3>
                        <p className="text-base sm:text-lg font-medium text-[var(--text-body)]">
                            +91 9560310449
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full mt-8 bg-gradient-to-br from-[var(--accent-bg)] to-transparent border border-[var(--accent-border)] backdrop-blur-md rounded-3xl p-8 text-center transition-all duration-300">
                    <p className="text-[var(--text-primary)] font-medium text-lg sm:text-xl italic">
                        Open to collaborations, projects, and conversations around building meaningful technology.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
