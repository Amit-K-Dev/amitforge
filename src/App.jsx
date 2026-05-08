import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";

import Home from "@/pages/home";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="fixed left-0 top-0 z-100 h-0.75 w-full origin-left bg-primary shadow-[0_0_20px_hsl(var(--primary))]"
    />
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-background text-foreground">
        <ScrollProgress />

        <Navbar />
        <Sidebar />

        <AnimatedRoutes />

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
