import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection({ theme }) {
  const sectionTheme = theme?.sections?.contact;
  const accent = theme?.accent;
  const palette = sectionTheme?.palette || {};
  const sectionStyle = sectionTheme
    ? {
        background: sectionTheme.bg,
        color: sectionTheme.text,
      }
    : undefined;

  const themed = Boolean(sectionTheme);
  const accentVars =
    themed && accent
      ? {
          "--accent-color": palette.buttonBg || accent,
          "--accent-text": palette.buttonText || sectionTheme.text || "#f8fafc",
          "--accent-contrast": palette.buttonText || sectionTheme.buttonContrast || "#0f172a",
        }
      : undefined;

  const headingStyle = palette.heading ? { color: palette.heading } : undefined;
  const bodyStyle = palette.body ? { color: palette.body } : undefined;
  const dividerStyle = palette.divider
    ? { borderColor: palette.divider }
    : themed
    ? {
        borderColor: `${sectionTheme.text ?? "#f8fafc"}33`,
      }
    : undefined;

  const primaryBtn = themed && accent
    ? "bg-transparent border-[var(--accent-color)] text-[var(--accent-text)] hover:bg-[var(--accent-color)] hover:text-[var(--accent-contrast)]"
    : "bg-transparent border-white text-white hover:bg-white/90 hover:text-[#2C2C2C]";
  const outlineBtn = themed && accent
    ? "bg-transparent border-[var(--accent-color)] text-[var(--accent-text)] hover:bg-[var(--accent-color)] hover:text-[var(--accent-contrast)]"
    : "bg-transparent border-white text-white hover:bg-white hover:text-[#2C2C2C]";
  const dividerClass = themed ? "border-white/10" : "border-white/20";

  return (
    <section
      id="contact"
      className={`py-32 px-6 ${
        themed
          ? "text-inherit"
          : "bg-gradient-to-br from-[#A8B8A0] via-[#D4A5A5] to-[#C97064] text-white"
      }`}
      style={sectionStyle}
    >
      <div className="max-w-4xl mx-auto text-center" style={accentVars}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl font-light mb-6 tracking-tight"
            style={headingStyle}
          >
            Let's Connect
          </h2>
          <p
            className="text-xl mb-12 leading-relaxed"
            style={bodyStyle}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:michaelhanna50@gmail.com" className="group">
              <Button
                size="lg"
                className={`${primaryBtn} px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2`}
              >
                <Mail className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Email Me
              </Button>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className={`${primaryBtn} px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2`}
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                LinkedIn
              </Button>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className={`${primaryBtn} px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2`}
              >
                <Github className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                GitHub
              </Button>
            </a>
          </div>

          <div className={`pt-8 border-t ${dividerClass}`} style={dividerStyle}>
            <a href="/resume.pdf" download className="inline-block group">
              <Button
                variant="outline"
                size="lg"
                className={`${outlineBtn} px-8 py-6 text-lg rounded-xl transition-all duration-300 border-2`}
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
