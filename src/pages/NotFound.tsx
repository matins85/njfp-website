import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Large 404 text */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold text-primary mb-4"
              animate={{
                textShadow: [
                  "0 0 0px rgba(34, 120, 0, 0.5)",
                  "0 0 20px rgba(34, 120, 0, 0.5)",
                  "0 0 0px rgba(34, 120, 0, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.h1>

            {/* Floating elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/70 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Don't
            worry, let's get you back on track!
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-primary hover:opacity-90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
