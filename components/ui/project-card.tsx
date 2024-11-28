'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
}

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    link: string
    image: string
}

export function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.div variants={itemVariants} onClick={() => setIsOpen(true)}>
                <Card className="group relative overflow-hidden rounded-lg border-0 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-300 mb-4">{description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <Button asChild variant="outline" className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                            <Link href={link} target="_blank" onClick={(e) => e.stopPropagation()}>
                                View Project
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-500/10 text-blue-400">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <Button asChild variant="default" className="mt-4">
                        <Link href={link} target="_blank">
                            View Project
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    )
}

