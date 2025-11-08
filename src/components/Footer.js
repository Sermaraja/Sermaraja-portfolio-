import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Sermaraja", name: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sermaraja-v09022005/", name: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com", name: "Twitter" },
    { icon: <FaEnvelope />, url: "mailto:sermarajav.offcl@gmail.com", name: "Email" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-theme">
      {/* Call to Action */}
      <motion.div 
        className="footer-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Let’s Build Something Great Together</h2>
        <p>Have an idea, project, or collaboration in mind? I’d love to hear from you.</p>
        <a href="#contact" className="footer-btn">Get in Touch</a>
      </motion.div>

      {/* Main Footer */}
      <div className="footer-grid">
        <motion.div className="footer-brand" variants={fadeIn} initial="hidden" whileInView="visible" custom={0.2}>
          <h3>Sermaraja<span>V</span></h3>
          <p>
            Turning code into meaningful experiences. Focused on web innovation and human-centered design.
          </p>
          <div className="social-icons">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className="footer-links" variants={fadeIn} initial="hidden" whileInView="visible" custom={0.4}>
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-links" variants={fadeIn} initial="hidden" whileInView="visible" custom={0.6}>
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">UI/UX Design</a></li>
            <li><a href="#services">System Optimization</a></li>
            <li><a href="#services">Consulting</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-contact" variants={fadeIn} initial="hidden" whileInView="visible" custom={0.8}>
          <h4>Contact</h4>
          <p><strong>Email:</strong> <a href="mailto:sermarajav.offcl@gmail.com">sermarajav.offcl@gmail.com</a></p>
          <p><strong>Location:</strong> Tamil Nadu, India</p>
          <p><strong>Available for:</strong> Freelance & Remote Work</p>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div className="footer-bottom" variants={fadeIn} initial="hidden" whileInView="visible" custom={1}>
        <p>© {currentYear} Sermaraja V — Designed with passion & precision.</p>
        <button className="scroll-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;
