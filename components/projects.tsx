'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Code2, Globe } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'MediVision AI – AI-Driven MedTech Platform',
      description: 'An intelligent healthcare platform for rapid medical report analysis and personalized treatment recommendations, built with Gemini API and secure, privacy-first data infrastructure.',
      image: 'https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/e6d0c55d-3bf2-4ec2-96e9-8924bdd76d8c.png',
      technologies: ['React (Vite)', 'Gemini API (LLM)', 'Tailwind CSS', 'PostgreSQL', 'Privy'],
      github: 'https://github.com/arpitaapatel/MediVision-AI--MedTech-Platform',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Misinformation & Sentiment Detection using NLP',
      description: 'Developed an AI-driven solution to detect and classify financial misinformation by leveraging NLP techniques and advanced ML models.',
      image: 'https://d2o0qhevodvs1u.cloudfront.net/adnec-glide-cache-production/containers/assets/events/2025/coling-2025/coling-2025-thumbnail.jpg/d873cbfd7c289f6ba995d51f1096882a/coling-2025-thumbnail.jpg',
      category: 'ai-ml',
      technologies: ['Python', 'BERT', 'Transformers', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/arpitaapatel/FMD-COLING-2025',
      demo: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Query-Mate',
      description: 'AI-powered web app to query databases with natural language or SQL, integrated with LLMs and RAG for fast results.',
      image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2022/05/SQL-Commands-and-Sub-Languages.webp',
      category: 'ai-ml',
      technologies: ['Python', 'Streamlit', 'SQLite', 'MySQL', 'LangChain'],
      github: 'https://github.com/arpitaapatel/Query-Mate',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'ScholarSync AI – AI-Powered Study Platform',
      description: 'An AI-driven learning assistant offering summaries, quizzes, flashcards, progress analytics, and Google Calendar sync to boost study consistency and engagement.',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQGoeZ1wd0IBEg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712263507767?e=2147483647&v=beta&t=Jxfey_qhBgf001cXRWB1BSvmjodxxfygKacnbShGZ1E',
      category: 'fullstack',
      technologies: ['GLangChain', 'React.js', 'Node.js+Express', 'Google Calendar API','MongoDB'],
      github: 'https://github.com/arpitaapatel/Scholar-Sync-AI',
      demo: 'https://demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'InvoMate – Full-Stack Invoicing App',
      description: 'A full-stack invoicing platform with PDF export, email alerts, due date tracking, and real-time dashboard analytics for streamlined financial management.',
      image: 'https://www.truecommerce.com/uk-en/wp-content/uploads/sites/2/2024/12/AdobeStock_1087481223-1536x755.jpeg',
      category: 'full stack',
      technologies: ['React', 'Redux', 'Express.js', 'MongoDB', 'JWT', 'Dockers'],
      github: 'https://github.com/arpitaapatel/InvoMate-Full-Stack-Invoicing-App',
      demo: 'https://demo.com',
      featured: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ai-ml', name: 'AI/ML' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my recent work, featuring full-stack applications, AI/ML projects, 
            and innovative solutions that demonstrate my technical expertise and creativity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with mosaic layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isBroader = index % 5 === 0 || index % 5 === 2 || index % 5 === 3
              // Center Query-Mate & IoT projects
              const centerShort = project.title === 'Query-Mate' || project.title === 'IoT Smart Home Controller'

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className={`group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-dark-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
                    ${isBroader ? 'lg:col-span-2 lg:row-span-1' : ''}
                    ${!isBroader && centerShort ? 'lg:col-start-2' : ''}
                  `}
                >
                  {/* Image */}
                  <div className={`relative ${isBroader ? 'h-64 lg:h-72' : 'h-56 lg:h-56'} overflow-hidden rounded-t-2xl`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
                      >
                        <Github size={24} className="text-gray-700" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
                      >
                        <ExternalLink size={24} className="text-gray-700" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                      >
                        <Code2 size={16} />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <Globe size={16} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/arpitaapatel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

