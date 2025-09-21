'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Award, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Coding Blocks',
      location: 'Delhi, India',
      period: 'Jun 2025 - Aug 2025',
      type: 'Intership - On-site',
      description: 'Designed and developed scalable backend systems by optimizing database queries, integrating APIs, and ensuring smooth interaction between frontend and backend components. Collaborated on performance improvements to deliver a seamless user experience.',
      achievements: [
        'Optimized MySQL queries, reducing backend response times by 30%.',
        'Improved overall system performance and scalability, achieving a 20% faster response time.',
        'Successfully integrated UI with backend APIs, enhancing user experience and system reliability.',
      ],
      technologies: ['JavaScript', 'Node.js', 'MySQL', 'AWS', 'PHP', 'MongoDB', 'Postman', 'REST APIs', 'Docker'],
      current: true
    },
    {
      id: 2,
      title: 'Intern',
      company: 'Mondelez International ',
      location: 'India',
      period: 'Dec 2023 - Jan 2024',
      type: 'Internship - On-site',
      description: 'Worked on data-driven solutions to enhance operational efficiency in manufacturing by analyzing large-scale machine failure records, optimizing workforce scheduling, and contributing to predictive maintenance strategies.',
      achievements: [
        'Performed clustering analysis on 10,000+ machine failure records, uncovering patterns that guided proactive maintenance planning.',
        'Delivered data-driven workforce scheduling insights, reducing downtime and improving workflow efficiency.',
        'Contributed to predictive maintenance strategies, enhancing efficiency across 15+ manufacturing processes.',
        
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn(clustering, predictive models)', 'Matplotlib', 'HSeaborn', 'Jupyter Notebook', 'Git'],
      current: false
    },
    {
      id: 3,
      title: 'Senior Manager - Outgoing Global Sector',
      company: 'AIESEC - Non-profit organization',
      location: 'India',
      period: 'Aug 2022 - Sep 2023',
      type: 'Internship - Hybrid',
      description: 'Led international exchange programs and cross-functional teams in a non-profit setting, driving global volunteer engagement and leadership development. Managed stakeholder relationships, streamlined processes, and implemented strategies to enhance organizational impact and efficiency.',
      achievements: [
        'Successfully delivered leadership programs for 500+ participants, increasing global volunteer engagement.',
        'Managed international partnerships and exchange initiatives, creating impactful opportunities in the social sector.',
        'Recognized with AIESEC’s prestigious Value Award, being one of six honorees for outstanding contribution.',
      ],
      technologies: ['Google Sheets (for tracking participants, programs, and KPIs)', 'Excel', 'AIESEC internal management platforms', 'Figma', 'Slack', 'Notion'],
      current: false
    }
   
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through my professional career, showcasing growth, achievements, 
            and the diverse range of projects and technologies I've worked with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-200 transform md:-translate-x-2 z-10">
                  {experience.current && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary-600 rounded-full opacity-75"
                    />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card relative group"
                  >
                    {experience.current && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Current
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <Building2 size={16} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <Award size={16} className="text-primary-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <TrendingUp size={16} className="text-primary-600" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">250+</div>
                <div className="text-gray-600 dark:text-gray-400">Leetcode Problems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">200+</div>
                <div className="text-gray-600 dark:text-gray-400">GeeksforGeeks Problems </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience