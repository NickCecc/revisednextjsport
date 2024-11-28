'use client'

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"
import HomeRunAppPic from "@/public/HomeRunAppPic.png"
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

export default function ProjectsPage() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
            <div className="container px-4 md:px-6 ">
                <h1 className="text-3xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Featured Projects</h1>
                <motion.div
                    className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <ProjectCard
                        title="3D Exoplanet Explorer"
                        description="A React-based web application to interactively view all of the known exoplanets in the universe. This was done for NASA's 2024 SpaceApps competition."
                        tags={["React", "JavaScript", "Python", "Three.js"]}
                        link="https://github.com/NickCecc/SpaceApps"
                        image="/placeholder.svg?height=400&width=600"
                    />
                    <ProjectCard
                        title="Real Estate Web App"
                        description="A full-stack real estate web app to help people find homes for sale. People can search cities for listings and find statistics about average price and more from that city."
                        tags={["Next.js", "TypeScript", "Spring Boot", "Java", "JavaScript", "Tailwind"]}
                        link="https://github.com/NickCecc/COMP-3220-Backend"
                        image={HomeRunAppPic}
                    />
                    <ProjectCard
                        title="Student Financial Planner"
                        description="A financial planner made for students. Currently in development but will be able to track your spending and alert you about bad spending habits."
                        tags={["Next.js", "JavaScript", "Tailwind", "TypeScript"]}
                        link="https://github.com/johndoe/blockchain-explorer"
                        image="/placeholder.svg?height=400&width=600"
                    />
                    <ProjectCard
                        title="Personal Portfolio"
                        description="This is the portfolio you are currently looking at. I am always working on improving it and adding more features."
                        tags={["Next.js", "JavaScript", "Tailwind", "TypeScript"]}
                        link="https://github.com/NickCecc/portfolionextjs"
                        image="/placeholder.svg?height=400&width=600"
                    />
                </motion.div>
            </div>
        </section>
    )
}

