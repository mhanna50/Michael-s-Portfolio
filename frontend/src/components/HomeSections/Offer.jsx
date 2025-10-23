import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-br from-[#A8B8A0] via-[#D4A5A5] to-[#C97064]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 ">
            <a 
              href="mailto:michaelhanna50@gmail.com"
              className="group"
            >
              <Button 
                size="lg"
                className=" border-2 border-white text-white hover:bg-white/90 hover:text-[#2C2C2C] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                className=" border-2 border-white text-white hover:bg-white/90 hover:text-[#2C2C2C] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                className=" border-2 border-white text-white hover:bg-white/90 hover:text-[#2C2C2C] px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="pt-8 border-t border-white/20">
            <a 
              href="/resume.pdf"
              download
              className="inline-block group"
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2C2C2C] px-8 py-6 text-lg rounded-xl transition-all duration-300"
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
