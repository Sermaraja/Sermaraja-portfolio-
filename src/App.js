import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CertificationsPage from "./components/CertificationsPage"; // ✅ New
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Certifications /> {/* preview + view more */}
                <Contact />
              </>
            }
          />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
