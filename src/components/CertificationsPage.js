import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import "../styles/Certifications.css";

const CertificationsPage = () => {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    { title: "Web Development Using React.js - NoviTech", image: "/images/webiner.jpg", organization: "NoviTech R&D Pvt. Ltd.", date: "Jan 2024" },
    { title: "Introduction to MongoDB for Students - MongoDB", image: "/images/mongoDb.jpg", organization: "MongoDB University", date: "Jul 2024" },
    { title: "Full Stack Development Internship - NoviTech", image: "/images/fsd.jpg", organization: "NoviTech R&D Pvt. Ltd.", date: "Dec 2023 - Jan 2024" },
    { title: "Python Mastery - Udemy", image: "/images/digital.jpg", organization: "Udemy", date: "Nov 2024" },
    { title: "Communication Skills - Udemy", image: "/images/communication.jpg", organization: "Udemy", date: "Aug 2024" },
    { title: "Publication Certificate - Yaappu", image: "/images/book1.jpg", organization: "Yaappu Publications", date: "2024" },
    { title: "Web Development Internship - Soft Stor", image: "/images/softtech.png", organization: "Soft Stor Technologies", date: "May 2024" },
    { title: "Digital Marketing for Beginners - Udemy", image: "/images/digital (2).jpg", organization: "Udemy", date: "Jan 2025" },
  ];

  return (
    <section className="certifications-page">
      <div className="cert-container">
        <motion.h2
          className="cert-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          All <span>Certifications</span>
        </motion.h2>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
              <motion.div
                className="cert-card clickable"
                onClick={() => setSelectedCert(cert)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="cert-image-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-img dynamic-size" />
                </div>
                <h3 className="cert-card-title">{cert.title}</h3>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.button
          onClick={() => navigate("/")}
          className="view-more-btn"
          whileHover={{ scale: 1.05 }}
        >
          ← Back to Home
        </motion.button>
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            onClick={() => setSelectedCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={selectedCert.image} alt={selectedCert.title} />
              <h3>{selectedCert.title}</h3>
              <p><strong>Organization:</strong> {selectedCert.organization}</p>
              <p><strong>Date:</strong> {selectedCert.date}</p>
              <button onClick={() => setSelectedCert(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsPage;
