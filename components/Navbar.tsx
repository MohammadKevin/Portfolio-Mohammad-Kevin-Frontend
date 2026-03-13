"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

    const [open,setOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#94B4C1]/50 backdrop-blur-md z-50">

            <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4">

                <h1 className="text-lg sm:text-xl font-bold text-[#BBE0EF]">
                    Mohammad Kevin
                </h1>


                <button
                    className="md:hidden text-[#BBE0EF] text-2xl"
                    onClick={()=>setOpen(!open)}
                >
                    ☰
                </button>


                <ul className="hidden md:flex items-center gap-4 sm:gap-6 md:gap-8 text-[#BBE0EF] font-medium text-xs sm:text-sm">

                    <li>
                        <Link href="#home" className="hover:text-blue-500 transition-colors">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="#about" className="hover:text-blue-500 transition-colors">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="#skills" className="hover:text-blue-500 transition-colors">
                            Skills
                        </Link>
                    </li>

                    <li>
                        <Link href="#projects" className="hover:text-blue-500 transition-colors">
                            Projects
                        </Link>
                    </li>

                    <li>
                        <Link href="#certificates" className="hover:text-blue-500 transition-colors">
                            Certificates
                        </Link>
                    </li>

                    <li>
                        <Link href="#contact" className="hover:text-blue-500 transition-colors">
                            Contact
                        </Link>
                    </li>

                </ul>

            </div>


            {open && (
                <div className="md:hidden bg-[#94B4C1]/90 backdrop-blur-md px-6 pb-6">

                    <ul className="flex flex-col gap-4 text-[#BBE0EF] font-medium text-sm">

                        <li>
                            <Link href="#home" onClick={()=>setOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="#about" onClick={()=>setOpen(false)}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link href="#skills" onClick={()=>setOpen(false)}>
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link href="#projects" onClick={()=>setOpen(false)}>
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link href="#certificates" onClick={()=>setOpen(false)}>
                                Certificates
                            </Link>
                        </li>

                        <li>
                            <Link href="#contact" onClick={()=>setOpen(false)}>
                                Contact
                            </Link>
                        </li>

                    </ul>

                </div>
            )}

        </nav>
    )
}