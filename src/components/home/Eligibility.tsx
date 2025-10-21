import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { BadgeCheck, GraduationCap, Clock, BriefcaseBusiness, CheckCircle, IdCard } from "lucide-react";

const Eligibility = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
    },
    {
      src: "/hero-2.png",
      alt: "Fellows networking and building connections",
      title: "Networking & Connections"
    },
    {
      src: "/hero-3.png",
      alt: "Fellows in professional work environment",
      title: "Work Experience"
    },
    {
      src: "/hero-4.png",
      alt: "Fellows celebrating achievements",
      title: "Achievements & Growth"
    },
    {
      src: "/hero-5.png",
      alt: "Fellows in learning and development sessions",
      title: "Learning & Development"
    },
    // Duplicate for seamless loop
    {
      src: "/hero-1.png",
      alt: "NJFP Fellows with social media frames showing #JubileeFellows and #ProudlyJubilee",
      title: "Community & Pride"
    },
    {
      src: "/image-4.png", 
      alt: "Fellow holding SDG 8 sign for Decent Work and Economic Growth",
      title: "Sustainable Development Goals"
    }
  ];

  // Auto-scroll effect (smooth + seamless)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let rafId: number | null = null;
    let prevTs = 0;
    const pxPerMs = 0.08; // speed

    const tick = (ts: number) => {
      if (prevTs === 0) prevTs = ts;
      const delta = ts - prevTs;
      prevTs = ts;

      if (!isHovered) {
        scrollContainer.scrollLeft += delta * pxPerMs;
        const halfWidth = scrollContainer.scrollWidth / 2; // because we render items twice
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      prevTs = 0;
    };
  }, [isHovered]);

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
            <h3 className="text-lg font-extrabold text-[#333333] mb-1">
              Who can apply? (Eligibility Criteria)
            </h3>
            <p className="text-sm text-gray-600 mb-6">Clear, simple requirements – designed to include talented graduates nationwide.</p>

            {(() => {
              const eligibilityItems = [
                { title: "Nigerian citizen", desc: "Open to graduates across all 36 States + FCT.", Icon: BadgeCheck },
                { title: "Recent graduate", desc: "Bachelor's degree or HND (not earlier than 2022).", Icon: GraduationCap },
                { title: "Academic standing", desc: "Min. 2:2 (BSc) or Upper Credit (HND).", Icon: CheckCircle },
                { title: "Age requirement", desc: "30 years old or younger.", Icon: Clock },
                { title: "Availability", desc: "Not currently engaged in full‑time employment.", Icon: BriefcaseBusiness },
                { title: "NYSC status", desc: "Completed NYSC or have official exemption.", Icon: IdCard },
              ];

              const docsItems = [
                { title: "Degree Certificate (Notarized)", Icon: GraduationCap },
                { title: "NYSC Certificate / Exemption", Icon: IdCard },
              ];

              return (
                <div className="space-y-8">
                  {/* Eligibility grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {eligibilityItems.map((item, idx) => (
                      <motion.div
                        key={item.title}
                        className="group relative rounded-xl bg-white/80 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <item.Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-[15px] font-semibold text-[#111]">{item.title}</div>
                            <div className="text-[13px] text-gray-600 leading-snug">{item.desc}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Documentation */}
                  <div>
                    <h4 className="text-sm font-extrabold text-[#333333] mb-3">Documentation Required</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {docsItems.map((doc, idx) => (
                        <motion.div
                          key={doc.title}
                          className="flex items-center gap-3 rounded-lg p-3 bg-white/80 shadow-sm"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.35, delay: 0.2 + idx * 0.05 }}
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <doc.Icon className="h-4 w-4" />
                          </div>
                          <span className="text-[13px] text-[#333] font-medium">{doc.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="mt-4 flex items-center gap-3">
              <button onClick={() => { window.location.href = "https://fellow-staging.njfp.ng/registration/"; }} className="relative inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm hover:shadow-md transition">
                <span className="relative z-10">Apply as a Fellow</span>
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/25 via-white/0 to-white/25 translate-x-[-120%] skew-x-[-20deg] rounded-full"
                  style={{ animation: "shine 1.6s ease-in-out infinite" }}
                />
              </button>
              <button onClick={() => { window.location.href = "https://host-staging.njfp.ng/registration/"; }} className="relative inline-flex items-center px-4 py-2 rounded-full bg-white text-primary text-sm font-semibold shadow-sm hover:shadow-md transition">
                <span className="relative z-10">
                  Apply as a Host Organisation
                </span>
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-white/0 to-white/60 translate-x-[-120%] skew-x-[-20deg] rounded-full"
                  style={{ animation: "shine 1.6s ease-in-out infinite" }}
                />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Horizontal Scrolling Gallery - Outside container to prevent overflow */}
      <motion.div
        className="relative mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Auto-scrolling carousel (duplicated content for seamless loop) */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8"
            style={{
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                className="flex-shrink-0 w-80 h-64 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default Eligibility;