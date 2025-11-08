import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: "💻",
      skills: ["JAVA", "HTML", "CSS", "SQL", "PHP", "C", "Python", "JavaScript", "React.js", "Node.js"]
    },
    {
      title: "Design & Marketing",
      icon: "🎨",
      skills: ["WordPress", "Canva", "UI/UX Design", "Social Media Marketing", "SEO", "Content Creation"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Problem Solving", "Presentation", "People Management", "Teamwork", "Communication", "Leadership"]
    }
  ];

  const tools = [
    { 
      name: "Visual Studio", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" 
    },
    { 
      name: "Google Colab", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/800px-Google_Colaboratory_SVG_Logo.svg.png" 
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    },
  { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
    },
     { 
      name: "PyTorch", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" 
    },
    { 
      name: "Flask", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" 
    },
    { 
      name: "Kali Linux", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg" 
    },
    { 
      name: "Canva", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" 
    },
    {  
  name: "Adobe",  
 logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"  
}
,
    { 
      name: "Figma", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
    },
    { 
      name: "Google Business", 
      logo: "https://www.gstatic.com/images/branding/product/2x/google_my_business_64dp.png" 
    },
      { 
      name: "Meta Business Suite", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/800px-Meta_Platforms_Inc._logo.svg.png" 
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
        duration: 0.5
      }
    }
  };

  const toolVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2>My <span>Skills</span> & <span>Tools</span></h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <div ref={ref} className="skills-container">
          <motion.div 
            className="skills-category-selector"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : ""}
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`category-btn ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          <div className="skills-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="skill-list-container"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{skillCategories[activeCategory].title}</h3>
                <motion.div 
                  className="skill-list"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          className="tools-section"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3>Tools & Technologies</h3>
          <motion.div 
            className="tools-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : ""}
          >
            {tools.map((tool, i) => (
              <motion.div 
                key={i}
                className="tool-item"
                variants={toolVariants}
                custom={i}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="tool-logo">
                  <img src={tool.logo} alt={tool.name} onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBmaWxsPSIjNjY2IiBkPSJNMTkgMTNINWE0IDQgMCAwIDAgLTQgNHYwYTQgNCAwIDAgMCA0IDRoMTRhNCA0IDAgMCAwIDQtNHYwYTQgNCAwIDAgMC00LTR6TTEyIDRhNCA0IDAgMSAwIDAgOCA0IDQgMCAwIDAgMC04eiIvPjwvc3ZnPg==';
                  }} />
                </div>
                <span className="tool-name">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;