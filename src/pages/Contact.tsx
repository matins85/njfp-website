import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock,
  ExternalLink,
  Globe,
  Headphones,
  Instagram,
  Linkedin,
  MapPin,
  MessageSquare,
  Twitter,
  UserCheck,
} from "lucide-react";
import { useState, type ReactNode } from "react";

type ContactMethod = {
  icon: ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
  external?: boolean;
};

type SocialLink = {
  icon: ReactNode;
  name: string;
  href: string;
};

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactMethods: ContactMethod[] = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "General Support",
      description:
        "Get help from our community or submit a ticket to our support team.",
      action: "Get Support",
      href: "mailto:info@njfp.ng",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Fellowship Support",
      description:
        "Dedicated support for fellows with quick response within 24 hours.",
      action: "Contact Fellows Team",
      href: "mailto:fellows@njfp.ng",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Host Organizations",
      description: "Partnership inquiries and support for host organizations.",
      action: "Contact Host Team",
      href: "mailto:hosts@njfp.ng",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Phone Support",
      description: "Call us during business hours for immediate assistance.",
      action: "+234 (0) 800 NJFP-HELP",
      href: "tel:+2348006534357",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Twitter className="w-4 h-4" />,
      name: "Follow us on X",
      href: "https://twitter.com/njfp_ng",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      name: "Connect on LinkedIn",
      href: "https://linkedin.com/company/njfp",
    },
    {
      icon: <Instagram className="w-4 h-4" />,
      name: "Follow on Instagram",
      href: "https://instagram.com/njfp_ng",
    },
    {
      icon: <Globe className="w-4 h-4" />,
      name: "Visit our website",
      href: "https://njfp.ng",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Vercel Style */}
      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Contact us.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to join the NJFP family? Have questions about the programme?
              We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods - Vercel Style Grid */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredCard(method.title)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                      hoveredCard === method.title
                        ? "translate-x-1 text-slate-600"
                        : ""
                    }`}
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {method.description}
                </p>

                <div className="text-sm font-medium text-slate-900 group-hover:text-primary transition-colors duration-300">
                  {method.action}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links - Vercel Style */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <span className="text-slate-900 font-medium group-hover:text-primary transition-colors duration-300">
                    {social.name}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location - Vercel Style */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Visit Our Office
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Located in the heart of Abuja's Central Business District, our
                  office is easily accessible and welcoming.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        United Nations House
                      </p>
                      <p className="text-slate-600 text-sm">
                        Plot 617/618 Diplomatic Drive
                        <br />
                        Central Business District
                        <br />
                        Abuja, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Business Hours
                      </p>
                      <p className="text-slate-600 text-sm">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9!2d7.5!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDfCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
