"use client";

import { memo, useState } from "react";
import { ChevronDown, ChevronUp, Map } from "lucide-react";

const OverviewMap = memo(function OverviewMap() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="absolute bottom-4 left-4 z-[1000] w-[180px] rounded-[20px] border border-slate-700/70 bg-slate-950/85 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
          <Map size={14} className="text-emerald-300" /> Overview
        </div>
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="rounded-full border border-slate-700/80 p-1 text-slate-300"
          aria-label="Toggle overview map"
        >
          {collapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      {!collapsed ? (
        <div className="h-[100px] rounded-[16px] border border-slate-800/80 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.25),_transparent_50%),linear-gradient(135deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.95))]" />
      ) : null}
    </div>
  );
});

export default OverviewMap;
