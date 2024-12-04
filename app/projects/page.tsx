'use client'

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"
import HomeRunAppPic from "@/public/HomeRunAppPic.png"
import exoplanet from "@/public/exoplanet.png"
import indevelopment from "@/public/indevelopment.png"
import portfoliopic from "@/public/portfoliopic.png"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
}
export default function ProjectsPage() {


    return (
        <section className="w-full flex flex-col items-center pt-20">
            <div className="container px-4 md:px-6 pb-12">
                <motion.div
                    className="text-center mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tighter animated-gradient mb-4"
                        variants={itemVariants}
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 5,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        Projects
                    </motion.h1>
                </motion.div>
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
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            // @ts-expect-error
                            image={exoplanet}
                        />
                        <ProjectCard
                            title="Real Estate Web App"
                            description="A full-stack real estate web app to help people find homes for sale. People can search cities for listings and find statistics about average price and more from that city."
                            tags={["Next.js", "TypeScript", "Spring Boot", "Java", "JavaScript", "Tailwind"]}
                            link="https://github.com/NickCecc/COMP-3220-Backend"
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            // @ts-expect-error
                            image={HomeRunAppPic}
                        />
                        <ProjectCard
                            title="Student Financial Planner"
                            description="A financial planner made for students. Currently in development but will be able to track your spending and alert you about bad spending habits."
                            tags={["Next.js", "JavaScript", "Tailwind", "TypeScript"]}
                            link="https://github.com/johndoe/blockchain-explorer"
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            // @ts-expect-error
                            image={indevelopment}
                        />
                        <ProjectCard
                            title="Personal Portfolio"
                            description="This is the portfolio you are currently looking at. I am always working on improving it and adding more features."
                            tags={["Next.js", "JavaScript", "Tailwind", "TypeScript"]}
                            link="https://github.com/NickCecc/revisednextjsport"
                            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                            // @ts-expect-error
                            image={portfoliopic}
                        />
                    </motion.div>
            </div>
        </section>
)
}

