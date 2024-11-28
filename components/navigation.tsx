'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Navigation() {
    const pathname = usePathname()

    return (
        <header className="flex h-16 items-center justify-between px-4 lg:px-6 bg-gray-900/80 backdrop-blur-sm fixed top-0 w-full z-50 border-b border-gray-800">
            <Link className="flex items-center justify-center" href="/">
                <span className="sr-only">Home</span>
                <motion.span
                    className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-bold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    NC
                </motion.span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/" ? "text-blue-400" : "text-gray-300"}`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/projects" ? "text-blue-400" : "text-gray-300"}`}
                    href="/projects"
                >
                    Projects
                </Link>
                <Link
                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/experience" ? "text-blue-400" : "text-gray-300"}`}
                    href="/experience"
                >
                    Experience
                </Link>
                <Link
                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/about" ? "text-blue-400" : "text-gray-300"}`}
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/contact" ? "text-blue-400" : "text-gray-300"}`}
                    href="/contact"
                >
                    Contact
                </Link>
            </nav>
        </header>
    )
}

