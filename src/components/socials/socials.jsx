import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Socials = () => {
  return (
    <>
      <div className="ml-5 sm:ml-10 mt-10 lg:mt-5 flex flex-row justify-center items-center">
        <a
          href="https://www.linkedin.com/in/prableen-singh/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white/80 px-8 sm:px-12 lg:px-16 py-3 sm:py-4 text-sm sm:text-lg lg:text-xl rounded-[30px] flex items-center hover:bg-white hover:text-black sm:mr-5">
            <LinkedInIcon className="mr-2" />
            LinkedIn
          </button>
        </a>

        <a
          href="https://github.com/Prabhsingh0401"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-white/80 px-8 ml-5 sm:px-12 lg:px-16 py-3 sm:py-4 text-sm sm:text-lg lg:text-xl rounded-[30px] flex items-center hover:bg-white hover:text-black">
            <GitHubIcon className="mr-2" />
            GitHub
          </button>
        </a>
      </div>
    </>
  );
};

export default Socials;
