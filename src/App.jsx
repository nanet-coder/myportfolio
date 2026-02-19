import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot";
import Skills from "./components/Skills";
import RainThunder from "./components/RainThunder";
import Blob from "./components/Blog";

function App() {

  useEffect(() => {
    // --- AOS INITIALIZATION ---
    AOS.init({
      duration: 1000,       // Duration of animations in milliseconds
      easing: 'ease-in-out', // Smooth easing function
      once: false,          // Animations happen every time you scroll (down or up)
      mirror: true,         // Fades/Slides out when scrolling back up
      anchorPlacement: 'top-bottom', // Triggers when top of element hits bottom of viewport
    });
    // Refresh AOS calculation on load
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/cf/ba/5e/cfba5e4691a171b450dfd59adc4a5d59.jpg')",
      }}
    >
      <RainThunder />

      {/* Dark overlay for contrast */}
      <div className="bg-black/60 min-h-screen text-white relative z-10 overflow-x-hidden">
        <Navbar />

        {/* --- Content Sections with AOS Attributes --- */}
        <div data-aos="fade-down" data-aos-delay="100">
          <Hero />
        </div>

        <div data-aos="fade-right" data-aos-delay="200">
          <Skills />
        </div>

        <div data-aos="fade-left" data-aos-delay="300">
          <About />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Blob />
        </div>

        <div data-aos="zoom-in" data-aos-delay="500">
          <Projects />
        </div>

        <div data-aos="flip-up" data-aos-delay="600">
          <Contact />
        </div>

        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}

export default App;