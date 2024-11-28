'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
    return (
        <div className="space-y-20 py-20 ">
            <section className="w-full flex flex-col items-center">
                <div className="container px-4 md:px-6">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Get in Touch</h1>
                        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                            Send me a message if you would like to contact me. I look forward to hearing from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full py-12 flex flex-col items-center">
                <div className="container px-4 md:px-6 flex flex-col items-center">
                    <div className="grid gap-6 lg:grid-cols-2">
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-white">Contact Form</h2>
                            <form className="space-y-4">
                                <Input placeholder="Your Name" />
                                <Input type="email" placeholder="Your Email" />
                                <Textarea placeholder="Your Message" />
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </motion.div>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold text-white">Connect with Me</h2>
                            <p className="text-gray-300">Feel free to reach out through any of these platforms:</p>
                            <div className="flex space-x-4">
                                <SocialButton href="https://github.com/NickCecc" icon={<Github className="h-5 w-5" />} label="GitHub" />
                                <SocialButton href="https://linkedin.com/Nicholas-Cecchin" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                                <SocialButton href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
                                <SocialButton href="mailto:nickcecchin35@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                                <p className="text-gray-300">Windsor, ON</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button asChild variant="outline" size="icon" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <Link href={href} target="_blank">
                    {icon}
                    <span className="sr-only">{label}</span>
                </Link>
            </Button>
        </motion.div>
    )
}

