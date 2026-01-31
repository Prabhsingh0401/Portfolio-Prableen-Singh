const HeroSection = () => {
    return (
        <section
            id="Home"
            className="w-full pt-16 lg:pt-15 px-5 lg:px-12 md:pb-5"
            aria-label="Hero section introducing Prableen Singh, Full Stack Developer"
        >
            <div className="flex flex-col justify-center items-center w-full">

                <h1 className="animated-gradient font-semibold leading-none w-full text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[6.5rem] gradient-text">
                    Full Stack Developer
                </h1>

                <p className="mt-8 w-full lg:w-[85vw] text-sm sm:text-base md:text-lg lg:text-xl">
                    I'm a full-stack developer who loves stacking up clean,
                    maintainable, and understandable code because in the
                    world of devs, bugs are the only thing I do not debug
                    for fun.
                </p>

            </div>
        </section>
    );
};

export default HeroSection;
