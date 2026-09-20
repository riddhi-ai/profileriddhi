import { useState } from 'react';
import {
  ArrowUpRight,
  Github,
  Sparkles,
  BookOpen,
  Globe,
} from 'lucide-react';

export default function ProjectCard({ project, onSelectProject }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const isQured = project.id === 'qure-d';

  return (
    <div
      className={`group relative rounded-3xl bg-white border border-cream-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden hover:border-terracotta-300 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      data-cursor="VIEW"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/95 backdrop-blur-md text-cream-100 text-[11px] font-bold shadow-md border border-white/15">
          <Sparkles className="w-3 h-3 text-terracotta-400" />
          <span>Featured Project</span>
        </div>
      )}

      {/* Achievement Badge */}
      {project.achievement && (
        <div className="absolute top-4 right-4 z-30 max-w-[260px] truncate px-3 py-1 rounded-full bg-amber-50/95 border border-amber-200 text-amber-900 text-[11px] font-bold shadow-sm backdrop-blur-sm">
          🏆 {project.achievement}
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] bg-cream-200/70 overflow-hidden border-b border-cream-200">

        {/* =========================
            QURE-D PROJECT
        ========================== */}
        {isQured ? (
          <div
            className="relative w-full h-full overflow-hidden cursor-pointer"
            onClick={() => onSelectProject(project)}
          >
            {/* Background Image */}
            <img
              src="/images/qure-d-background.png"
              alt="Qure-d AI Health Guidance Platform"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="px-4 py-2 rounded-full bg-white/95 text-charcoal-950 text-xs font-bold shadow-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Case Study</span>
                <BookOpen className="w-3.5 h-3.5 text-terracotta-600" />
              </span>
            </div>
          </div>
        ) : (

          /* =========================
             OTHER PROJECTS
          ========================== */
          <div
            onClick={() => onSelectProject(project)}
            className="relative w-full h-full overflow-hidden shadow-soft-lg border border-cream-300 bg-white cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-300 flex flex-col"
          >
            {/* Browser Header */}
            <div className="h-6 bg-cream-100 border-b border-cream-200 px-3 flex items-center justify-between flex-shrink-0">

              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-sage-400" />
              </div>

              <div className="flex items-center gap-1 text-[10px] font-mono text-charcoal-500">
                <Globe className="w-2.5 h-2.5 text-terracotta-500" />

                <span>
                  {project.liveUrl
                    ? project.liveUrl
                        .replace('https://', '')
                        .replace('http://', '')
                        .replace(/\/$/, '')
                    : 'live-preview'}
                </span>
              </div>

              <span className="w-6" />
            </div>

            {/* Website Screenshot */}
            <div className="relative flex-1 overflow-hidden bg-cream-50">
              <img
                src={project.thumbnail}
                alt={`${project.title} Live Website Screenshot`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Other Project Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <span className="px-4 py-2 rounded-full bg-white/95 text-charcoal-950 text-xs font-bold shadow-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Case Study</span>
                <BookOpen className="w-3.5 h-3.5 text-terracotta-600" />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* =========================
          CARD CONTENT
      ========================== */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">

        <div>

          {/* Category & Year */}
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-2 font-medium">

            <span className="text-terracotta-700 font-bold tracking-wide">
              {project.category}
            </span>

            <div className="flex items-center gap-2">

              {project.metrics && (
                <span className="px-2.5 py-0.5 rounded-md bg-sage-50 border border-sage-200 text-sage-800 text-[10px] font-mono font-bold">
                  {project.metrics}
                </span>
              )}

              <span className="font-mono text-[11px] text-charcoal-600">
                {project.year}
              </span>

            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectProject(project)}
            className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-950 tracking-tight cursor-pointer hover:text-terracotta-600 transition-colors"
          >
            {project.title}
          </h3>

          {/* Tagline */}
          {project.tagline && (
            <p className="text-xs font-semibold text-charcoal-600 mb-3 mt-0.5">
              {project.tagline}
            </p>
          )}

          {/* Description */}
          <p className="text-charcoal-700 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700 group-hover:border-terracotta-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* =========================
            ACTION BUTTONS
        ========================== */}
        <div className="pt-4 border-t border-cream-200 flex flex-wrap items-center justify-between gap-3">

          {/* View Details */}
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta-700 hover:text-terracotta-900 transition-colors"
            data-cursor="DETAILS"
          >
            <span>View Details</span>

            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>

          {/* External Links */}
          <div className="flex items-center gap-2">

            {/* GitHub */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                data-cursor="CODE"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cream-100 hover:bg-terracotta-50 border border-cream-300 hover:border-terracotta-300 text-charcoal-700 hover:text-terracotta-700 text-xs font-bold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}

            {/* Live Demo */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                data-cursor="LIVE"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-charcoal-950 hover:bg-terracotta-600 text-cream-50 text-xs font-bold transition-all shadow-sm hover:shadow-glow-terracotta hover:-translate-y-0.5"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-terracotta-300" />
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}