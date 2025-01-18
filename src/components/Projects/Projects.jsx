import '../../assets/Optitrack 1.png'

const Projects = () => {

    const buttons1 = ["React", "SCSS", "Express" , "Firebase" , "Gemini" , "Nvidia"];
    const buttons2 = ["React", "Tailwind", "Express" , "MongoDB" , "Nvidia"];
    const buttons3 = ["React", "SCSS", "Express" , "DynamoDB" , "AWS"];
    const buttons4 = ["React", "Tailwind", "Flowbite"];


    return (
        <div id='Projects' className="projects w-full mb-10 mt-20">
            <div>
                <h1 className="ml-10 text-3xl font-bold">export default Projects...</h1>
                <div className='lg:flex justify-center'>
                <div>   
                <h1 className="lg:mt-10 mt-10 ml-10 text-2xl">OptiTrack AI ILMS</h1>
                <div className="flex items-center ml-6 lg:mt-5">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 p-4">
                    {buttons1.map((button, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 text-md font-light text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                    >
                        {button}
                    </button>
                    ))}
                </div>
                </div>
                <p className="ml-7 w-90 lg:w-[35vw] lg:mt-5">OptiTrack is an advanced, AI-integrated system designed to optimize and manage inventory and logistics workflows efficiently.</p>
            </div>

            <div className="lg:flex mt:1 lg:mt-1 ml-5">
                <div
                className="relative w-[90vw] lg:w-[50vw] mt-10 bg-white/50 rounded-xl group"
                style={{ paddingBottom: "48.25%" }}
                >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
                    style={{ backgroundImage: "url('../../src/assets/Optitrack 1.png')" }}
                ></div>

                <a
                    href="https://github.com/Prabhsingh0401/OptiTrack-AI-ILMS"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border border-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Try It
                </a>
                </div>
            </div>
            </div>

            <div className='lg:flex lg:flex-row flex-row-reverse justify-center mt-20'>
            <div className="lg:flex mt:1 lg:mt-1 ml-5">
                <div
                className="relative w-[90vw] lg:w-[50vw] mt-10 bg-white/50 rounded-xl group"
                style={{ paddingBottom: "48.25%" }} 
                >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
                    style={{ backgroundImage: "url('../../src/assets/Money Mitra.png')" }}
                ></div>

                <a
                    href="https://money-mitra-ep.vercel.app/"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border border-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Try It
                </a>
                </div>
            </div>
                <div>   
                <h1 className="lg:mt-10 mt-10 ml-10 text-2xl">Money Mitra</h1>
                <div className="flex items-center ml-6 lg:mt-5">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 p-4">
                    {buttons2.map((button, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 text-md font-light text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                    >
                        {button}
                    </button>
                    ))}
                </div>
                </div>
                <p className="ml-7 w-90 lg:w-[35vw] lg:mt-5">Money Mitra is a comprehensive, AI-powered 
                    financial application designed to simplify finance and promote financial inclusion. 
                </p>
            </div>
            </div>

            <div className='lg:flex justify-center mt-20'>
                <div>   
                <h1 className="lg:mt-10 mt-10 ml-10 text-2xl">Constitutional Explorer</h1>
                <div className="flex items-center ml-6 lg:mt-5">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 p-4">
                    {buttons3.map((button, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 text-md font-light text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                    >
                        {button}
                    </button>
                    ))}
                </div>
                </div>
                <p className="ml-10 w-90 lg:w-[35vw] lg:mt-5">Constitution Explorer, offers a collection of fun and interactive games to help you learn about the Indian Constitution in an easy and enjoyable way</p>
            </div>

            <div className="lg:flex mt:1 lg:mt-1 ml-5">
                <div
                className="relative w-[90vw] lg:w-[50vw] mt-10 bg-white/50 rounded-xl group"
                style={{ paddingBottom: "48.25%" }}
                >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
                    style={{ backgroundImage: "url('../../src/assets/Constitutional Explorer.png')" }}
                ></div>

                <a
                    href="https://main.drfo566s772je.amplifyapp.com/"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border border-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Try It
                </a>
                </div>
            </div>
            </div>

            <div className='lg:flex lg:flex-row flex-row-reverse justify-center mt-20'>
            <div className="lg:flex mt:1 lg:mt-1 ml-5">
                <div
                className="relative w-[90vw] lg:w-[50vw] mt-10 bg-white/50 rounded-xl group"
                style={{ paddingBottom: "48.25%" }} 
                >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
                    style={{ backgroundImage: "url('../../src/assets/RBAC Dashboard.png')" }}
                ></div>

                <a
                    href="https://rbac-dashboard-virid.vercel.app/"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black border border-black px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Try It
                </a>
                </div>
            </div>
                <div>   
                <h1 className="lg:mt-10 mt-10 ml-10 text-2xl">RBAC Dashboard</h1>
                <div className="flex items-center ml-6 lg:mt-5">
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 p-4">
                    {buttons4.map((button, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 text-md font-light text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                    >
                        {button}
                    </button>
                    ))}
                </div>
                </div>
                <p className="ml-7 w-[90vw] lg:w-[35vw] lg:mt-5">RBAC Dashboard is a user-friendly, 
                    responsive web application designed to provide role-based access control (RBAC) 
                    functionalities for managing users and their access rights. 
                </p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Projects