import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nicholas Cecchin - Portfolio",
  description: "Portfolio showing my experience, projects, and about me.",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen flex flex-col`}>
      <Navigation />
      <main className="flex-grow relative z-10">
        {children}
          <Analytics />

      </main>

      </body>
      </html>
  )
}

