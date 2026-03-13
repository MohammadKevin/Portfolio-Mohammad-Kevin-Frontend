export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

                <div>
                    <h3 className="text-[#BBE0EF] font-semibold text-base sm:text-lg mb-3">
                        Mohammad Kevin
                    </h3>

                    <p className="text-[#BBE0EF] text-sm">
                        Backend Developer focused on building reliable backend systems
                        and APIs for modern web applications.
                    </p>
                </div>


                <div>
                    <h3 className="text-[#BBE0EF] font-semibold mb-4">
                        Navigation
                    </h3>

                    <ul className="space-y-2 text-[#BBE0EF] text-sm">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#certificates">Certificates</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-[#BBE0EF] font-semibold mb-4">
                        Contact
                    </h3>

                    <ul className="space-y-2 text-sm text-[#BBE0EF]">
                        <li>📧 kvn4.200581@gmail.com</li>
                        <li>
                            📱
                            <a href="https://wa.me/6281234567890" className="hover:underline">
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            💻
                            <a href="https://github.com/username" className="hover:underline">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-[#BBE0EF] font-semibold mb-4">
                        Form
                    </h3>

                    <form
                        action="https://formsubmit.co/kvn4.200581@gmail.com"
                        method="POST"
                        className="space-y-3"
                    >

                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="http://localhost:3000" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            className="w-full border text-[#E3E3E3] border-[#BBE0EF] rounded-md p-2 outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="w-full border text-[#E3E3E3] border-[#BBE0EF] rounded-md p-2 outline-none"
                        />

                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows={4}
                            required
                            className="w-full border text-[#E3E3E3] border-[#BBE0EF] rounded-md p-2 outline-none"
                        />

                        <button
                            type="submit"
                            className="bg-[#234C6A] text-white px-4 py-2 rounded-md hover:bg-[#A0D8EF] transition"
                        >
                            Submit
                        </button>

                    </form>
                </div>

            </div>


            <div className="border-t border-gray-200 mt-10 sm:mt-12 pt-6 text-center">
                <p className="text-[#FAF3E1] text-sm">
                    © 2026 Mohammad Kevin. All rights reserved.
                </p>
            </div>

        </footer>
    )
}