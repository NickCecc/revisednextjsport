'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail} from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import headshot from "@/public/headshot.png"

import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
}


export default function ContactPage() {
    const form = useRef<HTMLFormElement>(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_4m8i9k9",
                "template_bsxlam6",
                form.current,
                "Hkc46EwXhFI8_Xosr"
            )
            .then(
                () => {
                    setSuccessMessage("Your message has been sent successfully!");
                    setErrorMessage("");
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    form.current.reset(); // Reset the form after submission
                },
                (error) => {
                    console.error("EmailJS error:", error);
                    setErrorMessage("Failed to send your message. Please try again.");
                    setSuccessMessage("");
                }
            );
    };

    return (
        <div className="space-y-20 py-20">
            <section className="w-full flex flex-col items-center">
                <div className="container px-4 md:px-6 pt-4">
                    <motion.div
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h1
                            className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tighter animated-gradient mb-4"
                            variants={itemVariants}
                        >
                            Get in Touch
                        </motion.h1>
                        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                            Send me a message if you have any questions or would like to speak with me. I look forward to hearing from you!
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="w-full py-12 flex flex-col items-center">
                <div className="container px-4 md:px-6 flex flex-col items-center">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <motion.div
                            className="space-y-4 lg:col-span-2"
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <h2 className="text-2xl font-bold text-white">Contact Form</h2>
                            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                                <Input placeholder="Your Name" name="from_name" required />
                                <Input type="email" placeholder="Your Email" name="from_email" required />
                                <Textarea placeholder="Your Message" name="message" required />
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

                        </motion.div>
                        <motion.div
                            className="space-y-4 flex flex-col items-center justify-center"
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <div className="relative w-64 h-64 rounded-full overflow-hidden">
                                <Image
                                    src={headshot}
                                    alt="Your Name"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-white mt-4">Connect with Me</h2>
                            <div className="flex space-x-4">
                                <SocialButton href="https://github.com/NickCecc" icon={<Github className="h-5 w-5" />} label="GitHub" />
                                <SocialButton href="https://linkedin.com/Nicholas-Cecchin" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                                <SocialButton href="mailto:nickcecchin35@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
                            </div>
                            <div className="mt-4 text-center">
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

