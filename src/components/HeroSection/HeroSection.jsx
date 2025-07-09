const HeroSection = () => {
    return (
        <>
            <div id="Home" className="lg:pl-12 flex flex-col-reverse lg:flex-row items-center lg:mt-20">
                <h1
                    className="animated-gradient font-semibold text-6xl sm:text-6xl md:text-9xl lg:text-8xl xl:text-9xl pt-5 whitespace-nowrap gradient-text">
                    Full-Stack
                </h1>
                <a href="/Prableen's Resume.pdf" download>
                <button className="lg:ml-20 hover:bg-white/0 border border-white hover:text-white bg-white/80 text-black hidden lg:block px-20 sm:px-14 lg:px-20 py-3 sm:py-4 lg:py-5 italic mt-3 lg:mt-10 rounded-[30px]">
                    Resume
                </button>
                </a>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between mt-2 sm:mt-5 px-4 sm:px-12">
                <p className="w-full sm:w-[70vw] md:w-[50vw] lg:w-[40vw] text-sm sm:text-base md:text-lg lg:text-xl text-pretty mt-6 sm:mt-0">
                    I'm a full-stack developer who loves stacking up clean, maintainable, and understandable code—because in the world of devs, bugs are the only thing I don't debug for fun.
                </p>
                <h1
                    className="animated-gradient font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center sm:text-left gradient-text">
                    Developer
                </h1>
            </div>
        </>
    );
};

export default HeroSection;
