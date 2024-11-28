'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-20 py-20 pl-10">
            <section className="w-full">
                <div className="container px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">About Me</h1>
                        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                            I'm a Computer Science graduate with a passion for building innovative solutions. Specialized in full-stack development,
                            machine learning, and blockchain technology. Currently working on projects that push the boundaries of what's
                            possible with modern web technologies.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">My Journey</h2>
                    <div className="max-w-3xl mx-auto">
                        <Timeline />
                    </div>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <SkillCard title="Frontend" skills={[
                            { name: "React", level: 90 },
                            { name: "Next.js", level: 85 },
                            { name: "TypeScript", level: 80 },
                            { name: "CSS/Tailwind", level: 85 },
                        ]} />
                        <SkillCard title="Backend" skills={[
                            { name: "Node.js", level: 85 },
                            { name: "Python", level: 80 },
                            { name: "SQL", level: 75 },
                            { name: "GraphQL", level: 70 },
                        ]} />
                        <SkillCard title="Machine Learning" skills={[
                            { name: "TensorFlow", level: 75 },
                            { name: "PyTorch", level: 70 },
                            { name: "Scikit-learn", level: 80 },
                            { name: "Data Analysis", level: 85 },
                        ]} />
                        <SkillCard title="Blockchain" skills={[
                            { name: "Solidity", level: 75 },
                            { name: "Web3.js", level: 80 },
                            { name: "Ethereum", level: 70 },
                            { name: "Smart Contracts", level: 75 },
                        ]} />
                    </div>
                </div>
            </section>
        </div>
    )
}

function Timeline() {
    const events = [
        { year: "2018", title: "Started Computer Science Degree" },
        { year: "2020", title: "First Internship at Tech Startup" },
        { year: "2021", title: "Published First Research Paper" },
        { year: "2022", title: "Graduated with Honors" },
        { year: "2023",
            title: "Joined AI Research Team",
            current: true
        },
    ]

    return (
        <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20"></div>
            {events.map((event, index) => (
                <div key={index} className="relative mb-8">
                    <div className="flex items-center">
                        <div className="flex-1 text-right mr-4 text-gray-400">{event.year}</div>
                        <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                        <div className="flex-1 ml-4">
                            <h3 className={`font-semibold ${event.current ? 'text-blue-400' : 'text-gray-200'}`}>{event.title}</h3>
                            {event.current && <span className="text-sm text-blue-400">Current</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function SkillCard({ title, skills }: { title: string; skills: { name: string; level: number }[] }) {
    return (
        <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
                <CardTitle className="text-blue-400">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-300">{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" indicatorClassName="bg-blue-500" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

