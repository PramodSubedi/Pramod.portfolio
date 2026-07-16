"use client";

import { useState } from "react";
import { Fullscreen, LocateFixed, RotateCcw, Loader2 } from "lucide-react";
import { useMap } from "react-leaflet";

interface MapControlsProps {
  onReset: () => void;
}

export default function MapControls({ onReset }: MapControlsProps) {
  const map = useMap();
  const [locating, setLocating] = useState(false);

  const handleHome = () => {
    onReset();
    map.flyTo([28.2, 84], 7, { duration: 1.2 });
  };

  const handleLocate = () => {
    if (!navigator.geolocation) return;

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.flyTo([latitude, longitude], 11, { duration: 1.2 });
        setLocating(false);
      },
      () => {
        setLocating(false);
      }
    );
  };

  const handleFullscreen = () => {
    const element = document.getElementById("research-map-root");
    if (!element) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }

    element.requestFullscreen();
  };

  return (
    <div className="absolute right-4 top-4 z-[1000] flex flex-col gap-2">
      <button
        type="button"
        onClick={handleHome}
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Reset view and layers"
        title="Reset view and layers"
      >
        <RotateCcw size={16} />
      </button>
      <button
        type="button"
        onClick={handleLocate}
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Locate me"
        title="Locate me"
      >
        {locating ? <Loader2 size={16} className="animate-spin" /> : <LocateFixed size={16} />}
      </button>
      <button
        type="button"
        onClick={handleFullscreen}
        className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-2.5 text-slate-100 shadow-lg backdrop-blur transition hover:border-emerald-400/40"
        aria-label="Fullscreen"
        title="Fullscreen"
      >
        <Fullscreen size={16} />
      </button>
    </div>
  );
}
