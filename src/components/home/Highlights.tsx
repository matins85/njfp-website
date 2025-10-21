import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";
import { useState } from "react";

const Highlights = () => {
  const [activeFlow, setActiveFlow] = useState<"fellows" | "host">("fellows");

  const fellowsPrograms = [
    {
      id: 1,
      title: "12-Month Paid Work Placements",
      description:
        "12-month paid work placements available in both private and public sectors, designed to provide valuable hands-on experience and enhance your career prospects.",
      image: "/image-1.png",
    },
    {
      id: 2,
      title: "Monthly Stipend",
      description:
        "A monthly stipend of 150,000 NGN for the entire duration of the Fellowship, ensuring financial support throughout your journey.",
      image: "/hands.png",
    },
    {
      id: 3,
      title: "Alumni Talent Hub",
      description:
        "A further (unpaid) six months of career guidance and support in the Alumni Talent Hub for continued professional development.",
      image: "/image-9.png",
    },
    {
      id: 4,
      title: "National Coverage",
      description:
        "National Coverage across the 36 States and the Federal Capital Territory (FCT), providing opportunities nationwide.",
      image: "/hero-5.png",
    },
    {
      id: 5,
      title: "Employability Skills Training",
      description:
        "Comprehensive employability skills training to enhance your professional capabilities and market readiness.",
      image: "/image-4.png",
    },
    {
      id: 6,
      title: "Entrepreneurship Skills Training",
      description:
        "Entrepreneurship skills training to develop business acumen and entrepreneurial mindset for future ventures.",
      image: "/image-11.png",
    },
    {
      id: 7,
      title: "Digital Literacy Training",
      description:
        "Digital literacy and digital skills training to stay competitive in the modern digital economy.",
      image: "/image-10.png",
    },
    {
      id: 8,
      title: "Mentorship Opportunities",
      description:
        "Access to mentorship opportunities with industry professionals and experienced leaders for guidance and career development.",
      image: "/image-7.png",
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
          className="text-left mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-1">
            Programme Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-7xl">
            The Nigeria Jubilee Fellows Programme (NJFP) is a Federal Government of Nigeria
            initiative funded by the European Union (EU) and implemented in partnership with the
            United Nations Development Programme (UNDP).
          </p>
        </motion.div>

        {/* Elegant Tab Switcher - Commented Out */}
        {/* <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-1 bg-gray-50 rounded-xl p-1.5 shadow-sm border border-gray-200/50">
            <motion.button
              onClick={() => setActiveFlow("fellows")}
              className={`relative px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeFlow === "fellows"
                  ? "text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeFlow === "fellows" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 rounded-lg"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <div className="relative flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>For Fellows</span>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setActiveFlow("host")}
              className={`relative px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeFlow === "host"
                  ? "text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeFlow === "host" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 rounded-lg"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <div className="relative flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>For Host Organizations</span>
              </div>
            </motion.button>
          </div>
        </motion.div> */}

        {/* Timeline Content */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-0.5 hidden lg:block" />

          {/* Programs List */}
          <div className="space-y-8">
            {currentPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                className={`flex items-center gap-6 ${
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
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3"
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
                      className="text-sm text-gray-600 leading-relaxed"
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
                  <div className="flex justify-center">
                    {/* Main Image */}
                    <motion.div
                      className="relative group"
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
                      <div className="relative overflow-hidden rounded-xl shadow-md">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-72 h-36 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>


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
