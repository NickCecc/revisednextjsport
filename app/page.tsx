'use client'

import Link from "next/link"
import {ArrowRight, Code, Cpu, LayoutPanelLeft} from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
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

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        <section className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 pt-20">
          <motion.div
              className="text-center mb-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
          >
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4"
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
              Nicholas Cecchin
            </motion.h1>
            <motion.p
                className="text-xl text-gray-300 mb-6"
                variants={itemVariants}
            >
              Best way to predict the future? <b>Invent it.</b>
            </motion.p>
            <motion.div
                className="flex justify-center gap-4"
                variants={itemVariants}
            >
              <Button asChild variant="default">
                <Link href="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
              className="w-full max-w-5xl pt-5 pb-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">What I Do</h2>
            <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={containerVariants}
            >
              <SkillCard
                  icon={<Code className="h-8 w-8 text-blue-500" />}
                  title="Full Stack Development"
                  description="Building modern and responsive web applications."
              />
              <SkillCard
                  icon={<Cpu className="h-8 w-8 text-purple-500" />}
                  title="Object-Oriented Software"
                  description="Developing complex applications with Object-Oriented solutions."
              />
              <SkillCard
                  icon={<LayoutPanelLeft className="h-8 w-8 text-pink-500" />}
                  title="Software Engineering"
                  description="Constantly learning new software and frameworks to stay on top."
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
  )
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
      <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
      >
        <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              {icon}
              <span>{title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
  )
}

