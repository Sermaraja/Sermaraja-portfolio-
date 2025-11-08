import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import emailjs from "emailjs-com"; // 👈 Added EmailJS import

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle field input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_f559f5d",   // ✅ Your EmailJS Service ID
        "template_v23hzqa",  // ✅ Your Template ID
        formData,            // Sends name, email, subject, and message
        "nALgVxVF_iW4X00ge"  // ✅ Your Public Key
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Email sending failed:", error);
      alert("Something went wrong while sending your message. Please try again later.");
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 93616 61477",
      link: "tel:+919361661477",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sermarajav.offcl@gmail.com",
      link: "mailto:sermarajav.offcl@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Kovilpatti, TamilNadu, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "www.linkedin.com/in/sermaraja-v09022005",
      name: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Sermaraia",
      name: "GitHub",
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get In <span>Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Let's discuss your project and bring your ideas to life
          </motion.p>
        </div>

        <div ref={ref} className="contact-container">
          {/* Contact Information */}
          <div className="contact-info-wrapper">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3>Contact Information</h3>
              <p className="contact-description">
                Feel free to reach out for any questions or opportunities. I'm always open to new projects and ideas.
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
                    <motion.a
                      href={item.link}
                      className="contact-item"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="contact-icon-wrapper">
                        <div className="contact-icon">{item.icon}</div>
                      </div>
                      <div className="contact-content">
                        <h4>{item.title}</h4>
                        <p>{item.value}</p>
                      </div>
                    </motion.a>
                  </Tilt>
                ))}
              </div>

              <div className="social-links-section">
                <h4>Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <motion.div
                className="contact-form"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3>Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form-inner">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitted && (
                    <motion.div
                      className="success-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="success-icon">✓</div>
                      <div className="success-content">
                        <h4>Message Sent Successfully!</h4>
                        <p>Thank you for your message. I’ll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
