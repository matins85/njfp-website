import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-8 sm:py-12 relative overflow-hidden">
      {/* Noise Background */}
      <div className="noise-overlay absolute inset-0 z-0 opacity-30 mix-blend-screen" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column - About the Programme */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About the Programme
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              The Nigeria Jubilee Fellows Programme (NJFP) is a Federal
              Government of Nigeria initiative funded by the European Union (EU)
              and implemented in partnership with the United Nations Development
              Programme (UNDP). It seeks to address the unemployment challenge
              by connecting talented young Nigerian graduates with job placement
              opportunities in Host Organizations across the country— offering
              experience, building skills, and preparing the workforce of the
              future.
            </p>

          </motion.div>

          {/* Right Column - The Value Provided */}
          <motion.div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/20"
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Dark background with grainy texture */}
            <div
              className="relative bg-[#0f0f0f] p-4 sm:p-6 lg:p-8"
              style={{
                backgroundImage: "url('/footer-grainy-background.png')",
                backgroundRepeat: "repeat",
                backgroundAttachment: "fixed",
              }}
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                The Value Provided
              </h3>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4">
                The Nigeria Jubilee Fellows Programme (NJFP) is uniquely
                positioned to:
              </p>

              <ul className="space-y-2 sm:space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm leading-relaxed">
                    Empower young professionals by aligning their skills with
                    labour market needs through data-driven talent intelligence
                    making them competitive for the Labor market.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm leading-relaxed">Address structural barriers of Employers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm leading-relaxed">
                    Drive coordination mechanism of stakeholders towards a
                    sustainable talent and youth employability ecosystem
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Journey of a Fellow Section */}
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-12">
          {/* Title */}
          <div className="text-right mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              How does the Fellow Journey work?
            </h3>
          </div>

          {/* Journey Steps */}
          <div className="relative min-h-[600px] sm:min-h-[700px]">
            {/* Step 1 - Application */}
            <motion.div
              className="absolute top-0 left-0 w-80 sm:w-96"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-orange-200/60 rounded-lg"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Application</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Submit your application with required documents including degree certificate and NYSC certificate.
                  </p>
                </div>
                
                {/* Connection Point */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 2 - Selection */}
            <motion.div
              className="absolute top-32 sm:top-40 left-8 sm:left-12 w-80 sm:w-96"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-orange-200/60 rounded-lg"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Selection Process</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Complete computer-based aptitude test, video submission, and psychometric assessment to demonstrate your capabilities.
                  </p>
                </div>
                
                {/* Connection Point */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 3 - Onboarding */}
            <motion.div
              className="absolute top-16 sm:top-20 right-0 w-80 sm:w-96"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-orange-200/60 rounded-lg"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Onboarding</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Welcome to the programme! Complete orientation, receive your placement details, and prepare for your 12-month journey.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Get connected with your host organization and fellow cohort members.
                  </p>
                </div>
                
                {/* Profile Pictures */}
                <div className="absolute -top-2 -right-2 flex">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img src="/hero-1.png" alt="Fellow" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                    <img src="/hero-2.png" alt="Fellow" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                    <img src="/hero-3.png" alt="Fellow" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 - Placement */}
            <motion.div
              className="absolute top-64 sm:top-80 left-16 sm:left-20 w-80 sm:w-96"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-orange-200/60 rounded-lg"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Work Placement</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Begin your 12-month placement with monthly stipend of NGN 150,000. Gain real-world experience in your chosen field.
                  </p>
                </div>
                
                {/* Connection Point */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 5 - Mentorship */}
            <motion.div
              className="absolute top-80 sm:top-96 right-8 sm:right-12 w-80 sm:w-96"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-orange-200/60 rounded-lg"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Mentorship & Growth</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Receive ongoing mentorship, training, and professional development opportunities throughout your placement.
                  </p>
                </div>
                
                {/* Connection Point */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 6 - Talent Hub */}
            <motion.div
              className="absolute top-96 sm:top-[28rem] left-32 sm:left-40 w-80 sm:w-96"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50">
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-orange-200/60 rounded-lg"></div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Alumni Talent Hub</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Join our growing community of successful fellows with 6-month Alumni Talent Hub support and lifelong connections.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access career opportunities, entrepreneurship support, and continued professional development.
                  </p>
                </div>
                
                {/* Profile Pictures */}
                <div className="absolute -top-2 -right-2 flex">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img src="/hero-4.png" alt="Alumni" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                    <img src="/hero-5.png" alt="Alumni" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Line from Step 1 to Step 2 */}
              <path
                d="M 300 200 Q 350 250 320 350"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <circle cx="300" cy="200" r="3" fill="#f97316" />
              
              {/* Line from Step 2 to Step 3 */}
              <path
                d="M 400 400 Q 500 300 600 250"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <circle cx="400" cy="400" r="3" fill="#f97316" />
              
              {/* Line from Step 3 to Step 4 */}
              <path
                d="M 600 250 Q 500 400 400 500"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <circle cx="600" cy="250" r="3" fill="#f97316" />
              
              {/* Line from Step 4 to Step 5 */}
              <path
                d="M 400 500 Q 600 500 700 600"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <circle cx="400" cy="500" r="3" fill="#f97316" />
              
              {/* Line from Step 5 to Step 6 */}
              <path
                d="M 700 600 Q 600 650 500 700"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <circle cx="700" cy="600" r="3" fill="#f97316" />
              <circle cx="500" cy="700" r="3" fill="#22c55e" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
