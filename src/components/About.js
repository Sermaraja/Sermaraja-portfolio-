import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, FaPaintBrush, FaBook, FaBasketballBall, 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, 
  FaFigma, FaGitAlt, FaServer 
} from 'react-icons/fa';

const About = () => {
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
        delayChildren: 0.3
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const skillItems = [
    { icon: <FaReact />, name: "React.js", level: "Intermediate", color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", level: "Intermediate", color: "#8CC84B" },
    { icon: <FaJs />, name: "JavaScript", level: "Intermediate", color: "#F7DF1E" },
    { icon: <FaHtml5 />, name: "HTML5", level: "Advanced", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "Advanced", color: "#1572B6" },
    { icon: <FaFigma />, name: "UI/UX Design", level: "Intermediate", color: "#F24E1E" },
    { icon: <FaGitAlt />, name: "Git & GitHub", level: "Intermediate", color: "#F05032" },
    { icon: <FaServer />, name: "System Admin", level: "Intermediate", color: "#1E90FF" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About <span>Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Get to know more about my background, skills, and passions
          </motion.p>
        </div>
        
        <div ref={ref} className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="/images/IMG20250821103531.jpg" alt="Sermaraja V" />
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3 
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
            >
              Web Developer & System Associate
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
            >
              I am a dedicated and passionate web developer with a strong foundation in computer science. Currently working as a System Associate at Devopstrio, I bring expertise in both development and system administration.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
            >
              My journey in technology started with a curiosity about how websites work, which evolved into a passion for creating digital solutions that make a difference. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </motion.p>
            
            <motion.div 
              className="about-details"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
            >
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value">Sermaraja</span>
              </div>
              <div className="detail-item">
                <span className="label">Email:</span>
                <span className="value">sermarajav.offcl@gmail.com</span>
              </div>
            <div className="detail-item">
                <span className="label">Location:</span>
                <span className="value">Kovilpatti,</span>
                <span className="value">TamilNadu</span>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
              className="skills-highlight"
            >
              <h4>Core Skills</h4>
              <div className="skills-grid">
                {skillItems.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="skill-card"
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? "visible" : ""}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="skill-icon"
                      variants={iconVariants}
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="skill-info">
                      <h5>{skill.name}</h5>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
              className="hobbies-section"
            >
              <h4>My Hobbies & Interests</h4>
              <div className="hobbies-list">
                <div className="hobby-item">
                  <div className="hobby-icon">
                    <FaBook />
                  </div>
                  <span>Book Reading</span>
                </div>
                <div className="hobby-item">
                  <div className="hobby-icon">
                    <FaBasketballBall />
                  </div>
                  <span>Sports</span>
                </div>
                <div className="hobby-item">
                  <div className="hobby-icon">
                    <FaCode />
                  </div>
                  <span>Coding</span>
                </div>
                <div className="hobby-item">
                  <div className="hobby-icon">
                    <FaPaintBrush />
                  </div>
                  <span>Design</span>
                </div>
              </div>
            </motion.div>
            
            <motion.a 
              href="#contact" 
              className="btn"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;