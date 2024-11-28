'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ExperienceCard({ title, company, period, description, skills, color }) {
    return (
        <motion.div variants={itemVariants} className="w-full max-w-3xl mx-auto">
            <Card
                className="bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 mb-8"
                style={{ borderColor: color, borderWidth: "3px" }}
            >
                <CardHeader>
                    <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                        <div>
                            <h3 style={{ color }} className="text-2xl font-bold">
                                {title}
                            </h3>
                            <p className="text-gray-400">{company}</p>
                        </div>
                        <Badge
                            variant="outline"
                            style={{ color, borderColor: color }}
                            className="mt-2 sm:mt-0"
                        >
                            {period}
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
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
        title: "Software Engineer Internship",
        company: "Omega Tool Corp.",
        period: "2021 - Present",
        description: "Leading development of scalable web applications using React, Node.js, and AWS.",
        skills: ["React", "Node.js", "AWS", "GraphQL", "TypeScript"],
        color: "#3b82f6" // blue-500
    },
    {
        title: "Machine Learning Engineer",
        company: "AI Innovations Ltd.",
        period: "2019 - 2021",
        description: "Developed and deployed machine learning models for predictive analytics in finance.",
        skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL"],
        color: "#22c55e" // green-500
    },
    {
        title: "Blockchain Developer",
        company: "CryptoTech Solutions",
        period: "2017 - 2019",
        description: "Built decentralized applications and smart contracts on Ethereum blockchain.",
        skills: ["Solidity", "Web3.js", "Ethereum", "JavaScript", "Truffle"],
        color: "#3b82f6" // blue-500
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="pt-24 pb-12 px-4">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Experience</h2>
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

