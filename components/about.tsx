'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code, Brain, Users, Target } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Brain, label: 'Problem Solved', value: '450+' },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content - Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl transform rotate-3"></div>
              <Image
                src="https://i.imgur.com/JR8ilHf.jpeg"
                alt="Arpita working on laptop"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating badges */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute -top-6 -right-6 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">Available for Work</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-sm font-medium">Continuous Learner</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2 
              variants={itemVariants}
              className="section-title text-left mb-8"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate <strong className="text-gray-900 dark:text-white">Software Developer</strong> and 
                <strong className="text-gray-900 dark:text-white"> AI/ML Enthusiast</strong> ,having pursued my Bachelor’s in Computer Science from VIT. What started as curiosity has grown into a strong passion for building products that solve real-world problems through code.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in <strong className="text-primary-600 dark:text-primary-400">full-stack development</strong>, 
                with expertise in modern frameworks like React, Next.js, and Node.js. while also diving into
                <strong className="text-primary-600 dark:text-primary-400"> Artificial Intelligence</strong> and 
                <strong className="text-primary-600 dark:text-primary-400"> Machine Learning</strong> to create intelligent, impactful solutions.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond academics and work, I enjoy contributing to open source, mentoring peers, and staying curious with new technologies. And when I’m not coding, you’ll probably find me painting 🎨 or planning my next road trip.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">🚀 For me, the best part is transforming ☕coffee-fueled ideas💡 into scalable apps, ML models, and products that actually work (and sometimes surprise me too).</p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-center p-4 bg-white dark:bg-dark-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => {
                  const projectsSection = document.querySelector('#projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span>View My Work</span>
                <Code size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span>Let's Connect</span>
                <Users size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

