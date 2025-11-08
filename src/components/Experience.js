import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaCogs } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      position: "Associate System Engineer",
      company: "Devopstrio Pvt Ltd",
      period: "2025 - Present",
      location: "Chennai, India",
      icon: <FaServer />,
      responsibilities: [
        "Designed and developed web applications and projects for clients using modern technologies.",
        "Created responsive and user-friendly UI/UX designs to enhance user experience",
        "Collaborated with team members to plan, build, and deploy full-stack applications",
        "Integrated backend services and APIs using Python and cloud platforms like Azure",
        "Utilized Git for version control and efficient team collaboration"
      ],
      technologies: ["Flask", "Azure", "GitHub", "Python", "UI/UX prototyping"],
      achievements: [
        "Improved system performance by 30% through optimization",
        "Improved user interface and performance through responsive design techniques"
      ]
    },
    {
      position: "Frontend Development Intern",
      company: "Softstor Technology",
      period: "2024 - 2024",
      location: "On-Site",
      icon: <FaCode />,
      responsibilities: [
        "Gained hands-on experience in developing responsive web applications using HTML, CSS, and JavaScript",
        "Built and enhanced interactive web interfaces to improve user experience",
        "Implemented and tested web application features to ensure functionality and performance",
        "Troubleshot front-end issues and optimized web pages for speed and usability",
        "Collaborated with team members to develop and maintain web projects"
      ],
      technologies: [ "JavaScript", "HTML5", "CSS3", "Git"],
      achievements: [
        "Delivered 5+ responsive web applications ahead of schedule",
        "Improved page load speed by 25% through optimization"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>Professional <span>Experience</span></h2>
          <p>A journey of growth and technical excellence</p>
        </motion.div>

        <div ref={ref} className="experience-container">
          <motion.div 
            className="experience-tabs"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : ""}
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="tab-button-content">
                  <div className="company-icon">{exp.icon}</div>
                  <div className="company-info">
                    <div className="company-name">{exp.company}</div>
                    <div className="company-period">{exp.period}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <div className="experience-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="experience-details"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="experience-header">
                  <div className="position-info">
                    <motion.h3 
                      className="position-title"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {experiences[activeTab].position}
                    </motion.h3>
                    <motion.div 
                      className="company-details"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="company-name">{experiences[activeTab].company}</span>
                      <span className="experience-period">{experiences[activeTab].period}</span>
                      <span className="experience-location">{experiences[activeTab].location}</span>
                    </motion.div>
                  </div>
                </div>
                
                <div className="experience-body">
                  <div className="responsibilities-section">
                    <h4>Key Responsibilities</h4>
                    <motion.ul 
                      className="responsibilities-list"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {experiences[activeTab].responsibilities.map((item, i) => (
                        <motion.li 
                          key={i}
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="technologies-section">
                    <h4>Technologies Used</h4>
                    <div className="technologies-list">
                      {experiences[activeTab].technologies.map((tech, i) => (
                        <span key={i} className="technology-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="achievements-section">
                    <h4>Key Achievements</h4>
                    <ul className="achievements-list">
                      {experiences[activeTab].achievements.map((achievement, i) => (
                        <li key={i} className="achievement-item">
                          <span className="achievement-bullet">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;