"use client";

import { Activity, Microscope, MapPinned, Sprout } from "lucide-react";
import { memo } from "react";

interface ResearchStatsProps {
  stats: Array<{ label: string; value: string }>;
}

const ResearchStats = memo(function ResearchStats({ stats }: ResearchStatsProps) {
  const icons = [Microscope, Activity, Sprout, MapPinned];

  return (
    <div className="mb-4 grid gap-2 sm:grid-cols-2">
      {stats.map((stat, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={stat.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3">
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <Icon size={14} />
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{stat.label}</span>
            </div>
            <div className="text-lg font-semibold text-slate-100">{stat.value}</div>
          </div>
        );
      })}
    </div>
  );
});

export default ResearchStats;
