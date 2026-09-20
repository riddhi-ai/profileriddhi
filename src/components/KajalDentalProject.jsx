import React from "react";
import { Globe, ArrowUpRight } from "lucide-react";

const KajalDentalProject = () => {
  return (
    <div className="group w-full rounded-2xl overflow-hidden shadow-soft-lg border border-cream-300 bg-white transition-transform duration-300 hover:scale-[1.02]">

      {/* Browser Header */}
      <div className="h-8 bg-cream-100 border-b border-cream-200 px-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-sage-400" />
        </div>

        <div className="flex items-center gap-1 text-[10px] font-mono text-charcoal-500">
          <Globe className="w-3 h-3 text-terracotta-500" />
          <span>drkajaldentalclinic.netlify.app</span>
        </div>

        <span className="w-6" />
      </div>

      {/* Website Screenshot */}
      <div className="relative h-64 overflow-hidden bg-cream-50">
        <img
          src="/images/dekajaldentalclinic.png"
          alt="Dr. Kajal Dental Clinic Website"
          className="w-full h-full object-cover object-top"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href="https://drkajaldentalclinic.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white text-charcoal-950 text-xs font-bold shadow-lg flex items-center gap-2"
          >
            View Live Website
            <ArrowUpRight className="w-4 h-4 text-terracotta-600" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-7">

        {/* Category + Year */}
        <div className="flex items-center justify-between text-xs text-charcoal-500 mb-2 font-medium">
          <span className="text-terracotta-700 font-bold tracking-wide">
            Frontend • Healthcare
          </span>

          <span className="font-mono text-[11px] text-charcoal-600">
            2026
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-950 tracking-tight">
          Dr. Kajal Dental Clinic
        </h3>

        {/* Tagline */}
        <p className="text-xs font-semibold text-charcoal-600 mb-3 mt-0.5">
          Dental Clinic Website
        </p>

        {/* Description */}
        <p className="text-charcoal-700 text-sm leading-relaxed mb-5">
          A modern, responsive dental clinic website designed to showcase
          dental services, provide essential clinic information, and make it
          easier for patients to connect with the clinic.
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          <span className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700">
            HTML
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700">
            CSS
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700">
            JavaScript
          </span>

          <span className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700">
            Responsive Design
          </span>
        </div>

        {/* Live Demo */}
        <div className="pt-4 border-t border-cream-200 flex justify-end">
          <a
            href="https://drkajaldentalclinic.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-charcoal-950 hover:bg-terracotta-600 text-cream-50 text-xs font-bold transition-all shadow-sm"
          >
            Live Demo
            <ArrowUpRight className="w-3.5 h-3.5 text-terracotta-300" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default KajalDentalProject;