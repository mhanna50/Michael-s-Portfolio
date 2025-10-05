import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProjectCard from './ProjectCard';

const sampleProjects = {
  websites: [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and responsive design. Built with React, Node.js, and MongoDB.",
      github: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://demo-ecommerce.com",
      thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80"]
    },
    {
      title: "Portfolio Builder",
      description: "A drag-and-drop portfolio builder that lets users create stunning personal websites without coding. Features real-time preview and export functionality.",
      github: "https://github.com/yourusername/portfolio-builder",
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"]
    }
  ],
  coding: [
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool for visualizing sorting and searching algorithms. Helps students understand computer science concepts through animation.",
      github: "https://github.com/yourusername/algo-viz",
      liveUrl: "https://demo-algo-viz.com",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"]
    },
    {
      title: "CLI Task Manager",
      description: "Command-line task management tool with priority sorting, deadlines, and project categorization. Built with Python.",
      github: "https://github.com/yourusername/cli-tasks",
      thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80"]
    }
  ],
  qa: [
    {
      title: "Automated Testing Framework",
      description: "Comprehensive testing framework for web applications using Selenium and pytest. Includes parallel execution and detailed reporting.",
      github: "https://github.com/yourusername/qa-framework",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"]
    },
    {
      title: "API Testing Suite",
      description: "RESTful API testing suite with automated validation, performance testing, and integration with CI/CD pipelines.",
      github: "https://github.com/yourusername/api-tests",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"]
    }
  ],
  ios: [
    {
      title: "Habit Tracker",
      description: "iOS app for building and tracking daily habits with streaks, reminders, and beautiful data visualizations. Built with SwiftUI.",
      github: "https://github.com/yourusername/habit-tracker",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"]
    },
    {
      title: "Recipe Finder",
      description: "Discover recipes based on ingredients you have at home. Features smart search, favorites, and meal planning.",
      github: "https://github.com/yourusername/recipe-finder",
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      media: ["https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80"]
    }
  ]
};

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#FAF8F3] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#2C2C2C] mb-4 tracking-tight">
            Portfolio
          </h2>
          <div className="h-1 w-16 bg-[#D4A5A5] mb-6 rounded-full" />
          <p className="text-lg text-[#6B6B6B] max-w-2xl">
            A collection of my work across web development, coding projects, quality assurance, and iOS applications
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white border border-[#E8DCC4] rounded-xl p-2 inline-flex gap-2">
              <TabsTrigger 
                value="websites" 
                className="rounded-lg px-6 py-3 data-[state=active]:bg-[#A8B8A0] data-[state=active]:text-white transition-all duration-300 whitespace-nowrap"
              >
                Website Projects
              </TabsTrigger>
              <TabsTrigger 
                value="coding" 
                className="rounded-lg px-6 py-3 data-[state=active]:bg-[#A8B8A0] data-[state=active]:text-white transition-all duration-300 whitespace-nowrap"
              >
                Coding Projects
              </TabsTrigger>
              <TabsTrigger 
                value="qa" 
                className="rounded-lg px-6 py-3 data-[state=active]:bg-[#A8B8A0] data-[state=active]:text-white transition-all duration-300 whitespace-nowrap"
              >
                QA Work
              </TabsTrigger>
              <TabsTrigger 
                value="ios" 
                className="rounded-lg px-6 py-3 data-[state=active]:bg-[#A8B8A0] data-[state=active]:text-white transition-all duration-300 whitespace-nowrap"
              >
                iOS Apps
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value="websites" key="websites" className="grid md:grid-cols-2 gap-8">
              {activeTab === "websites" && sampleProjects.websites.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </TabsContent>

            <TabsContent value="coding" key="coding" className="grid md:grid-cols-2 gap-8">
              {activeTab === "coding" && sampleProjects.coding.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </TabsContent>

            <TabsContent value="qa" key="qa" className="grid md:grid-cols-2 gap-8">
              {activeTab === "qa" && sampleProjects.qa.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </TabsContent>

            <TabsContent value="ios" key="ios" className="grid md:grid-cols-2 gap-8">
              {activeTab === "ios" && sampleProjects.ios.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}