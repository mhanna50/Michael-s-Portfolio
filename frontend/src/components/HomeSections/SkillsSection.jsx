import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Swift", "Java", "HTML/CSS"],
  frameworks: ["React", "Node.js", "Next.js", "SwiftUI", "Django", "Express"],
  tools: ["Git", "Docker", "AWS", "Figma", "Jest", "Selenium"],
  other: ["RESTful APIs", "GraphQL", "CI/CD", "Agile/Scrum", "Test Automation", "UI/UX Design"]
};

const SkillBadge = ({ skill, index, category }) => {
  const colors = {
    languages: "from-[#A8B8A0] to-[#8A9B82]",
    frameworks: "from-[#D4A5A5] to-[#C48B8B]",
    tools: "from-[#C97064] to-[#B86054]",
    other: "from-[#E8DCC4] to-[#D4C8A8]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-gradient-to-r ${colors[category]} text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300`}
    >
      {skill}
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 space-y-6"
        >
          <span className="font-accent uppercase tracking-[0.35em] text-lg text-primary-dark/70">
            Technical Focus
          </span>
          <h2 className="max-w-3xl font-serifalt text-5xl md:text-6xl text-black leading-tight">
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 rounded-full bg-[#A8B8A0]" />
          <p className="max-w-3xl font-serifalt text-lg text-neutral-dark/80">
            A cross-disciplinary toolkit that spans coding, automation, and design enables me to ship
            polished experiences while keeping performance, accessibility, and quality in check.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-medium text-[#2C2C2C] mb-6">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} index={idx} category="languages" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-[#2C2C2C] mb-6">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} index={idx} category="frameworks" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-[#2C2C2C] mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} index={idx} category="tools" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-[#2C2C2C] mb-6">Other Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.other.map((skill, idx) => (
                <SkillBadge key={idx} skill={skill} index={idx} category="other" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
