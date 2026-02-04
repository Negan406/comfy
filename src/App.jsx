import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  // Scroll to section when URL changes
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (location.pathname === "/about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (location.pathname === "/contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      <Header />

      <div className="pt-20">
        <Routes>
          {/* SAME PAGE (scroll sections) */}
          <Route
            path="/"
            element={
              <>
                <section ref={homeRef}>
                  <Home />
                </section>

                <section ref={aboutRef}>
                  <About />
                </section>

                <section ref={contactRef}>
                  <Contact />
                </section>
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <section ref={homeRef}>
                  <Home />
                </section>

                <section ref={aboutRef}>
                  <About />
                </section>

                <section ref={contactRef}>
                  <Contact />
                </section>
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <section ref={homeRef}>
                  <Home />
                </section>

                <section ref={aboutRef}>
                  <About />
                </section>

                <section ref={contactRef}>
                  <Contact />
                </section>
              </>
            }
          />

          {/* SEPARATE PAGE */}
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
