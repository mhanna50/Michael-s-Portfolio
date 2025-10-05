import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const sampleCertifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2023",
    url: "https://www.scrum.org/"
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "2022",
    url: "https://grow.google/uxdesign/"
  },
  {
    title: "ISTQB Certified Tester",
    issuer: "International Software Testing Qualifications Board",
    date: "2022",
    url: "https://www.istqb.org/"
  }
];

export default function CertificationsSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-4 tracking-tight">
            Certifications
          </h2>
          <div className="h-1 w-16 bg-[#C97064] mb-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sampleCertifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#FAF8F3] to-[#E8DCC4] p-8 rounded-2xl border border-[#E8DCC4] hover:border-[#A8B8A0] transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:bg-[#A8B8A0] transition-colors duration-300">
                  <Award className="w-6 h-6 text-[#A8B8A0] group-hover:text-white transition-colors duration-300" />
                </div>
                <ExternalLink className="w-5 h-5 text-[#6B6B6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-medium text-[#2C2C2C] mb-2 group-hover:text-[#A8B8A0] transition-colors">
                {cert.title}
              </h3>
              <p className="text-[#6B6B6B] mb-1">{cert.issuer}</p>
              <p className="text-sm text-[#8B8B8B]">{cert.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}