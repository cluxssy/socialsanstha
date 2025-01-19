import { motion } from 'framer-motion';
import { useState } from 'react';

const Works = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Brand Evolution",
      category: "Branding",
      year: "2024",
      image: "/works/brand1.jpg",
      tags: ["Strategy", "Design", "Identity"],
      description: "Complete brand transformation for a leading tech company"
    },
    {
      id: 2,
      title: "Digital Campaign",
      category: "Marketing",
      year: "2024",
      image: "/works/campaign1.jpg",
      tags: ["Social Media", "Content", "Analytics"],
      description: "Integrated digital campaign across multiple platforms"
    },
    {
      id: 3,
      title: "Web Experience",
      category: "Development",
      year: "2023",
      image: "/works/web1.jpg",
      tags: ["UI/UX", "Development", "Animation"],
      description: "Immersive web experience for luxury brand"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-bold text-white mb-12 tracking-tighter"
        >
          WORKS
        </motion.h1>

        <div className="flex gap-4 mb-12">
          {['all', 'branding', 'marketing', 'development'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm uppercase tracking-wider ${
                filter === category
                  ? 'bg-accent-400 text-dark-400'
                  : 'bg-dark-300 text-white hover:bg-dark-200'
              } rounded-full transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((project) => filter === 'all' || project.category.toLowerCase() === filter)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark-300 rounded-lg mb-4">
                  <div className="absolute inset-0 bg-dark-400/60 group-hover:bg-dark-400/40 transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-accent-400 text-lg">View Project →</span>
                  </motion.div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-sm text-primary-400">{project.year}</span>
                  </div>
                  <p className="text-primary-400 mb-3">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-accent-400 bg-dark-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
