import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import LoadingOverlay from "./components/LoadingOverlay";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rooms from "./pages/rooms/Rooms";
import Details from "./pages/rooms/Details";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Reservations from "./pages/Clients/Reservations";

function App() {
  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem("reservations");
    return saved ? JSON.parse(saved) : [];
  });
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  // Global user state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : false;
  }); // false → not logged in
  const [loading, setLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);

  // Initial loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);
  const zid = (res) => {
    setReservations((e) => [...e, res]);
  };

  // Determine transition key to group single-page routes
  const isMainPage = ["/", "/about", "/contact"].includes(location.pathname);
  const transitionKey = isMainPage ? "main-scroller" : location.pathname;

  // Scroll and Page Loading behavior management
  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // For any other page change (e.g., /rooms), trigger brief loader and jump to top
      const isRoomDetails = location.pathname.startsWith("/rooms/") && location.pathname !== "/rooms";

      if (!loading && !isRoomDetails) {
        setIsPageLoading(true);
        const timer = setTimeout(() => {
          setIsPageLoading(false);
          window.scrollTo(0, 0);
        }, 800);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location, loading]);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {(loading || isPageLoading) && <LoadingOverlay key="loader" />}
      </AnimatePresence>

      <Header user={user} setUser={setUser} />

      <div className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={transitionKey}>
            {/* Login & Register */}
            <Route
              path="/login"
              element={
                <PageTransition>
                  <Login setUser={setUser} />
                </PageTransition>
              }
            />
            <Route
              path="/register"
              element={
                <PageTransition>
                  <Register />
                </PageTransition>
              }
            />

            {/* Rooms */}
            <Route
              path="/rooms"
              element={
                <PageTransition>
                  <Rooms />
                </PageTransition>
              }
            />
            <Route
              path="/rooms/:id"
              element={
                <PageTransition>
                  <Details user={user} add={zid} />
                </PageTransition>
              }
            />
            <Route path="/Reservation" element={<Reservations reservations={reservations} />} />

            {/* Single page scroll sections */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <section ref={homeRef}>
                    <Home />
                  </section>
                  <section ref={aboutRef}>
                    <About />
                  </section>
                  <section ref={contactRef}>
                    <Contact />
                  </section>
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <section ref={homeRef}>
                    <Home />
                  </section>
                  <section ref={aboutRef}>
                    <About />
                  </section>
                  <section ref={contactRef}>
                    <Contact />
                  </section>
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <section ref={homeRef}>
                    <Home />
                  </section>
                  <section ref={aboutRef}>
                    <About />
                  </section>
                  <section ref={contactRef}>
                    <Contact />
                  </section>
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;
