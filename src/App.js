import React, { useState, useEffect } from "react";
import { register } from "swiper/element/bundle";

// Components
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CallToAction from "./components/CallToAction/CallToAction";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Register Swiper custom elements
register();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Handling Preloader
    const handleLoad = () => {
      // Small delay to ensure smooth transition availability if needed
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      {/* 
         We render the main content even while loading (hidden) 
         if we want to measure layout, but typically strictly replacing 
         the preloader is cleaner for React. 
         If you want the content to be visible BEHIND the loader (for a fade), 
         remove the !loading condition and use CSS on Preloader.
         For now, strict replacement:
      */}
      {!loading && (
        <>
          <Header />
          <About />
          <Services />
          <CallToAction />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
