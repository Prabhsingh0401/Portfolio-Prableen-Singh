const About = () => {
    return (
        <>
        <div id="About" className="relative px-5 lg:px-10">

            <h2 className="mt-10 text-2xl font-bold">
                export default About ME...
            </h2>

            <p className="mt-6 max-w-4xl text-sm sm:text-base leading-relaxed">
                I build technology to simplify complexity and rethink how things should work, not just how they have always worked.
                As a Computer Science student and full stack developer, I design products that scale, feel intuitive, and solve real human problems.
                <br /><br />
                Let’s connect on LinkedIn or GitHub.
            </p>

            {/* Skill Cards Row 1 */}
            <div className="flex flex-col lg:flex-row gap-6 mt-10">

                <div className="w-full lg:w-1/2 border border-white/30 rounded-[25px] p-6 text-white">
                    <h3 className="text-xl">Front-end</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        ReactJS / NextJS / Typescript / Vite / Tailwind / SCSS
                    </p>
                </div>

                <div className="w-full lg:w-1/2 border border-white/30 rounded-[25px] p-6 text-white">
                    <h3 className="text-xl">Languages / Tools</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        Java / Python / C / C++ / Javascript / AWS / GCP
                    </p>
                </div>

            </div>

            {/* Skill Cards Row 2 */}
            <div className="flex flex-col lg:flex-row gap-6 mt-6">

                <div className="w-full lg:w-2/3 border border-white/30 rounded-[25px] p-6 text-white">
                    <h3 className="text-xl">Backend</h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed">
                        MongoDB / Node / Express / Firebase
                    </p>
                </div>

                <div className="w-full lg:w-1/3 italic text-white rounded-[25px] p-6 flex items-center">
                    <p className="text-sm sm:text-base">
                        Crafting solutions, stacking skills, and building with flair ✨
                    </p>
                </div>

            </div>

        </div>
        </>
    );
};

export default About;
