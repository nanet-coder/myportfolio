import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot";
import Skills from "./components/Skills";
import RainThunder from "./components/RainThunder";

function App() {
  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/88/54/f6/8854f6eaf72165815cbd5734af19c510.jpg')",
      }}
    >
      <RainThunder /> {/* Add rain and thunder effect */}

      {/* Dark overlay */}
      <div className="bg-black/60 min-h-screen text-white relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
