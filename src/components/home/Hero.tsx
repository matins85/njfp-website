import { motion } from "framer-motion";
import { MousePointer } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#F8FBF8] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Student Avatars with Mouse Pointers - Positioned relative to main section */}
      <div className="absolute max-w-7xl mx-auto inset-0 pointer-events-none">
        {/* Top Left Student */}
        <motion.div
          className="absolute top-20 left-4 lg:left-16 xl:left-24 pointer-events-auto"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative">
            <div className="w-16 h-16 m-5 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/student.jpg"
                alt="African university student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <MousePointer className="w-4 h-4 text-white transform -rotate-180" />
            </div>
          </div>
        </motion.div>

        {/* Top Right Student */}
        <motion.div
          className="absolute top-20 right-4 lg:right-16 xl:right-24 pointer-events-auto"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="relative">
            <div className="w-16 h-16 m-5 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/student-2.jpg"
                alt="African university student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -left-1 bg-primary rounded-full p-1">
              <MousePointer className="w-4 h-4 text-white transform -rotate-90" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Left Student */}
        <motion.div
          className="absolute top-[500px] left-4 lg:left-16 xl:left-24 pointer-events-auto"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="relative">
            <div className="w-16 h-16 m-5 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/student-3.jpg"
                alt="African university student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
              <MousePointer className="w-4 h-4 text-white transform rotate-90" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Right Student */}
        <motion.div
          className="absolute top-[500px] right-4 lg:right-16 xl:right-24 pointer-events-auto"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="relative">
            <div className="w-16 h-16 m-5 lg:w-20 lg:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/student-4.jpg"
                alt="African university student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-1 -left-1 bg-primary rounded-full p-1">
              <MousePointer className="w-4 h-4 text-white transform -rotate-270" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-gray-200 rounded-full shadow-sm">
            <svg
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-semibold text-primary">NJFP 2.0</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connecting{" "}
            <span className="relative">
              <span className="relative z-10">Nigeria's</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-400 -z-10"></span>
            </span>{" "}
            brightest graduates with meaningful careers
          </motion.h1>

          <motion.p
            className="text-lg text-[#333333] mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Nigeria Jubilee Fellows Programme provides young graduates with
            fully paid, 12-month placements across leading organizations,
            equipping them with practical experience and leadership skills
            needed for the future of work.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-[#1A362D] text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:from-[#1A362D] hover:to-primary border border-primary/20 overflow-hidden"
              onClick={() => {
                window.open(
                  "https://fellow-staging.njfp.ng/registration/",
                  "_blank"
                );
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-sm relative z-10 flex items-center gap-2">
                Apply as a fellow
              </span>
            </button>
            <button
              className="group relative px-8 py-4 bg-white text-primary font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border-primary/20 hover:border-primary/40 overflow-hidden backdrop-blur-sm"
              onClick={() => {
                window.open(
                  "https://host-staging.njfp.ng/registration/",
                  "_blank"
                );
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-sm relative z-10 flex items-center gap-2">
                Apply as a Host Organisation
              </span>
            </button>
          </motion.div>
        </div>

        {/* Partners Section */}
        <motion.div
          className="pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-primary mb-1">
              Powered by Leading Organizations
            </h3>
            <p className="text-sm text-gray-500">
              Created and supported by top-tier organizations to create
              meaningful career opportunities
            </p>
          </div>

          <div className="flex justify-center items-center gap-12">
            {/* Partner 1 */}
            <motion.div
              className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-100"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="w-32 h-20 flex items-center justify-center">
                <img
                  src="/partner-1.png"
                  alt="Partner 1"
                  className="max-w-full max-h-full object-contain group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Partner 2 */}
            <motion.div
              className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-100"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <div className="w-32 h-20 flex items-center justify-center">
                <img
                  src="/partner-2.png"
                  alt="Partner 2"
                  className="max-w-full max-h-full object-contain group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Partner 3 */}
            <motion.div
              className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-100"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="w-32 h-20 flex items-center justify-center">
                <img
                  src="/partner-3.png"
                  alt="Partner 3"
                  className="max-w-full max-h-full object-contain group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
