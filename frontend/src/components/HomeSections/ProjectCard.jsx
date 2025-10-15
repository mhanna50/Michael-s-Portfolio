import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function ProjectCard({ project, index }) {
  const [showMedia, setShowMedia] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E8DCC4]"
      >
        <div 
          className="h-56 bg-gradient-to-br from-[#A8B8A0] to-[#D4A5A5] relative overflow-hidden cursor-pointer"
          onClick={() => setShowMedia(true)}
        >
          {project.thumbnail ? (
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon className="w-16 h-16 text-white opacity-30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
            <span className="text-white text-sm font-medium">View Media</span>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-medium text-[#2C2C2C] mb-3 group-hover:text-[#A8B8A0] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#6B6B6B] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] text-white rounded-lg hover:bg-[#3C3C3C] transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#C97064] text-white rounded-lg hover:bg-[#B86054] transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <Dialog open={showMedia} onOpenChange={setShowMedia}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-[#2C2C2C]">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {project.media && project.media.length > 0 ? (
              <div className="grid gap-4">
                {project.media.map((mediaUrl, idx) => (
                  <img 
                    key={idx}
                    src={mediaUrl} 
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#A8B8A0] to-[#D4A5A5] h-96 rounded-lg flex items-center justify-center">
                <p className="text-white text-lg">No media available</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}