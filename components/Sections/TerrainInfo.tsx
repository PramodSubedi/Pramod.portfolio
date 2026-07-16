"use client";

import { memo } from "react";
import { Compass, Mountain, TrendingUp } from "lucide-react";

interface TerrainInfoProps {
  coordinates: [number, number];
  basemap: string;
  visibleLayers: string[];
}

const TerrainInfo = memo(function TerrainInfo({ coordinates, basemap, visibleLayers }: TerrainInfoProps) {
  return (
    <div className="absolute left-4 bottom-4 z-[1000] max-w-[280px] rounded-[20px] border border-slate-700/70 bg-slate-950/85 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
        <Mountain size={14} className="text-emerald-300" /> Terrain Information
      </div>
      <div className="grid gap-2 text-sm text-slate-300">
        <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-2 py-2">
          <span className="text-slate-400">Coordinates</span>
          <span>{coordinates[0].toFixed(3)}, {coordinates[1].toFixed(3)}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-2 py-2">
          <span className="text-slate-400">Elevation</span>
          <span>1,420 m</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-2 py-2">
          <span className="text-slate-400">Slope</span>
          <span>18°</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-2 py-2">
          <span className="text-slate-400">Aspect</span>
          <span>SE</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-900/70 px-2 py-2">
          <span className="text-slate-400">Basemap</span>
          <span className="text-emerald-300">{basemap}</span>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-slate-800/80 bg-slate-900/70 p-2 text-xs text-slate-400">
        <div className="mb-1 flex items-center gap-2">
          <TrendingUp size={12} className="text-emerald-300" /> Visible layers
        </div>
        <div className="flex flex-wrap gap-1">
          {visibleLayers.map((layer) => (
            <span key={layer} className="rounded-full border border-slate-700/80 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-300">
              {layer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default TerrainInfo;
