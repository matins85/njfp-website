import { AnimatePresence, motion } from "framer-motion";
import { Building2, ChevronDown, Menu, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dark mode removed

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact us", path: "/contact" },
  ] as const;

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLoginDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLoginClick = (type: "fellow" | "host") => {
    if (type === "fellow") {
      window.open("https://fellow-staging.njfp.ng", "_blank");
    } else {
      window.open("https://host-staging.njfp.ng", "_blank");
    }
    setIsLoginDropdownOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex-shrink-0 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/"
              aria-label="Go to homepage"
              className="flex items-center gap-3"
            >
              <img src="/logo.svg" alt="NJFP logo" className="h-14 w-auto" />
              <span className="sr-only">Home</span>
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 relative">
              {navItems.map((item) => (
                <motion.div key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-7 rounded-full bg-primary/5"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Login dropdown with premium shine */}
            <motion.div className="hidden md:block relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                className="relative inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-white font-semibold shadow-sm hover:shadow-md transition overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Login</span>
                <ChevronDown
                  size={16}
                  className={`ml-2 transition-transform duration-200 ${
                    isLoginDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-white/0 to-white/20 translate-x-[-120%] skew-x-[-20deg] will-change-transform"
                  style={{ animation: "shine 1.6s ease-in-out infinite" }}
                />
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isLoginDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50"
                  >
                    <motion.button
                      onClick={() => handleLoginClick("fellow")}
                      className="w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200 flex items-center gap-3"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Login as Fellow</div>
                        <div className="text-xs text-slate-500">
                          Access your fellow portal
                        </div>
                      </div>
                    </motion.button>

                    <div className="border-t border-slate-100 my-1" />

                    <motion.button
                      onClick={() => handleLoginClick("host")}
                      className="w-full px-4 py-3 text-left text-sm font-medium text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors duration-200 flex items-center gap-3"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Login as Host</div>
                        <div className="text-xs text-slate-500">
                          Access your host portal
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "text-primary bg-primary/10"
                        : "text-slate-700 hover:text-primary hover:bg-slate-100"
                    }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
