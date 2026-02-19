import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot";
import Skills from "./components/Skills";
import RainThunder from "./components/RainThunder";
import Blob from "./components/Blog"
function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/cf/ba/5e/cfba5e4691a171b450dfd59adc4a5d59.jpg')",
      }}
    >
      <RainThunder /> {/* Add rain and thunder effect */}

      {/* Dark overlay */}
      <div className="bg-black/60 min-h-screen text-white relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Blob/>
        <Projects />
        <Contact />
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
