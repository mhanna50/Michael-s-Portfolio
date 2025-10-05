import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, TrendingUp, Zap, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    className="text-right"
  >
    <div className="flex items-center justify-end gap-3">
      <p className="text-5xl font-bold text-[#2C2C2C]">{value}</p>
      <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#A8B8A0]" />
      </div>
    </div>
    <p className="text-md text-[#6B6B6B] mt-1">{label}</p>
  </motion.div>
);

const ResultCard = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    className="flex items-center gap-3 text-[#5C5C5C]"
  >
    <Icon className="w-5 h-5 text-[#C97064]" />
    <span className="font-medium">{text}</span>
  </motion.div>
);

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#FAF8F3] via-[#E8DCC4] to-[#FAF8F3] p-6 lg:p-12 overflow-hidden">
      
      {/* Centered, Overlapping Image */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[50%] max-w-2xl hidden lg:block z-10"
      >
        <div className="h-full w-full rounded-b-[30rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80" 
            alt="Michael"
            className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
        </div>
      </motion.div>
      
      {/* Mobile Image */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[40vh] w-[80vw] max-w-sm lg:hidden block"
      >
        <div className="h-full w-full rounded-b-full overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80" alt="Michael" className="w-full h-full object-cover object-top" />
        </div>
      </motion.div>


      <div className="w-full h-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 relative z-20 pt-[45vh] lg:pt-0">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:text-left text-center"
        >
          <h2 className="text-2xl font-light text-[#5C5C5C] tracking-wider">
            Creative Developer
          </h2>
          <h1 className="text-8xl lg:text-9xl font-extrabold text-[#2C2C2C] my-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2C2C2C] to-[#5C5C5C]">
            Michael
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-sm mx-auto lg:mx-0 mb-8">
            Building beautiful, high-performance web experiences from concept to launch.
          </p>
          <a href="mailto:michael.email@example.com">
            <Button size="lg" className="bg-[#C97064] hover:bg-[#B86054] text-white rounded-xl px-8 py-6 group">
              Contact Me <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>

        {/* Right Content */}
        <div className="flex-col gap-10 items-end hidden lg:flex">
          <StatCard icon={Zap} value="50+" label="Projects Delivered" delay={0.4} />
          <StatCard icon={Users} value="25+" label="Happy Clients" delay={0.6} />
          <StatCard icon={Star} value="5k+" label="Contributions" delay={0.8} />
          <StatCard icon={TrendingUp} value="8" label="Years of Experience" delay={1.0} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 w-full flex justify-center pb-8 z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-6 w-full max-w-4xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <ResultCard icon={TrendingUp} text="+30% User Engagement" delay={1.3} />
            <ResultCard icon={Zap} text="-50% Page Load Time" delay={1.4} />
            <ResultCard icon={Users} text="98% Client Satisfaction" delay={1.5} />
            <ResultCard icon={Star} text="100% Responsive Design" delay={1.6} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}