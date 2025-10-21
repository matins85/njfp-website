import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-8 sm:pt-12 pb-10 lg:pb-52 relative overflow-hidden">
      {/* Noise Background */}
      <div className="noise-overlay absolute inset-0 z-0 opacity-30 mix-blend-screen" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-6 lg:gap-8 items-start">
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

            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-700 mb-4">
                The Nigeria Jubilee Fellows Programme (NJFP) is uniquely
                positioned to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Empower young professional by aligning their skills with
                    labour market needs through data-driven talent intelligence
                    making them competitive for the Labor market.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Address structural barriers of Employers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-12">
          {/* Title */}
          <div className="text-left mb-8 sm:mb-14">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              The Journey of a Fellow
            </h3>
          </div>

          {/* Journey Steps - Mobile: Vertical flow, Desktop: Absolute positioning */}
          <div className="block lg:hidden space-y-8">
            {/* Mobile: Vertical flow for all steps */}
            {[
              {
                step: 1,
                title: "Application",
                description: "A young graduate who has completed their mandatory Nigeria Youth Service Corps (NYSC) year applies to become a Fellow with required documentation.",
                hasProfile: false
              },
              {
                step: 2,
                title: "Selection Process",
                description: "Once application and documentation are approved, the applicant sits through a series of tests – a computer-based aptitude test, a video submission, and finally a psychometric assessment.",
                hasProfile: false
              },
              {
                step: 3,
                title: "Onboarding",
                description: "Once they have successfully passed and completed these assessments, they will join the applicant pool where they will build their CVs and await a suitable match with a Host Organization. Placement is based on a match between an available Host Organization's talent requirements and an applicant's development needs, within a specific catchment area.",
                hasProfile: true
              },
              {
                step: 4,
                title: "Work Placement",
                description: "Once a match is made, the onboarding and placement processes begin. When an applicant is invited to begin work by their Host Organization, and they resume, then they become a Fellow.",
                hasProfile: false
              },
              {
                step: 5,
                title: "Mentorship & Growth",
                description: "After their 12-month paid Fellowship, Fellows who are not retained by their Host Organization or do not find other means of employment, may be offboarded into the Talent Hub for alumni.",
                hasProfile: false
              },
              {
                step: 6,
                title: "Alumni Talent Hub",
                description: "Alumni receive further career guidance and support for a further unpaid six (6) months in the Talent Hub. Please note that being in the applicant pool does not make one a Fellow and it does not guarantee placement.",
                hasProfile: true
              }
            ].map((stepData, index) => (
              <motion.div
                key={stepData.step}
                className="relative bg-gradient-to-br from-orange-100 to-white rounded-2xl p-6 shadow-lg border border-orange-200/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step Number */}
                <div className="absolute -top-2 -left-2 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">{stepData.step}</span>
                </div>
                <div className="absolute -top-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 bg-orange-200/60 rounded-lg"></div>

                <div className="pt-4 sm:pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {stepData.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stepData.description}
                  </p>
                </div>

                {/* Profile Pictures for steps 3 and 6 */}
                {stepData.hasProfile && (
                  <div className="absolute -top-2 -right-2 flex">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden">
                      <img
                        src={stepData.step === 3 ? "/student.jpg" : "/hero-4.png"}
                        alt="Fellow"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                      <img
                        src={stepData.step === 3 ? "/student-2.jpg" : "/hero-5.png"}
                        alt="Fellow"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {stepData.step === 3 && (
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                        <img
                          src="/student-3.jpg"
                          alt="Fellow"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop: Original absolute positioning */}
          <div className="hidden lg:block relative min-h-[800px] sm:min-h-[900px]">
            {/* Step 1 - Application */}
            <motion.div
              className="absolute top-0 left-0 w-80 sm:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Application
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A young graduate who has completed their mandatory Nigeria Youth Service Corps (NYSC) year applies to become a Fellow with required documentation.
                  </p>
                </div>

                {/* Connection Point */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 2 - Selection */}
            <motion.div
              className="absolute top-32 sm:top-40 right-8 sm:right-12 w-80 sm:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Selection Process
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once application and documentation are approved, the applicant sits through a series of tests – a computer-based aptitude test, a video submission, and finally a psychometric assessment.
                  </p>
                </div>

                {/* Connection Point */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 3 - Onboarding */}
            <motion.div
              className="absolute top-64 sm:top-80 left-8 sm:left-12 w-80 sm:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Onboarding
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Once they have successfully passed and completed these assessments, they will join the applicant pool where they will build their CVs and await a suitable match with a Host Organization.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Placement is based on a match between an available Host Organization's talent requirements and an applicant's development needs, within a specific catchment area.
                  </p>
                </div>

                {/* Profile Pictures */}
                <div className="absolute -top-2 -right-2 flex">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img
                      src="/student.jpg"
                      alt="Fellow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                    <img
                      src="/student-2.jpg"
                      alt="Fellow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                    <img
                      src="/student-3.jpg"
                      alt="Fellow"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 - Placement */}
            <motion.div
              className="absolute top-96 sm:top-[28rem] right-8 sm:right-12 w-80 sm:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Work Placement
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once a match is made, the onboarding and placement processes begin. When an applicant is invited to begin work by their Host Organization, and they resume, then they become a Fellow.
                  </p>
                </div>

                {/* Connection Point */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 5 - Mentorship */}
            <motion.div
              className="absolute top-[40rem] sm:top-[44rem] left-8 sm:left-12 w-80 sm:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Mentorship & Growth
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    After their 12-month paid Fellowship, Fellows who are not retained by their Host Organization or do not find other means of employment, may be offboarded into the Talent Hub for alumni.
                  </p>
                </div>

                {/* Connection Point */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </motion.div>

            {/* Step 6 - Talent Hub */}
            <motion.div
              className="absolute top-[48rem] sm:top-[52rem] right-8 sm:right-12 w-80 sm:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Alumni Talent Hub
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Alumni receive further career guidance and support for a further unpaid six (6) months in the Talent Hub.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Please note that being in the applicant pool does not make one a Fellow and it does not guarantee placement.
                  </p>
                </div>

                {/* Profile Pictures */}
                <div className="absolute -top-2 -right-2 flex">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
                    <img
                      src="/hero-4.png"
                      alt="Alumni"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg overflow-hidden -ml-2">
                    <img
                      src="/hero-5.png"
                      alt="Alumni"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Line from Step 1 to Step 2 */}
              <path
                d="M 380 100 Q 500 150 620 180"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray="8,6"
                fill="none"
              />
              <circle cx="380" cy="100" r="4" fill="#f97316" />

              {/* Line from Step 2 to Step 3 */}
              <path
                d="M 620 180 Q 500 300 420 400"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray="8,6"
                fill="none"
              />
              <circle cx="620" cy="180" r="4" fill="#f97316" />

              {/* Line from Step 3 to Step 4 */}
              <path
                d="M 420 400 Q 600 450 720 500"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray="8,6"
                fill="none"
              />
              <circle cx="420" cy="400" r="4" fill="#f97316" />

              {/* Line from Step 4 to Step 5 */}
              <path
                d="M 720 500 Q 500 600 420 700"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray="8,6"
                fill="none"
              />
              <circle cx="720" cy="500" r="4" fill="#f97316" />

              {/* Line from Step 5 to Step 6 */}
              <path
                d="M 420 700 Q 600 750 720 800"
                stroke="#f97316"
                strokeWidth="3"
                strokeDasharray="8,6"
                fill="none"
              />
              <circle cx="420" cy="700" r="4" fill="#f97316" />
              <circle cx="720" cy="800" r="4" fill="#22c55e" />
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
