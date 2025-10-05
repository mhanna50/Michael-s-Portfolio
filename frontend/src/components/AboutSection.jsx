import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#FAF8F3]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-4 tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-[#C97064] mb-12 rounded-full" />
          
          <div className="space-y-6 text-lg text-[#5C5C5C] leading-relaxed">
            <p>
              I'm a passionate developer who finds joy in transforming complex problems into elegant, 
              user-friendly solutions. With a background spanning full-stack development, quality assurance, 
              and mobile app creation, I bring a holistic perspective to every project I touch.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a commitment to continuous learning. 
              Whether I'm building responsive web applications, crafting iOS experiences, or ensuring 
              software quality through rigorous testing, I approach each challenge with creativity and 
              precision. I believe that great software is not just about functionality—it's about creating 
              experiences that feel intuitive, beautiful, and purposeful.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or refining my craft through personal projects that push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}