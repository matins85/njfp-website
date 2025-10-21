import React, { Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Faq = React.lazy(() => import("./pages/FAQ"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white transition-colors duration-300">
        <Navbar />

        <main id="main-content" className="pt-16">
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
