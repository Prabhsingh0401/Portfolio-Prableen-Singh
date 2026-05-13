import { motion } from 'framer-motion';

const Projects = () => {
  const buttons0 = ["NextJS", "Node.js", "GCP", "LaTeX", "MongoDB", "Python"];
  const buttons1 = ["NextJS", "Firebase", "Google Cloud", "MongoDB", "Node.js", "AWS"];
  const buttons2 = ["React", "GCP", "MongoDB", "Node.js", "Express"];
  const buttons3 = ["React", "Node.js", "Express", "MongoDB"];
  const buttons4 = ["React Remix", "Tailwind CSS", "LocalStorage"];
  const buttons5 = ["JavaScript"];

  return (
    <section id="Projects" className="relative w-full px-6 sm:px-12 lg:px-24 py-20 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-20">
            <span className="text-[#f28e63]">/</span> projects
        </motion.h2>

        {/* Barry CLI */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">Barry CLI</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {buttons5.map((button, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-body)] rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#f28e63] hover:text-[#f28e63] transition-all duration-300"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-medium">
              Barry takes your base resume JSON, a LaTeX template, and a Job Description, then leverages the Groq LLM API to rewrite your resume specifically for that role <br /> <br />
              The project recently crossed more than 300+ downloads in just a week, reflecting strong early interest and traction from developers.            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-3xl group overflow-hidden border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-shadow)]">
              <img
                src="/barry_cli.png"
                alt="Barry CLI - command-line tool interface"
                loading="lazy"
                className="w-full h-auto transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[var(--bg-overlay)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="#"
                  className="pointer-events-auto text-white bg-[var(--bg-elevated)] border border-[var(--border-hover)] backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-medium shadow-xl whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 0 - Prashan */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 lg:gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">Prashan</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {buttons0.map((button, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-body)] rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#f28e63] hover:text-[#f28e63] transition-all duration-300"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-medium">
              A full-stack AI platform with custom RAG pipeline, LaTeX rendering, and board-specific curriculum mapping for Indian teachers. <br /><br />
              50+ waitlisted users and 2K+ Google impressions via SEO and GEO.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-3xl group overflow-hidden border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-shadow)]">
              <img
                src="/prashan.png"
                alt="Prashan - AI question paper generator platform built with NextJS, Node.js, MongoDB showing curriculum mapping interface"
                loading="lazy"
                className="w-full h-auto transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[var(--bg-overlay)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="https://prashan.co.in/"
                  className="pointer-events-auto text-white bg-[var(--bg-elevated)] border border-[var(--border-hover)] backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-medium shadow-xl whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 1 - Sheetal */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">Sheetal</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {buttons1.map((button, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-body)] rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#f28e63] hover:text-[#f28e63] transition-all duration-300"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-medium">
              Scaleable e-commerce platform featuring a Google-like search tolerance system. <br /><br />
              Engineered a high-speed backend resolving complex typos and multi-attribute database queries in under two seconds, ensuring accurate results and seamless user experiences.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-3xl group overflow-hidden border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-shadow)]">
              <img
                src="/sheetal.png"
                alt="Sheetal - E-commerce platform with Google-like search tolerance built with NextJS, Firebase, MongoDB"
                loading="lazy"
                className="w-full h-auto transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[var(--bg-overlay)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="https://sheetal-omega.vercel.app/"
                  className="pointer-events-auto text-white bg-[var(--bg-elevated)] border border-[var(--border-hover)] backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-medium shadow-xl whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 lg:gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">Embrace Spectrum <span className="text-[#f28e63] text-xl block mt-2">for Neuro Diverse</span></h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {buttons2.map((button, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-body)] rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#f28e63] hover:text-[#f28e63] transition-all duration-300"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-medium">
              Top 150 Google Solution Challenge project: A research-backed, neuro-inclusive platform on Google Cloud. <br /><br />
              Uses Gemini for empathetic AI interactions and a sensory-friendly UI to support well-being, communication, and personal growth.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-3xl group overflow-hidden border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-shadow)]">
              <img
                src="/embracespectrum.png"
                alt="Embrace Spectrum platform interface"
                loading="lazy"
                className="w-full h-auto transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[var(--bg-overlay)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="https://embrace-spectrum-neuro.vercel.app/"
                  className="pointer-events-auto text-white bg-[var(--bg-elevated)] border border-[var(--border-hover)] backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-medium shadow-xl whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">Enterprise Supply Chain & Warranty System</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {buttons2.map((button, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-body)] rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#f28e63] hover:text-[#f28e63] transition-all duration-300"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-medium">
              Enterprise platform managing product lifecycles across 9+ roles. <br /><br />
              Engineered a high-performance backend handling 10,000+ bulk orders and a comprehensive API for location-based pincode mapping across India, ensuring seamless production releases.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-3xl group overflow-hidden border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-shadow)]">
              <img
                src="/ujala.png"
                alt="Ujala enterprise supply chain platform"
                loading="lazy"
                className="w-full h-auto transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[var(--bg-overlay)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="https://ujalapump.com/login"
                  className="pointer-events-auto text-white bg-[var(--bg-elevated)] border border-[var(--border-hover)] backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-medium shadow-xl whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 lg:gap-16 mb-10">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">Form Builder</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {buttons3.map((button, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[var(--text-body)] rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#f28e63] hover:text-[#f28e63] transition-all duration-300"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="text-[var(--text-body)] text-base sm:text-lg leading-relaxed font-medium">
              No code drag and drop form builder with live preview and offline support. <br /><br />
              Enables sharing, and CSV export using browser storage. Built responsive and accessible UI with template support and adaptive rendering for fast form creation.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-3xl group overflow-hidden border border-[var(--border)] shadow-2xl transition-all duration-500 hover:shadow-[var(--accent-shadow)]">
              <img
                src="/formify.png"
                alt="Form Builder drag-and-drop interface"
                loading="lazy"
                className="w-full h-auto transition-all duration-500 ease-in-out group-hover:blur-[6px] group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[var(--bg-overlay)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="https://form-builder-alpha-ten.vercel.app/"
                  className="pointer-events-auto text-white bg-[var(--bg-elevated)] border border-[var(--border-hover)] backdrop-blur-md px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-medium shadow-xl whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
