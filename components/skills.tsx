'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  Database, 
  Brain, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Shield,
  Zap,
  Layers
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'HTML/CSS', icon: '🌐' },
        { name: 'JavaScript', icon: '⚡' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'Django', icon: '🎯' },
        { name: 'REST APIs', icon: '🔗' },
        { name: 'GraphQL', icon: '📊' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Azure', icon: '🔴' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'CI/CD pipelines', icon: '⚓' },
      ]
    },
    {
      title: 'AI/ML & Data',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' },
        { name: 'Scikit-learn', icon: '📈' },
        { name: 'OpenCV', icon: '👁️' },
      ]
    },
    {
      title: 'Relevant Coursework',
      icon: Smartphone,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Data Structures and Algorithms', icon: '📱' },
        { name: 'Object-Oriented Programming', icon: '🎯' },
        { name: 'Database Management System', icon: '🍎' },
        { name: 'Operating Systems', icon: '🤖' },
        { name: 'Computer Networks', icon: '⚡' },
        { name: 'Software Development', icon: '🔥' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Git/GitHub', icon: '🔀' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Postman', icon: '📬' },
        { name: 'Google Collab', icon: '🧪' },
        { name: 'Linux', icon: '🐧' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains. 
            I continuously learn and adapt to new technologies to stay at the forefront of innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.5 
                    }}
                    className="group/skill"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              languages, and methodologies to enhance my skill set and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
