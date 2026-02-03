import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef(null);
  const roomsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  // Scroll automatique selon l'URL
  useEffect(() => {
    const hash = location.pathname;
    if (hash === "/") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    if (hash === "/rooms") roomsRef.current?.scrollIntoView({ behavior: "smooth" });
    if (hash === "/about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    if (hash === "/contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  return (
    <div className="overflow-hidden">
      <Header />

      <div className="pt-20">
        <section ref={homeRef} id="home"><Home /></section>
        <section ref={roomsRef} id="rooms"><Rooms /></section>
        <section ref={aboutRef} id="about"><About /></section>
        <section ref={contactRef} id="contact"><Contact /></section>
      </div>

      <Routes>
        {/* Routes vides pour React Router, juste pour changer l’URL */}
        <Route path="/" />
        <Route path="/rooms" />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </div>
  );
}

export default App;
