'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, product management, and secure payment integration.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"]
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with real-time updates, built using React and Firebase.",
    technologies: ["React", "Firebase", "CSS Modules"]
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, built with D3.js and React.",
    technologies: ["React", "D3.js", "Node.js", "Express"]
  },
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot using natural language processing to provide customer support for a SaaS product.",
    technologies: ["Python", "TensorFlow", "Flask", "React"]
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-secondary">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex} 
                  className="bg-accent text-white px-2 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}