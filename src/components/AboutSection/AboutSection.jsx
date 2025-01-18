const About = () => {
    return(
        <>
        <div>
            <div id="About" className="relative">
            <h1 className="lg:ml-10 ml-5 mt-10 lg:mt-10 text-2xl font-bold">export default About ME...</h1>
            <p className="lg:ml-10 ml-5 md:w-[60vw] lg:w-[50vw] mt-10 mr-4">
                Hi, I am Prableen a developer who loves crafting clean code and user-friendly designs. 
                When I am not coding, I am probably rewatching The Office and wishing my workdays had more 
                Jim pranks and fewer Dwight rules. 
            </p>
            </div>
            <div className="lg:flex">
                <div className="w-[90vw] lg:w-[46vw] lg:h-[8vw] h-[35vw] md:h-[13vw] text-white border border-white/30 rounded-[25px] ml-5 lg:ml-10 mt-10 p-5">
                    <h1 className="text-xl">Front-end</h1>
                    <p className="mt-2">ReactJS / NextJS / Typescript / Vite / Tailwind / SCSS</p>
                </div>
                <div className="w-[90vw] lg:w-[46vw] lg:h-[8vw] h-[35vw] md:h-[15vw] bg-white/0 border border-white/30 text-white rounded-[25px] ml-5 lg:ml-10 mt-5 lg:mt-10 p-5">
                    <h1 className="text-xl">Languages / Tools</h1>
                    <p className="mt-2">Java / Python / C / C++ / Javascript / AWS / GCP</p>
                </div>
            </div>

            <div className="lg:flex lg:ml-[22vw] flex-col-reverse lg:flex-row mt-5">
            <div className="w-[90vw] lg:w-[40vw] lg:h-[8vw] h-[35vw] md:h-[15vw] mt-0 bg-white/0 border border-white/30 text-white rounded-[25px] lg:ml-10 ml-5 lg:mt-10 p-5">
                <h1 className="text-xl">Backend</h1>
                <p className="mt-2">MongoDB / SQL / Node / Express / Firebase</p>
            </div>
            <div className="w-[80vw] lg:w-[30vw] italic lg:h-[8vw] h-[30vw] md:h-[15vw] text-white rounded-[25px] lg:ml-10 lg:mt-10 ml-5 p-5">
                <p className="mt-2">Crafting solutions, stacking skills, and building with flair ✨</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default About