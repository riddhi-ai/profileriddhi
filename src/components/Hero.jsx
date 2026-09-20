import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles, Terminal, Code2, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import DeskScene3D from './DeskScene3D';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-dot-pattern"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-50 border border-terracotta-200 text-terracotta-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
              <span>ASPIRING WEB DEVELOPER • MCA STUDENT • BUILDER</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-charcoal-950 tracking-tight leading-[1.12] mb-6">
              Turning ideas into{' '}
              <span className="relative inline-block font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 via-terracotta-500 to-amber-600">
                responsive web experiences
                <span className="absolute -top-1 -right-6 text-2xl not-italic animate-bounce">✨</span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-xl mb-8 font-normal">
              I'm an aspiring web developer and MCA student who enjoys building responsive,
              user-friendly web applications and turning ideas into real projects.
            </p>

            {/* Personality Microcopy Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-9 text-xs font-medium text-charcoal-600">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-cream-300 shadow-sm">
                <span className="text-terracotta-500">✦</span>
                <span>Currently: <strong className="text-charcoal-900 font-semibold">turning ideas into interfaces</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-cream-300 shadow-sm">
                <Terminal className="w-3 h-3 text-sage-600" />
                <span>Status: <strong className="text-charcoal-900 font-semibold">building something...</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-cream-300 shadow-sm">
                <Coffee className="w-3 h-3 text-amber-600" />
                <span>Mood: <strong className="text-charcoal-900 font-semibold">curious + caffeinated ☕</strong></span>
              </div>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-charcoal-950 hover:bg-terracotta-600 text-cream-50 font-bold text-sm transition-all duration-200 shadow-soft hover:shadow-glow-terracotta hover:-translate-y-0.5"
                data-cursor="EXPLORE"
              >
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-cream-200/80 border border-cream-300 text-charcoal-900 font-bold text-sm transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                data-cursor="CONNECT"
              >
                <span>Let's connect</span>
                <ArrowUpRight className="w-4 h-4 text-terracotta-600" />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-1 sm:pl-3 border-t sm:border-t-0 sm:border-l border-cream-300 pt-3 sm:pt-0 w-full sm:w-auto">
                <a
                  href="https://github.com/riddhi-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  data-cursor="GITHUB"
                  className="p-3 rounded-xl bg-white hover:bg-terracotta-50 border border-cream-300 text-charcoal-700 hover:text-terracotta-600 transition-all hover:scale-110 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/riddhi-naskari-986955295"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  data-cursor="LINKEDIN"
                  className="p-3 rounded-xl bg-white hover:bg-terracotta-50 border border-cream-300 text-charcoal-700 hover:text-terracotta-600 transition-all hover:scale-110 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cute 3D Digital Desk Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <DeskScene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
