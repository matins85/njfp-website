import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const panels = [
  {
    title: "About NJFP (NJFP 2.0)",
    bullets: [
      "Renewed national effort to equip young Nigerians with skills, mentorship and opportunities.",
      "Led by the Federal Government of Nigeria; supported by the EU; implemented by UNDP.",
      "Connects talented graduates to meaningful work placements, career guidance and entrepreneurship.",
      "Since 2021: thousands placed in fully paid 12‑month roles across public and private sectors.",
      "NJFP 2.0 scales delivery to place 23,724 fellows as a national platform for employability and workforce transformation.",
    ],
  },
  {
    title: "Fast Facts",
    bullets: [
      "Covers 36 States + FCT (national reach).",
      "12‑month paid work opportunity (NGN 150,000 monthly stipend).",
      "Robust transparency & accountability: strong financial controls, M&E, audits and direct payments to youth.",
    ],
  },
  {
    title: "Why Host with NJFP?",
    bullets: [
      "Access to top talent with cutting‑edge, job‑ready skills.",
      "Productivity gains: reduce lead‑time and cost for entry‑level recruitment.",
      "Cost savings: fewer HR/interview/advertising/salary costs.",
      "Expanded network: connect with national private/public sector entities.",
      "Build community & social value; engage on policy dialogue around education, employment and industry issues.",
    ],
  },
  {
    title: "How NJFP Works",
    bullets: [
      "Fellows matched to hosts based on interests, skills and aspirations.",
      "Monthly stipend of NGN 150,000 paid by NJFP for 12 months.",
      "Post‑fellowship pathways: retention by host, entrepreneurship, or new roles leveraging year‑long experience.",
    ],
  },
  {
    title: "Expected Outcomes (NJFP 2.0)",
    bullets: [
      "More decent, meaningful employment for youth.",
      "Deeper engagement with hosts; onboard more employers across sectors.",
      "Stronger collaboration among government, private sector and development partners.",
      "Showcase success stories of innovation and growth.",
      "Enhance employability, entrepreneurship and workforce development.",
      "Reaffirm investment in youth as drivers of innovation and productivity.",
    ],
  },
  {
    title: "How Organisations Can Participate",
    bullets: [
      "Host Organisation: provide 12‑month meaningful paid placement(s).",
      "Knowledge Partner: offer mentoring, coaching, e‑learning and industry expertise.",
      "Financial Contributor: support with funds or materials (stipend, insurance, IT equipment, etc.).",
    ],
  },
  {
    title: "Requirements for Host Organisations",
    bullets: [
      "CAC registration and up‑to‑date regulatory documents; valid TIN.",
      "Clear role descriptions and agreement to provide mentorship.",
      "Commitment to programme code of conduct and guidelines.",
      "Non‑discrimination and PSHEA policies; no criminal records or proscribed affiliations.",
    ],
  },
  {
    title: "Requirements for Fellows",
    bullets: [
      "Nigerian citizen; fresh graduate (BSc/HND) from any discipline, not earlier than 2022.",
      "Minimum 2.2 (BSc) or Upper Credit (> 3.00 GPA) for HND.",
      "Age ≤ 30; not engaged in employment; completed NYSC or exemption.",
      "Must have NIN and BVN; strong interest in chosen field and Nigeria’s development; good communication and professionalism.",
    ],
  },
  {
    title: "Documentation Required (Fellows)",
    bullets: [
      "Notarized Degree Certificate.",
      "NYSC Certificate or Exemption Certificate.",
      "Curriculum Vitae (CV).",
      "NIN Slip and BVN; Birth Certificate.",
    ],
  },
  {
    title: "Eligibility & Application FAQs",
    bullets: [
      "Apply via the official portal: www.njfp.ng/apply.",
      "No fees at any stage; report suspected fraud to authorities.",
      "Applications: 22 Oct 2025 – 12 Nov 2025.",
      "Rural access: use business centres/cafes and always log out on public PCs.",
      "Alumni from 2021 phase or graduates before 2022 are not eligible.",
    ],
  },
  {
    title: "Testing Stages",
    bullets: [
      "CBT Aptitude Test (cut‑off 70%).",
      "60‑second video introduction.",
      "Psychometric Test (mandatory baseline data before onboarding).",
      "Use laptop/desktop, stable internet, updated Chrome/Edge; report issues to support.",
    ],
  },
  {
    title: "Selection Process",
    bullets: [
      "Eligibility check → CBT → Video → Psychometric → Long‑list → Final selection.",
      "Only those completing psychometric tests can be prequalified.",
      "Selection is rolling; only successful candidates contacted.",
      "Target placements in NJFP 2.0: 23,724 fellows; ~925 per state (even spread).",
    ],
  },
  {
    title: "Talent Pool & Matching",
    bullets: [
      "Prequalified candidates enter the NJFP Talent Pool (not yet Fellows).",
      "Matching depends on role availability, alignment with skills, sector and geography.",
      "Update certain profile details via dashboard; failure to respond/complete steps may disqualify.",
      "Independent Talent Management Company performs matching; location preferences not guaranteed.",
    ],
  },
  {
    title: "Placement & Stipend",
    bullets: [
      "12‑month placement; stipend NGN 150,000 monthly for all Fellows.",
      "After placement: 6‑month Alumni Talent Hub support (no stipend).",
    ],
  },
];

const FAQ = () => {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredPanels = useMemo(() => {
    if (!query.trim()) return panels;
    const q = query.toLowerCase();
    return panels
      .map((p) => ({
        ...p,
        bullets: p.bullets.filter((b) => b.toLowerCase().includes(q)),
      }))
      .filter((p) => p.title.toLowerCase().includes(q) || p.bullets.length > 0);
  }, [query]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-8 sm:pt-12 pb-6 sm:pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl sm:rounded-3xl bg-white ring-1 ring-black/5 shadow-sm p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#333333] leading-tight">
                THE NIGERIA JUBILEE FELLOWS PROGRAMME (NJFP 2.0)
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">Information Pack & FAQs • www.njfp.ng</p>
            </div>

            {/* Search */}
            <div className="mt-4 sm:mt-6 max-w-xl mx-auto">
              <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
              <div className="relative">
                <input
                  id="faq-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search topics, e.g. stipend, eligibility, CBT…"
                  className="w-full rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm outline-none ring-0 focus:border-primary focus:shadow-[0_0_0_3px_rgba(36,120,0,0.12)]"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-slate-400 text-xs sm:text-sm">⌘K</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners row */}
      <section className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl ring-1 ring-black/10 bg-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-16">
            <img src="/partner-1.png" alt="FGoN" className="h-10 sm:h-12 lg:h-14" />
            <img src="/partner-2.png" alt="EU" className="h-10 sm:h-12 lg:h-14" />
            <img src="/partner-2.svg" alt="UNDP" className="h-10 sm:h-12 lg:h-14" />
          </div>
        </div>
      </section>

      {/* Panels with TOC */}
      <section className="pb-8 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* TOC - Mobile dropdown */}
          <div className="lg:hidden mb-4">
            <div className="rounded-2xl ring-1 ring-black/5 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-bold text-[#333333] mb-3">Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredPanels.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setOpenIndex(idx)}
                    className={`text-left text-[12px] sm:text-[13px] px-3 py-2 rounded-lg transition ${
                      openIndex === idx ? "bg-primary/10 text-primary" : "hover:bg-slate-50"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* TOC - Desktop sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 rounded-2xl ring-1 ring-black/5 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-bold text-[#333333] mb-3">Contents</h3>
              <nav className="space-y-2">
                {filteredPanels.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setOpenIndex(idx)}
                    className={`block w-full text-left text-[13px] px-3 py-2 rounded-lg transition ${
                      openIndex === idx ? "bg-primary/10 text-primary" : "hover:bg-slate-50"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Accordions */}
          <div className="lg:col-span-9 space-y-3 sm:space-y-4">
            {filteredPanels.map((p, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl ring-1 ring-black/10 overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full bg-white px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="text-[12px] sm:text-[14px] font-semibold text-[#333333] pr-2">{p.title}</span>
                    <span className={`text-primary transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden>
                      ▾
                    </span>
                  </button>

                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 sm:px-5 overflow-hidden"
                  >
                    {p.bullets.length > 0 ? (
                      <ul className="my-3 sm:my-4 list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-[11px] sm:text-[13px] leading-5 sm:leading-6 text-slate-700">
                        {p.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="my-3 sm:my-4 text-[11px] sm:text-[13px] text-slate-600">No additional details.</p>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
