import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobile, FaServer } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('major');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    { id: 'major', name: 'Major Projects', icon: <FaCode /> },
    { id: 'freelance', name: 'Freelance Work', icon: <FaMobile /> },
    { id: 'opensource', name: 'Open Source', icon: <FaServer /> }
  ];

  const majorProjects = [
    {
      id: 1,
      title: "Smart Paper Evaluation System",
      period: "August 2024 - March 2025",
      description: "Automated answer recognition system that extracts text from scanned answer sheets using OCR, compares responses with NLP, and provides detailed feedback with error detection.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["Python", "NLP", "OCR", "Automation", "Machine Learning"],
      features: [
        "Automated answer recognition using OCR technology",
        "Intelligent grading with NLP comparison algorithms",
        "Error detection for spelling and grammar mistakes",
        "Database integration for result storage and analytics"
      ],
      technologies: ["Python", "OpenCV", "NLTK", "TensorFlow", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML",
      status: "Completed"
    },
    {
      id: 2,
      title: "Smart Grade - OCR System",
      period: "December 2023 - January 2024",
      description: "Developed a web-based OCR system to extract text from PDFs, enhancing document digitization and processing with high accuracy using Python and OCR technology.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["Python", "OCR", "Machine Learning", "Web Development"],
      features: [
        "Extracts text from PDFs with high accuracy rates",
        "Enhances document digitization and processing workflows",
        "Leveraged advanced Python and OCR technology",
        "Streamlined user-friendly interface for easy operation"
      ],
      technologies: ["Python", "Tesseract", "Flask", "OpenCV"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
      status: "Completed"
    },
    {
      id: 3,
      title: "Recipe Sharing Web App",
      period: "January 2024 - March 2024",
      description: "Developed a platform for sharing and discovering recipes with clean, responsive UI using HTML, CSS, and JavaScript with interactive search, filter, and rating systems.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design"],
      features: [
        "Interactive search and filter systems for easy navigation",
        "Recipe rating and review functionality for community engagement",
        "Responsive design optimized for all devices",
        "User testing and engagement optimization techniques"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development",
      status: "Completed"
    }
  ];

  const freelanceProjects = [
    {
      id: 4,
      title: "Event Maina - Event Registration Platform",
      period: "September 2024 - October 2024",
      description: "Designed and developed a dynamic event registration platform to streamline user participation and management with secure database integration.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      tags: ["PHP", "SQL", "JavaScript", "Freelance", "Database"],
      features: [
        "Streamlined user participation and management system",
        "Secure database integration with proper validation",
        "Responsive and interactive user interface",
        "Efficient event browsing and registration process"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development",
      status: "Completed",
      client: "Event Management Company"
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

  const getProjectsByCategory = () => {
    switch (activeTab) {
      case 'major': return majorProjects;
      case 'freelance': return freelanceProjects;
      case 'opensource': return [];
      default: return majorProjects;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>My <span>Projects</span></h2>
          <p>Showcasing my technical expertise and creative solutions</p>
        </motion.div>

        <div ref={ref} className="projects-container">
          <motion.div 
            className="projects-categories"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {projectCategories.map((category) => (
              <button 
                key={category.id}
                className={`category-filter ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          <div className="projects-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {getProjectsByCategory().map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="project-card"
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    layout
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <div className="project-actions">
                          {project.liveUrl && (
                            <a href={project.liveUrl} className="project-action" target="_blank" rel="noopener noreferrer">
                              <FaExternalLinkAlt />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a href={project.githubUrl} className="project-action" target="_blank" rel="noopener noreferrer">
                              <FaGithub />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="project-badges">
                        <span className="project-category">{project.category}</span>
                        <span className="project-status">{project.status}</span>
                      </div>
                    </div>
                    <div className="project-content">
                      <div className="project-header">
                        <h3>{project.title}</h3>
                        <span className="project-period">{project.period}</span>
                      </div>
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-features">
                        <h4>Key Features</h4>
                        <ul>
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-technologies">
                        <h4>Technologies</h4>
                        <div className="tech-tags">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="project-tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="project-tag">{tag}</span>
                        ))}
                      </div>

                      {project.client && (
                        <div className="project-client">
                          <strong>Client:</strong> {project.client}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {getProjectsByCategory().length === 0 && (
              <motion.div 
                className="no-projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="no-projects-icon">📁</div>
                <h3>No Projects Found</h3>
                <p>There are no projects in this category yet. Check back soon!</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;