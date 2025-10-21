import About from "../components/home/About";
import Eligibility from "../components/home/Eligibility";
import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* About + Journey */}
      <About />

      {/* Programme Highlights */}
      <Highlights />

      {/* Eligibility + Gallery */}
      <Eligibility />
    </div>
  );
};

export default Home;
