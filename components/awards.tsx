'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Trophy, Medal, Users } from 'lucide-react'

const Awards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const awards = [
    {
      id: 1,
      title: 'AIESEC One of Six Values Award',
      organization: 'AIESEC International',
      year: '2023',
      category: 'leadership',
      description: 'Recognized with AIESEC Value Award for outstanding commitment to organizational values and impact on global exchange initiatives.',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      achievements: [
        'Awarded as one of only six recipients across the organization.',
        'Demonstrated exceptional leadership in driving international collaborations and youth engagement.',
        'Contributed to strengthening AIESEC’s mission through impactful projects and value-driven performance.',
        'Honored for embodying AIESEC’s core principles in leadership, teamwork, and global impact.'
      ]
    }
  ]

  const leadershipRoles = [
    {
      title: 'Senior Manager – International Relations (Outgoing Social Sector)',
      organization: 'AIESEC (non-governmental not-for-profit organisation)',
      period: 'Jan 2023 – Sep 2023',
      description: 'Managed international partnerships and exchange programs, enabling 50+ youth to join impactful global social sector projects.',
      achievements: ['Global Partnership Management', 'Cross-Cultural Collaboration', 'Exchange Program Leadership']
    },
    {
      title: 'Junior Marketing Manager',
      organization: 'AIESEC non-governmental not-for-profit organisation',
      period: 'Aug 2022 – Jan 2023',
      description: 'Led marketing campaigns and flagship event promotions (Global Village, Youth Speak Summit), boosting engagement and strengthening AIESEC’s brand presence.',
      achievements: ['Marketing Campaigns Execution', 'Event Promotion Strategy', 'Brand Visibility Growth']
    },
    {
      title: 'Design Lead',
      organization: 'Fintech Club - Vellore Institute of Technology',
      period: 'Jan 2023 – Dec 2023',
      description: 'Led design and content strategy for high-profile events like StockPe and BNB Chain, creating engaging visuals and narratives that boosted participation and enhanced the club’s brand presence.',
      achievements: ['Content Strategy & Development', 'Creative Design Leadership', 'Event Collateral Development']
    },
    {
      title: 'Co-Design Lead',
      organization: 'AI Club - Vellore Institute of Technology',
      period: 'Jan 2022 – Jan 2023',
      description: 'Collaborated on UI/UX design for AI-driven projects and events, mentoring junior designers and ensuring creative alignment across initiatives.',
      achievements: ['UI/UX & Creative Design', 'Event & Project Branding', 'Team Collaboration & Leadership']
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
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="awards" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Awards & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition for excellence in technology, leadership, and community impact. 
            These achievements reflect my commitment to innovation and helping others grow.
          </p>
        </motion.div>

        {/* Awards Grid (Full width cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-8 mb-20 items-center"
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className="card group relative overflow-hidden w-full max-w-4xl"
            >
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${award.color} rounded-bl-3xl opacity-10`}></div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${award.color} rounded-xl shadow-lg`}>
                  <award.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {award.title}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {award.organization} • {award.year}
                  </div>
                  <span className={`px-2 py-1 bg-gradient-to-r ${award.color} text-white rounded-full text-xs font-medium`}>
                    {award.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {award.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Achievements:</h4>
                <ul className="space-y-1">
                  {award.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Roles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Leadership <span className="gradient-text">Roles</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {role.title}
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {role.organization} • {role.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                      {role.description}
                    </p>
                    <div className="space-y-1">
                      {role.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards
