const Projects = () => {
  const buttons1 = ["React", "GCP", "MongoDB", "Node.js", "Express"];
  const buttons2 = ["React", "Node.js", "Express", "MongoDB"];
  const buttons3 = ["React Remix", "Tailwind CSS", "LocalStorage"];

  return (
    <div id="Projects" className="projects w-full mb-10 mt-20 px-5 lg:px-10">
      <div>
        <h2 className="text-3xl font-bold">export default Projects...</h2>

        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
          <div className="w-full lg:w-[40vw]">
            <h3 className="text-2xl">Embrace Spectrum – for Neuro Diverse</h3>

            <div className="flex flex-wrap gap-2 mt-4">
              {buttons1.map((button, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed">
              AI powered platform on Google Cloud supporting neurodiverse users
              in well being, communication, and personal growth.
              <br />
              <br />
              Provides real time AI interactions, sentiment aware document
              parsing, and accessible adaptive UI focused on inclusive and
              sensory friendly experiences.
            </p>
          </div>

          <div className="w-full lg:w-[50vw]">
            <div className="relative w-full rounded-xl group overflow-hidden">
              <img
                src="../../src/assets/embraceSpectrumSampleImage.png"
                alt="Embrace Spectrum platform interface"
                loading="lazy"
                className="w-full h-auto rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
              />

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <a
                  href="https://embrace-spectrum-neuro.vercel.app/"
                  className="pointer-events-auto text-black border border-black px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10 mt-20">
          <div className="w-full lg:w-[40vw]">
            <h3 className="text-2xl">
              Enterprise Supply Chain & Warranty System
            </h3>

            <div className="flex flex-wrap gap-2 mt-4">
              {buttons2.map((button, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed">
              Client specific enterprise platform managing complete product
              lifecycle from dispatch to warranty replacements across nine plus
              operational roles.
              <br />
              <br />
              Backend handles bulk operations for ten thousand plus orders
              within seconds, includes dynamic sticker generation, and supports
              continuous production releases.
            </p>
          </div>

          <div className="w-full lg:w-[50vw]">
            <div className="relative w-full rounded-xl group overflow-hidden">
              <img
                src="../../src/assets/ujalaSampleImage.png"
                alt="Ujala enterprise supply chain platform"
                loading="lazy"
                className="w-full h-auto rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <a
                  href="https://ujalapump.com/login"
                  className="pointer-events-auto text-black border border-black px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20">
          <div className="w-full lg:w-[40vw]">
            <h3 className="text-2xl">Form Builder</h3>

            <div className="flex flex-wrap gap-2 mt-4">
              {buttons3.map((button, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                >
                  {button}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm sm:text-base leading-relaxed">
              No code drag and drop form builder with live preview and offline
              support.
              <br />
              <br />
              Enables sharing, and CSV export using browser storage. Built
              responsive and accessible UI with template support and adaptive
              rendering for fast form creation.
            </p>
          </div>

          <div className="w-full lg:w-[50vw]">
            <div className="relative w-full rounded-xl group overflow-hidden">
              <img
                src="../../src/assets/formBuilderSampleImage.png"
                alt="Form Builder drag-and-drop interface"
                loading="lazy"
                className="w-full h-auto rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <a
                  href="https://form-builder-remix.vercel.app/"
                  className="pointer-events-auto text-black border border-black px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                >
                  Try It
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
