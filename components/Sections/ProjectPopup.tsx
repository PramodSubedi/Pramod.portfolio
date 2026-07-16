"use client";

import { ArrowUpRight } from "lucide-react";

interface ProjectPopupProps {
  project: {
    title: string;
    location: string;
    description: string;
    category: string;
    tools: string;
    accent?: string;
  };
  onViewProject: () => void;
}

export default function ProjectPopup({ project, onViewProject }: ProjectPopupProps) {
  return (
    <div className="w-[260px] rounded-[22px] border border-slate-700/70 bg-slate-950/95 p-3 text-slate-100 shadow-[0_18px_40px_rgba(0,0,0,0.38)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
          {project.category}
        </span>
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-500">2024</span>
      </div>
      <div className="mb-2 text-base font-semibold">{project.title}</div>
      <div className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-400">{project.location}</div>
      <p className="mb-3 text-sm leading-6 text-slate-300">{project.description}</p>
      <div className="mb-3 rounded-xl border border-slate-800/80 bg-slate-900/70 p-2 text-xs text-slate-400">
        <div className="mb-1 font-semibold text-slate-200">Tools used</div>
        <div>{project.tools}</div>
      </div>
      <div className="mb-3 rounded-xl border border-slate-800/80 bg-slate-900/70 p-2 text-xs text-slate-400">
        <div className="mb-1 font-semibold text-slate-200">Study period</div>
        <div>2023–2024</div>
      </div>
      <button
        type="button"
        onClick={onViewProject}
        className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-3 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
      >
        View Project <ArrowUpRight size={14} />
      </button>
    </div>
  );
}
