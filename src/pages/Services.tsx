import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Globe,
  Heart,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { type ReactNode } from "react";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
};
type Step = { step: string; title: string; description: string };

const Services = () => {
  const services: Service[] = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Governance & Peace",
      description:
        "Strengthening institutions, promoting human rights, and building peaceful societies.",
      features: [
        "Democratic governance",
        "Rule of law",
        "Human rights protection",
        "Conflict prevention",
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health & Well-being",
      description:
        "Improving healthcare systems and ensuring access to quality health services for all.",
      features: [
        "Universal health coverage",
        "Disease prevention",
        "Mental health support",
        "Health infrastructure",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Climate Action",
      description:
        "Combatting climate change and building resilience to environmental challenges.",
      features: [
        "Renewable energy",
        "Climate adaptation",
        "Biodiversity protection",
        "Green technology",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gender Equality",
      description:
        "Empowering women and girls and promoting gender equality in all areas of life.",
      features: [
        "Women's leadership",
        "Economic empowerment",
        "Education access",
        "Violence prevention",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Technology",
      description:
        "Leveraging technology and innovation to accelerate development progress.",
      features: [
        "Digital transformation",
        "Data analytics",
        "AI solutions",
        "Tech entrepreneurship",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education & Skills",
      description:
        "Ensuring inclusive and equitable quality education and lifelong learning opportunities.",
      features: [
        "Quality education",
        "Skills development",
        "Digital literacy",
        "Teacher training",
      ],
    },
  ];

  const processSteps: Step[] = [
    {
      step: "01",
      title: "Assessment",
      description:
        "We analyze the current situation and identify key challenges and opportunities.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "We develop comprehensive strategies tailored to local needs and priorities.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We work closely with partners to execute programs with measurable impact.",
    },
    {
      step: "04",
      title: "Monitoring",
      description:
        "We continuously track progress and adjust strategies for optimal results.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary/5 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive development solutions designed to address the
              world's most pressing challenges and create lasting positive
              change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Development Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We offer a wide range of services to support sustainable
              development across all sectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="mt-6 inline-flex items-center text-primary font-medium hover:opacity-80 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A systematic approach to development that ensures maximum impact
              and sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/30 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's work together to create sustainable solutions that make a
              real difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
