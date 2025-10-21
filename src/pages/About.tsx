import { motion } from "framer-motion";
import { Award, CheckCircle2, Heart, Target, Users } from "lucide-react";
import { type ReactNode } from "react";

type Value = { icon: ReactNode; title: string; description: string };
type TimelineItem = { year: string; title: string; description: string };

const About = () => {
  const values: Value[] = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description:
        "To eradicate poverty and reduce inequalities through sustainable development programs that empower communities worldwide.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Vision",
      description:
        "A world where every person has the opportunity to live a life of dignity, equality, and prosperity.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in all our programs, ensuring measurable impact and sustainable outcomes.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description:
        "We believe in the power of collaboration, working closely with governments, communities, and organizations.",
    },
  ];

  const timeline: TimelineItem[] = [
    {
      year: "1965",
      title: "Foundation",
      description:
        "UNDP was established to help countries eliminate poverty and achieve sustainable development.",
    },
    {
      year: "1990",
      title: "Human Development Report",
      description:
        "Launched the first Human Development Report, introducing a new way of measuring progress.",
    },
    {
      year: "2000",
      title: "Millennium Development Goals",
      description:
        "Played a key role in developing and implementing the MDGs framework.",
    },
    {
      year: "2015",
      title: "Sustainable Development Goals",
      description:
        "Led the development of the 2030 Agenda and the 17 Sustainable Development Goals.",
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description:
        "Mobilized resources and expertise to help countries respond to the global pandemic.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Premium header badge */}
      <section className="pt-8 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 rounded-full bg-primary/10 text-primary px-3 sm:px-4 py-2 sm:py-2 text-[11px] sm:text-[12px] font-semibold text-center sm:text-left">
            <span className="text-center sm:text-left">About the Nigeria Jubilee Fellows Programme NJFP 2.0</span>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-primary" />
            <span className="text-primary/70 text-center sm:text-left text-[10px] sm:text-[12px]">
              Here is a brief about the UNDP's The Nigeria Jubilee Fellows
              Programme (NJFP 2.0).
            </span>
          </div>
        </div>
      </section>

      {/* Intro card */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-4 sm:p-5 lg:p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-7">
              The Nigeria Jubilee Fellows Programme (NJFP 2.0) represents a
              renewed national effort to equip young Nigerians with the skills,
              mentorship, and opportunities they need to build lasting careers.
              Led by the Federal Government of Nigeria, with support from the
              European Union (EU) and implemented by United Nations Development
              Programme (UNDP), the programme connects talented graduates to
              meaningful work placements, career guidance, and entrepreneurial
              pathways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Large feature image */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/hero-5.png"
              alt="NJFP fellows"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Eligibility-like copy block */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-4 sm:p-5 lg:p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-7">
              Since its first placements in October 2022, NJFP has provided thousands of young
              graduates with fully paid, 12-month placements across leading organizations in
              both the public and private sectors, equipping them with practical experience
              and leadership skills needed for the future of work.
            </p>
            <p className="text-[13px] sm:text-[14px] leading-6 sm:leading-7 mt-3 sm:mt-4">
              Building on its proven success, NJFP 2.0 ushers in a new era of
              scale and strategic integration, leveraging digital for programme
              delivery and skills development to place 23,724 fellows,
              positioning the programme as Nigeria's national platform for youth
              employability, enterprise creation, and workforce transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Green benefits card */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl bg-primary/90 text-white p-4 sm:p-5 lg:p-6 shadow-md"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[13px] sm:text-[14px] font-extrabold mb-3">
              NJFP 2.0 is designed to:
            </h4>
            <ul className="space-y-2 text-[12px] sm:text-[13px]">
              {[
                "Increase access to decent and meaningful employment opportunities for young Nigerians.",
                "Deepen engagement with host organisations while onboarding more employers across public and private sectors.",
                "Strengthen collaboration among government, private sector, and development partners.",
                "Highlight measurable success stories demonstrating how fellows and host institutions contribute to innovation and growth.",
                "Enhance pathways for youth employability, entrepreneurship, and workforce development.",
                "Reaffirm Nigeria's commitment to investing in youths as drivers of innovation, productivity, and sustainable economic transformation.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 text-white/90 flex-shrink-0" size={14} />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
