'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.h1 
        className="text-5xl font-bold mb-4 text-primary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p 
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi, I'm Syed Hashir Ali, a Full Stack Developer passionate about creating innovative web solutions
      </motion.p>
      <motion.div 
        className="space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/about" className="btn btn-primary">Learn More About Me</Link>
        <Link href="/projects" className="btn btn-primary">View My Projects</Link>
      </motion.div>
    </div>
  )
}
        
  

