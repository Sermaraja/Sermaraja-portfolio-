import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Web Developer",
    "System Associate",
    "UI/UX Designer",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = textIndex % texts.length;
      const fullText = texts[current];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed]);

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/images/SERMARAJA V_Resume-1.pdf';
    link.download = 'Sermaraja_V_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="greeting">Hello, I'm</div>
            <h1><span>Sermaraja V</span></h1>
            <div className="dynamic-text">
              <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            <p>A passionate Web Developer and System Associate with expertise in creating innovative digital solutions. I specialize in building responsive websites and applications with modern technologies.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn secondary">Contact Me</a>
              <button onClick={handleDownload} className="btn outline">
                <FaDownload /> Download CV
              </button>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sermaraja-v09022005/" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Sermaraja" className="social-icon">
                <FaGithub />
              </a>
              <a href="mailto:sermarajav.offcl@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <img src="/images/profile.jpg" alt="Sermaraja V" className="profile-img" />
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
              <div className="decoration-box box-1"></div>
              <div className="decoration-box box-2"></div>
            </div>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;