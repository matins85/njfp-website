import { motion } from "framer-motion";
import { Globe, Users, Zap } from "lucide-react";
import { type ReactNode } from "react";

type Feature = { icon: ReactNode; title: string; description: string };

const Features = () => {
  const features: Feature[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "Making a difference worldwide through sustainable development initiatives.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description: "Empowering communities to build a better future together.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Driven",
      description:
        "Leveraging cutting-edge technology for sustainable solutions.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We combine decades of experience with innovative approaches to
            create sustainable development solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
