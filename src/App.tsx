import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import ForBlog from "./ForBlog";

function App() {
  return (
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <Routes>
              {/* Blog Pages */}
              <Route path="/blogs" element={<ForBlog />} />

              {/* Main Page */}
              <Route
                path="/"
                element={
                  <>
                    <section id="home">
                      <Header />
                    </section>
                    <section id="about">
                      <About />
                    </section>
                    <section id="skills">
                      <Skills />
                    </section>
                    <section id="experience">
                      <Experience />
                    </section>
                    <section id="projects">
                      <Projects />
                    </section>
                    <section id="education">
                      <Education />
                    </section>
                    <section id="interests">
                      <Interests />
                    </section>
                    <section id="contact">
                      <Contact />
                    </section>
                  </>
                }
              />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
  );
}

export default App;
