"use client";

import { Fullscreen, LocateFixed, RotateCcw, ScanLine } from "lucide-react";
import { useMap } from "react-leaflet";

interface MapControlsProps {
  onFitHome: () => void;
  onLocate: () => void;
  onFullscreen: () => void;
}

export default function MapControls({ onFitHome, onLocate, onFullscreen }: MapControlsProps) {
  const map = useMap();

  const handleHome = () => {
    onFitHome();
    map.flyTo([28.2, 84], 7, { duration: 1.2 });
  };

  return (
    <div className="absolute right-4 top-4 z-[1000] flex flex-col gap-2">
      <button
        type="button"
        onClick={handleHome}
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Zoom home"
      >
        <RotateCcw size={16} />
      </button>
      <button
        type="button"
        onClick={onLocate}
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Locate me"
      >
        <LocateFixed size={16} />
      </button>
      <button
        type="button"
        onClick={onFullscreen}
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Fullscreen"
      >
        <Fullscreen size={16} />
      </button>
      <button
        type="button"
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Map tools"
      >
        <ScanLine size={16} />
      </button>
    </div>
  );
}
