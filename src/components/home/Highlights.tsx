import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import { useState } from "react";

const Highlights = () => {
  const [activeFlow, setActiveFlow] = useState<"fellows" | "host">("fellows");

  const fellowsPrograms = [
    {
      id: 1,
      title: "Fully Paid Experience",
      description:
        "12-month meaningful work placement with monthly stipend of NGN 150,000. No financial burden on fellows - focus entirely on learning and professional growth.",
      image: "/hero-1.png",
    },
    {
      id: 2,
      title: "Leading Organizations",
      description:
        "Work with top-tier companies and organizations across 36 States + FCT. Gain exposure to industry best practices and cutting-edge technologies.",
      image: "/hero-2.png",
    },
    {
      id: 3,
      title: "Comprehensive Support",
      description:
        "Mentorship, training, and hands-on experience in your chosen field. Build essential skills and expand your professional network with industry experts.",
      image: "/hero-3.png",
    },
    {
      id: 4,
      title: "Career Acceleration",
      description:
        "Jumpstart your career with real-world experience. Post-fellowship pathways: retention by host, entrepreneurship, or new roles leveraging year-long experience.",
      image: "/hero-4.png",
    },
    {
      id: 5,
      title: "Alumni Network",
      description:
        "Join our growing community of successful fellows. 6-month Alumni Talent Hub support and lifelong connections for continued professional development.",
      image: "/hero-5.png",
    },
  ];

  const hostPrograms = [
    {
      id: 1,
      title: "Access Top Talent",
      description:
        "Connect with pre-screened, highly qualified graduates ready to contribute from day one. Access to cutting-edge, job-ready skills without the recruitment hassle.",
      image: "/hero-1.png",
    },
    {
      id: 2,
      title: "Cost-Effective Solution",
      description:
        "Significant cost savings with reduced HR, interview, and advertising expenses. Monthly stipend paid by NJFP - no salary burden on your organization.",
      image: "/hero-2.png",
    },
    {
      id: 3,
      title: "Smart Matching",
      description:
        "AI-powered matching system connects fellows to roles based on skills, interests, and aspirations. Independent Talent Management Company ensures optimal placements.",
      image: "/hero-3.png",
    },
    {
      id: 4,
      title: "Network Expansion",
      description:
        "Join a national network of forward-thinking organizations. Build community & social value while engaging in policy dialogue around education and employment.",
      image: "/hero-4.png",
    },
    {
      id: 5,
      title: "Flexible Participation",
      description:
        "Multiple ways to participate: Host Organisation, Knowledge Partner, or Financial Contributor. Choose the level of engagement that works for your organization.",
      image: "/hero-5.png",
    },
  ];

  const currentPrograms =
    activeFlow === "fellows" ? fellowsPrograms : hostPrograms;

  return (
    <section className="pb-20 pt-10 relative overflow-hidden">
      {/* Noise Background */}
      <div className="noise-overlay absolute inset-0 z-0 opacity-30 mix-blend-screen" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-1">
            Programme Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the journey and opportunities available through the Nigeria
            Jubilee Fellows Programme
          </p>
        </motion.div>

        {/* Premium Flow Switcher */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-3 shadow-md border-gray-200/50 backdrop-blur-sm">
            {/* Animated Background Slider */}
            <motion.div
              className="absolute inset-3 bg-gradient-to-r from-primary via-primary/90 to-primary rounded-2xl shadow-lg"
              initial={false}
              animate={{
                x: activeFlow === "fellows" ? 0 : "100%",
                width: "50%",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Floating Particles */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
            <div
              className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-1/2 -right-2 w-1 h-1 bg-primary/60 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 -left-2 w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            />

            <div className="relative flex">
              <motion.button
                onClick={() => setActiveFlow("fellows")}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 z-10 min-w-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative flex-shrink-0"
                  animate={{
                    rotate: activeFlow === "fellows" ? [0, -10, 10, 0] : 0,
                    scale: activeFlow === "fellows" ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <GraduationCap
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeFlow === "fellows"
                        ? "text-white"
                        : "text-gray-600 group-hover:text-primary"
                    }`}
                  />
                </motion.div>

                <span
                  className={`text-sm font-bold transition-colors duration-300 ${
                    activeFlow === "fellows"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-primary"
                  }`}
                >
                  For Fellows
                </span>

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: activeFlow === "fellows" ? "100%" : "-100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.button>

              <motion.button
                onClick={() => setActiveFlow("host")}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 z-10 min-w-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative flex-shrink-0"
                  animate={{
                    rotate: activeFlow === "host" ? [0, -10, 10, 0] : 0,
                    scale: activeFlow === "host" ? 1.1 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <Building2
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeFlow === "host"
                        ? "text-white"
                        : "text-gray-600 group-hover:text-primary"
                    }`}
                  />
                </motion.div>

                <span
                  className={`text-sm font-bold transition-colors duration-300 ${
                    activeFlow === "host"
                      ? "text-white"
                      : "text-gray-600 group-hover:text-primary"
                  }`}
                >
                  For Host Organizations
                </span>

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: activeFlow === "host" ? "100%" : "-100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-0.5 hidden lg:block" />

          {/* Programs List */}
          <div className="space-y-16">
            {currentPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                className={`flex items-center gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                {/* Content Side */}
                <motion.div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.2,
                    ease: "easeOut"
                  }}
                >
                  <div className="max-w-md mx-auto lg:mx-0">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.3,
                        ease: "easeOut"
                      }}
                    >
                      {program.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.4,
                        ease: "easeOut"
                      }}
                    >
                      {program.description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div 
                  className="hidden lg:flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg relative z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.1,
                    ease: "easeOut"
                  }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>

                {/* Image Side */}
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut"
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {/* Main Image */}
                    <motion.div
                      className={`${
                        index % 2 === 0 ? "col-span-2" : "col-span-1"
                      } relative group`}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2 + 0.4,
                        ease: "easeOut"
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Additional Images */}
                    {index % 2 === 0 && (
                      <>
                        <motion.div
                          className="relative group"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + 0.5,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                              src="/hero-2.png"
                              alt="Program highlight"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.div>
                        <motion.div
                          className="relative group"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + 0.6,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                              src="/hero-3.png"
                              alt="Program highlight"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.div>
                      </>
                    )}

                    {index % 2 === 1 && (
                      <>
                        <motion.div
                          className="relative group"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + 0.5,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                              src="/hero-4.png"
                              alt="Program highlight"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.div>
                        <motion.div
                          className="relative group"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2 + 0.6,
                            ease: "easeOut"
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl shadow-lg">
                            <img
                              src="/hero-5.png"
                              alt="Program highlight"
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
