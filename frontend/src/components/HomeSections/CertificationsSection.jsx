import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';

const educationHighlight = {
  institution: "West Chester University",
  degree: "B.S. Computer Science",
  graduation: "Class of 2025",
  focusAreas: [
    "Software development fundamentals",
    "Clean-Intuative design",
    "Quality assurance",
  ],
  description:
    "Studied how software is planned, built, and improved — with a focus on problem-solving, clear logic, and creating useful digital solutions."
};

const sampleCertifications = [
  {
    title: "Google UX Design Certificate",
    issuer: "Grow with Google",
    date: "2023",
    url: "https://grow.google/uxdesign/",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2023",
    url: "https://www.scrum.org/",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

const skillHighlights = [
  {
    key: "languages",
    label: "LANGUAGES",
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Swift", "Java", "HTML/CSS"],
  },
  {
    key: "frameworks",
    label: "FRAMEWORKS",
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Next.js", "SwiftUI", "Django", "Express"],
  },
  {
    key: "tools",
    label: "TOOLS",
    title: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "Figma", "Jest", "Selenium"],
  },
  {
    key: "Soft Skills",
    label: "CAPABILITIES",
    title: "Other Skills",
    items: ["RESTful APIs", "GraphQL", "CI/CD", "Agile/Scrum", "Test Automation", "UI/UX Design"],
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="credentials"
      className="py-32 px-6 bg-accent-light"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-accent uppercase tracking-[0.35em] text-lg text-primary-dark/70">
            Education & Skillset
          </span>
          <h2 className="max-w-3xl font-serifalt text-5xl md:text-6xl text-black leading-tight">
            With a focus on software development, web design,
            and problem-solving.
          </h2>
          <div className="h-1 w-24 rounded-full bg-[#C97064]" />
          
        </motion.div>

        <div className="mt-14 space-y-20">
          <motion.section
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] border border-[#E8DCC4] bg-gradient-to-r from-[#FFF9F0] via-white to-[#FFF4E4] p-10 shadow-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full bg-[#C97064]/10 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-[#C97064]">
                EDUCATION
              </span>
              <span className="h-1 w-24 rounded-full bg-[#C97064]/40" />
            </div>
            <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <GraduationCap className="h-7 w-7 text-[#C97064]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold text-[#2C2C2C]">
                    {educationHighlight.institution}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8B5E4C]">
                    {educationHighlight.graduation}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#454545]">
                  <span className="rounded-full bg-[#C97064]/15 px-3 py-1 text-sm font-medium text-[#C97064]">
                    {educationHighlight.degree}
                  </span>
                  <span className="text-[#8B8B8B]">
                    {educationHighlight.description}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {educationHighlight.focusAreas.map((focus) => (
                    <li
                      key={focus}
                      className="inline-flex items-center rounded-xl border border-[#E8DCC4] bg-white/80 px-4 py-3 text-sm font-medium text-[#2C2C2C]"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#A8B8A0]/15 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-[#4D6B5D]">
                  CERTIFICATIONS
                </span>
                <span className="h-1 w-16 rounded-full bg-[#A8B8A0]/50" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9BA79D]">
                Verified Skills
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sampleCertifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#E0E7DF] bg-white/80 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A8B8A0] hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3F5F2] transition-colors duration-300 group-hover:bg-[#A8B8A0]">
                    <Award className="h-5 w-5 text-[#6D8575] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#2C2C2C] group-hover:text-[#4D6B5D] transition-colors">
                      {cert.title}
                    </p>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#9BA79D]">
                      {cert.issuer}
                    </span>
                    <span className="text-xs font-medium text-[#6D8575]">
                      {cert.date}
                    </span>
                  </div>
                  <ExternalLink className="ml-auto h-4 w-4 text-[#9BA79D] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#F0D5CA]/40 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-[#B86054]">
                  SKILL DECK
                </span>
                <span className="h-1 w-20 rounded-full bg-[#F0D5CA]" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#B08E7D]">
                Core Toolkit
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillHighlights.map((skillGroup) => (
                <div
                  key={skillGroup.key}
                  className="group relative overflow-hidden rounded-2xl border border-[#E8DCC4] bg-white/85 px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C97064]/60 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#FFF3EC] px-3 py-1 text-[10px] font-semibold tracking-[0.3em] text-[#C97064]">
                      {skillGroup.label}
                    </span>
                    <span className="text-xs font-medium text-[#C1A694]">
                      {skillGroup.items.length} items
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-[#2C2C2C] group-hover:text-[#C97064] transition-colors">
                    {skillGroup.title}
                  </h4>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#E8DCC4] bg-[#FFF9F0] px-3 py-1 text-xs font-medium text-[#5A5149]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
