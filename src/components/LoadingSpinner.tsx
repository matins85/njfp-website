import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  size?: "small" | "medium" | "large" | "xl";
  text?: string;
};

const LoadingSpinner = ({
  size = "large",
  text = "Loading...",
}: LoadingSpinnerProps) => {
  const sizeClasses: Record<
    NonNullable<LoadingSpinnerProps["size"]>,
    string
  > = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
    xl: "w-24 h-24",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="text-center space-y-8">
        <div className="relative">
          <motion.div
            className={`${sizeClasses[size]} border-4 border-primary/20 dark:border-primary/40 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${sizeClasses[size]} bg-primary rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/70 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `${60 + i * 10}px 0px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl font-bold text-slate-800 dark:text-slate-200"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {text}
          </motion.h2>

          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-64 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
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
      </div>
    </div>
  );
};

export default LoadingSpinner;
