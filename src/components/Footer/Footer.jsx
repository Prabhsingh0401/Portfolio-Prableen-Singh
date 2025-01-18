const Footer = () => {
    return (
        <div className="footer">
        <footer class="m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="" class="hover:underline">Prabh's Portfolio™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#Home" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#About" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#Work" class="hover:underline me-4 md:me-6">Work</a>
                </li>
                <li>
                    <a href="#Projects" class="hover:underline">Projects</a>
                </li>
            </ul>
            </div>
        </footer>
        </div>
    )
}

export default Footer