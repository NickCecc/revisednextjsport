'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export default function AboutPage() {
    return (
        <div className="min-h-screen  text-gray-100">
            <div className="container mx-auto px-4 py-16 space-y-20">
                <Header />
                <Journey />
                <Skills />
            </div>
        </div>
    )
}

function Header() {
    return (
        <motion.section
            className="text-center space-y-6"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <motion.div
                className="text-center mb-8 pt-4"
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
                    About Me
                </motion.h1>
            </motion.div>
            <motion.p
                className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.8}}
            >
                I am a current third year University of Windsor student studying Computer Science with a Software Engineering Specialization.
                I have a strong passion for developing applications and engineering solutions to complex problems.
                I am always looking for new opportunities to learn new technologies. <b>I am actively seeking a Software Developer or Software Engineer Internship.</b>

            </motion.p>
        </motion.section>
    )
}

function Journey() {
    const events = [
        {
            year: "2018",
            title: "Started High School",
            description: "Began my high school education at Tecumseh Vista Academy."
        },
        {
            year: "2022",
            title: "Finished High School",
            description: "Finished my High School education, won the Computer Science Subject Award in grade 12, and developed Geogram for a MasseyHacks Competition."
        },
        {
            year: "2022",
            title: "Accepted into the University of Windsor",
            description: "I was accepted into the University of Windsor for my degree: Bachelor of Science - BS (Honours), Computer Science and Software Engineering."
        },
        {
            year: "2022",
            title: "Hired as Paint Line Operator",
            description: "Started working at Omega Tool Corp as a Paint Line Operator and Robot Programmer."
        },
        {
            year: "2023",
            title: "Started my Private Pilot License",
            description: "Started the process of getting my Private Pilot License (Airplane)."
        },
        {
            year: "2024",
            title: "Began Software Engineering Position",
            description: "I began my Software Engineering position at Omega Tool Corp developing internal web applications for many different use cases.",
            current: true
        },

    ]

    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-blue-400">My Journey</h2>
            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20"></div>
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        className="mb-12 relative"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full border-4 border-gray-800 flex items-center justify-center"
                        >
                            <span className="text-white text-sm font-semibold">{event.year}</span>
                        </motion.div>
                        <Card className={`ml-16 md:ml-0 md:w-5/6 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-gray-800/50 border-gray-700`}>
                            <CardHeader>
                                <CardTitle className={`text-xl ${event.current ? 'text-blue-400' : 'text-gray-200'}`}>
                                    {event.title}
                                    {event.current && <span className="ml-2 text-sm bg-blue-500 text-white px-2 py-1 rounded-full">Current</span>}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">{event.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "🌐",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "CSS/Tailwind", level: 85 },
            ]
        },
        {
            title: "Backend",
            icon: "🖥️",
            skills: [
                { name: "Java", level: 90 },
                { name: "Python", level: 70 },
                { name: "SQL", level: 75 },
                { name: "Spring Boot", level: 50 },

            ]
        },


    ]

    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-blue-400">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                            <CardHeader className="bg-gray-700/50">
                                <CardTitle className="flex items-center text-blue-400">
                                    <span className="text-2xl mr-2">{category.icon}</span>
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="mb-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="relative pt-1">
                                            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                                                <motion.div
                                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

