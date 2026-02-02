const Footer = () => {
    return (
        <div className="footer">
        <footer className="m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 2026 <a href="#Home" className="hover:underline">Prableen's Portfolio</a>.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#Home" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#About" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#Work" className="hover:underline me-4 md:me-6">Work</a>
                </li>
                <li>
                    <a href="#Projects" className="hover:underline">Projects</a>
                </li>
            </ul>
            </div>
        </footer>
        </div>
    )
}

export default Footer
