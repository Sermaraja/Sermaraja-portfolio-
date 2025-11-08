import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaTrophy, 
  FaMedal, 
  FaAward, 
  FaMicrophone, 
  FaShieldAlt, 
  FaRecycle, 
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaUniversity
} from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const achievementVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const educationData = [
    {
      degree: "Bachelor of Science (HONORS) – Computer Science",
      institution: "G. Venkataswamy Naidu College, Kovilpatti",
      period: "June 2022 - May 2025",
      score: "GPA: 7.57",
      icon: <FaGraduationCap />,
      description: "Specialized in advanced computer science concepts, software development methodologies, and practical programming skills.",
      courses: ["Data Structures", "Algorithms", "Web Development", "Database Management", "Software Engineering"],
      highlights: ["Advanced Programming", "Project Development", "Research Methodology"]
    },
    {
      degree: "HSC - 12th Computer Science",
      institution: "Nadar Higher Secondary School, Kovilpatti",
      period: "June 2021 - May 2022",
      score: "Percentage: 70%",
      icon: <FaUniversity />,
      description: "Completed higher secondary education with focus on computer science fundamentals and programming basics.",
      courses: ["Programming Basics", "Computer Fundamentals", "Mathematics", "Physics"],
      highlights: ["Foundation Courses", "Practical Labs", "Problem Solving"]
    }
  ];

  const achievementsData = [
    {
      title: "1st Prize in PPT Presentation",
      event: "National Level Competition",
      organization: "SRNM College, Sattur 2025",
      description: "Presented paper on 'SmartDust' technology showcasing innovative research and presentation skills",
      icon: <FaTrophy />,
      prize: "First Prize",
      color: "linear-gradient(135deg, #FFD700, #FFA500)",
      date: "2025",
      type: "gold"
    },
    {
      title: "PPT Presentation on Cyber Security",
      event: "Imperia 2K24 National Level Competition",
      organization: "Mannar Thirumalai Nayakar College, Madurai",
      description: "Presented on advanced cyber security concepts, threats, and mitigation strategies",
      icon: <FaShieldAlt />,
      prize: "Participation",
      color: "linear-gradient(135deg, #147efb, #0d6efd)",
      date: "2024",
      type: "blue"
    },
    {
      title: "E-Waste Innovation",
      event: "Technical Competition",
      organization: "GVN College, Kovilpatti",
      description: "Won second prize for innovative E-waste management solution addressing environmental concerns",
      icon: <FaRecycle />,
      prize: "Second Prize",
      color: "linear-gradient(135deg, #C0C0C0, #A9A9A9)",
      date: "2024",
      type: "silver"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Enhanced Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="title-wrapper">
            <FaStar className="title-icon" />
            <h2 className="section-title">
              Education & <span className="highlight">Achievements</span>
            </h2>
            <FaStar className="title-icon" />
          </div>
          <p className="section-subtitle">
            My academic journey and notable accomplishments
          </p>
          <div className="section-divider"></div>
        </motion.div>
        
        {/* Main Content Grid */}
        <motion.div 
          ref={ref}
          className="education-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          {/* Education Timeline */}
          <div className="education-column">
            <div className="column-header">
              <FaGraduationCap className="column-icon" />
              <h3>Academic Journey</h3>
            </div>
            <div className="education-timeline">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="education-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="card-header">
                    <div className="education-icon-wrapper">
                      {item.icon}
                    </div>
                    <div className="education-main">
                      <h4 className="degree">{item.degree}</h4>
                      <h5 className="institution">{item.institution}</h5>
                    </div>
                    <div className="education-badge">
                      <span className="score">{item.score}</span>
                    </div>
                  </div>
                  
                  <div className="education-details">
                    <div className="detail-row">
                      <div className="detail-item">
                        <FaCalendarAlt className="detail-icon" />
                        <span>{item.period}</span>
                      </div>
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>Kovilpatti, TamilNadu</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="education-description">{item.description}</p>
                  
                  <div className="courses-section">
                    <h6>Key Courses & Subjects</h6>
                    <div className="courses-grid">
                      {item.courses.map((course, i) => (
                        <span key={i} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {item.highlights && (
                    <div className="highlights-section">
                      <h6>Key Highlights</h6>
                      <ul className="highlights-list">
                        {item.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="timeline-indicator">
                    <div className="timeline-dot"></div>
                    {index !== educationData.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Achievements Section */}
          <div className="achievements-column">
            <div className="column-header">
              <FaTrophy className="column-icon" />
              <h3>Academic Achievements</h3>
            </div>
            <div className="achievements-grid">
              {achievementsData.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="achievement-card"
                  variants={achievementVariants}
                  initial="hidden"
                  animate={inView ? "visible" : ""}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="achievement-header">
                    <div 
                      className="achievement-medal"
                      style={{ background: achievement.color }}
                    >
                      {achievement.icon}
                      <div className={`prize-ribbon ${achievement.type}`}>
                        {achievement.prize}
                      </div>
                    </div>
                    <div className="achievement-title-section">
                      <h4>{achievement.title}</h4>
                      <span className="achievement-date">{achievement.date}</span>
                    </div>
                  </div>
                  
                  <div className="achievement-content">
                    <div className="achievement-meta">
                      <span className="achievement-event">{achievement.event}</span>
                      <span className="achievement-org">{achievement.organization}</span>
                    </div>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                  
                  <div className="achievement-footer">
                    <div className="achievement-badge">
                      {achievement.prize}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;