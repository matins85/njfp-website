import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact us", path: "/contact" },
  ];

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
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 mb-8" />

          {/* Logo, Copyright, and Social Media */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <img src="/logo.svg" alt="NJFP" className="h-8 w-auto" />
            
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © {currentYear} Nigeria Jubilee Fellows Programme. All rights reserved.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
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
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.63-1.2 2.17-2.46 4.47-2.46 4.78 0 5.66 3.15 5.66 7.25V24h-5v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-5V8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
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
