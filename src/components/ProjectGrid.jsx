import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import KajalDentalProject from './KajalDentalProject';

export default function ProjectGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;

    return projects.filter(
      (p) => p.filterCategory === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-lavender-600">
                03 / WORK
              </span>

              <span className="w-8 h-[1px] bg-lavender-300" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight mb-3">
              Projects
            </h2>

            <p className="text-charcoal-600 text-sm sm:text-base max-w-xl">
              A few ideas that made it out of my head and into the browser.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-cream-300 shadow-sm self-start md:self-auto">
            {projectCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isSelected
                      ? 'text-charcoal-950'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-100'
                  }`}
                  data-cursor="FILTER"
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-lavender-100 border border-lavender-200/80 rounded-xl -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          <AnimatePresence mode="popLayout">

            {/* Existing Projects */}
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={
                  project.featured && activeCategory === 'all'
                    ? 'md:col-span-2'
                    : ''
                }
              >
                <ProjectCard
                  project={project}
                  onSelectProject={onSelectProject}
                />
              </motion.div>
            ))}

            {/* Dr. Kajal Dental Clinic */}
            <motion.div
              layout
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <KajalDentalProject />
            </motion.div>

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}