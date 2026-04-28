import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Socials = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 lg:mt-12 w-full px-6 relative z-10 pb-16">
      <a
        href="https://www.linkedin.com/in/prableen-singh/" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Prableen Singh's LinkedIn profile"
        title="Connect on LinkedIn"
        className="w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 text-lg sm:text-lg font-medium rounded-full flex justify-center items-center hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg shadow-black/50" aria-hidden="true">
          <LinkedInIcon className="mr-3" fontSize="medium" />
          LinkedIn
        </button>
      </a>

      <a
        href="https://github.com/Prabhsingh0401"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Prableen Singh's GitHub profile"
        title="Follow on GitHub"
        className="w-full sm:w-auto"
      >
        <button className="w-full sm:w-auto border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 text-lg sm:text-lg font-medium rounded-full flex justify-center items-center hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg shadow-black/50" aria-hidden="true">
          <GitHubIcon className="mr-3" fontSize="medium" />
          GitHub
        </button>
      </a>
    </div>
  );
};

export default Socials;
