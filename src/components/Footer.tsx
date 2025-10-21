import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-16 bg-[#D2EBC7] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-2xl bg-[#232326] text-white p-6 sm:p-8 relative overflow-hidden"
          style={{
            backgroundImage: "url(/footer-grainy-background.png)",
            backgroundRepeat: "repeat",
            backgroundAttachment: "fixed",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <h4 className="text-[18px] font-extrabold mb-2">
                Join Our Newsletter
              </h4>
              <p className="opacity-90 text-[14px]">
                Never miss an update from us, be the first to know about the
                latest information as soon as they are released to the public.
              </p>
            </div>
            <div className="flex items-center justify-start lg:justify-end">
              <div className="relative w-full max-w-xl">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-full bg-transparent border border-white/20 px-5 py-3 pr-12 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  className="absolute right-1 top-1.5 h-9 w-9 rounded-full bg-primary text-white grid place-items-center shadow hover:opacity-90 transition"
                  aria-label="Subscribe"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="my-5 h-px w-full bg-white/10" />

          <div className="flex items-center justify-between">
            <img src="/logo.svg" alt="NJFP" className="h-8 w-auto" />
            <div className="flex items-center gap-4 text-white/80">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.66 3.15 5.66 7.25V24h-5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-5V8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-white transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
