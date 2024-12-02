'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactElement, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

const itemVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
};
const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.1}
    }
}

const itemVariants2 = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {type: "spring", stiffness: 100}
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function ExperienceCard({title, company, period, description, skills, color}) {
    return (
        <motion.div variants={itemVariants} className="w-full max-w-3xl mx-auto">
            <Card
                className="bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 mb-8"
                style={{borderColor: color, borderWidth: "3px"}}
            >
                <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                            <h3 style={{color}} className="text-2xl font-bold">
                                {title}
                            </h3>
                            <p className="text-gray-400">{company}</p>
                        </div>
                        <Badge
                            variant="outline"
                            style={{color, borderColor: color}}
                            className="mt-2 sm:mt-0"
                        >
                            {period}
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill: string | number | bigint | boolean | ReactElement | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, skillIndex: Key | null | undefined) => (
                            <Badge
                                key={skillIndex}
                                variant="secondary"
                                style={{
                                    backgroundColor: `${color}1A`, // 10% opacity
                                    color,
                                }}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

const experiences = [
    {
        title: "Software Engineer",
        company: "Omega Tool Corp.",
        period: "May 2024 - Present",
        description: "Designing and developing internal web applications to enhance company procedures. Such examples include the paint line start up procedure application. This application reduced the paint line startup time by 70%.",
        skills: ["PHP", "HTML", "JavaScript", "JQuery", "CSS"],
        color: "#eab308"
    },
    {
        title: "Automated Paint Line Operator/Programmer",
        company: "Omega Tool Corp.",
        period: "July 2022 - Present",
        description: "Lead operator and programmer of an 18 station automated paint line. Program Fanuc Paint robots, manage materials, and onboard new employees.",
        skills: ["Robot Programming", "Teaching", "Leadership", "Management", "Scheduling", "Communication"],
        color: "#22c55e" // green-500
    },
    {
        title: "Setup Technician",
        company: "Omega Tool Corp.",
        period: "Jan 2021 - Aug 2022",
        description: "Assisted machine operators change jobs in their CNC machines, maintained an efficient workflow throughout the factory, kept a clean working environment for the team, and operated cranes and forklifts.",
        skills: ["Problem Solving", "Communication", "Scheduling", "Teamwork", "Troubleshooting"],
        color: "#3b82f6" // blue-500
    },
    {
        title: "Dock Worker",
        company: "Windsor Yacht Club",
        period: "May 2019 - Oct 2020",
        description: "Assisted members dock their vessels, reserve slips, leave boat slips, and maintained a spotless property.",
        skills: ["Communication", "Boating", "Maritime Restricted Operator License", "Teamwork", "Troubleshooting"],
        color: "#e11d48" // blue-500
    },
    {
        title: "Data Analyst",
        company: "Omega Tool Corp.",
        period: "May 2018 - July 2018",
        description: "Developed a system which deployed Python to parse custom API that provides JSON data from a software called RER in order to computerize excel sheets and display in a custom web page using Bootstrap.",
        skills: ["Python", "RER", "API's"],
        color: "#d9f99d" // blue-500
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="pt-20 pb-12 px-4">
            <motion.div
                className="text-center mb-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tighter animated-gradient mb-4"
                    variants={itemVariants2}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 5,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    Experience
                </motion.h1>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3
                        }
                    }
                }}
            >
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </motion.div>
        </section>
    );
}

