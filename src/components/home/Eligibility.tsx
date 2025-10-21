import { motion } from "framer-motion";

const Eligibility = () => {
  const galleryImages = [
    {
      src: "/hero-1.png",
      alt: "NJFP Fellows with social media frames showing #JubileeFellows and #ProudlyJubilee",
      title: "Community & Pride"
    },
    {
      src: "/image-4.png", 
      alt: "Fellow holding SDG 8 sign for Decent Work and Economic Growth",
      title: "Sustainable Development Goals"
    },
    {
      src: "/image-1.png",
      alt: "Professional fellow in red vest representing program impact",
      title: "Professional Development"
    }
  ];

  return (
    <section className="pt-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {/* Copy block */}
          <motion.div
            className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6 sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-extrabold text-[#333333] mb-4">
              Who can apply? (Eligibility Criteria)
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Nigerian citizen</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Fresh graduate (bachelor's degree or HND Certificate) from any discipline and graduated not earlier than 2022.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Graduated with at least a Second-Class Lower (2.2) for bachelor's degree or Upper Credit (&gt; 3.00) for HND Certificate holders.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>30 years old or younger.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Not currently engaged in any employment.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Completed the mandatory National Youth Service Corps (NYSC) OR have a certificate of exemption from the NYSC.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Demonstrate interest/commitment in chosen career field.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Demonstrate interest/commitment to contributing to Nigeria's socio-economic development.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Excellent time management and a professional attitude.</span>
                </div>
                <div className="flex items-start gap-3 text-[15px]">
                  <span className="text-primary text-lg mt-0.5">✓</span>
                  <span>Good verbal and written communication skills.</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-extrabold text-[#333333] mb-4">
                  Documentation Required
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-[15px]">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span>A Notarized Degree Certificate</span>
                  </div>
                  <div className="flex items-start gap-3 text-[15px]">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span>An NYSC Certificate</span>
                  </div>
                  <div className="flex items-start gap-3 text-[15px]">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span>A Curriculum Vitae (CV)</span>
                  </div>
                  <div className="flex items-start gap-3 text-[15px]">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span>A National Identification Number (NIN) Slip</span>
                  </div>
                  <div className="flex items-start gap-3 text-[15px]">
                    <span className="text-primary text-lg mt-0.5">✓</span>
                    <span>A Bank Verification Number (BVN)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button onClick={() => { window.location.href = "https://fellow-staging.njfp.ng/registration/"; }} className="relative inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm hover:shadow-md transition">
                <span className="relative z-10">Apply as a fellow</span>
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/25 via-white/0 to-white/25 translate-x-[-120%] skew-x-[-20deg] rounded-full"
                  style={{ animation: "shine 1.6s ease-in-out infinite" }}
                />
              </button>
              <button onClick={() => { window.location.href = "https://host-staging.njfp.ng/registration/"; }} className="relative inline-flex items-center px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold shadow-sm hover:shadow-md transition">
                <span className="relative z-10">
                  Apply as a host Organisation
                </span>
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-white/0 to-white/60 translate-x-[-120%] skew-x-[-20deg] rounded-full"
                  style={{ animation: "shine 1.6s ease-in-out infinite" }}
                />
              </button>
            </div>
          </motion.div>

          {/* Triptych Gallery */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                className="relative group overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="relative h-96">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Image title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {image.title}
                    </h4>
                    <div className="flex items-center gap-2 text-white/80 text-xs">
                      <span>#JubileeFellows</span>
                      <span>•</span>
                      <span>#ProudlyJubilee</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;