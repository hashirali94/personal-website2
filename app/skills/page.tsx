'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "React", level: 85 },
  { name: "Python", level: 75 },
  { name: "CSS/Tailwind", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "GraphQL", level: 60 },
  { name: "Docker", level: 55 }
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <motion.div
                className="bg-accent h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 50 }}
              />
            </div>
            <motion.div
              className="mt-2 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {skill.level < 60 && "Beginner"}
              {skill.level >= 60 && skill.level < 80 && "Intermediate"}
              {skill.level >= 80 && "Advanced"}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}