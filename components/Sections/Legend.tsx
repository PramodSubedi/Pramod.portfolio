"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Layers3 } from "lucide-react";

interface LegendProps {
  layerVisibility: Record<string, boolean>;
  layerOpacity: Record<string, number>;
}

export default function Legend({ layerVisibility, layerOpacity }: LegendProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const legendItems = useMemo(() => {
    const items: Array<{ label: string; swatch: string; detail?: string }> = [];

    if (layerVisibility.hillshade) {
      items.push({ label: "Hillshade", swatch: "bg-gradient-to-r from-emerald-500 to-sky-500", detail: `Opacity ${layerOpacity.hillshade ?? 70}%` });
    }
    if (layerVisibility["administrative-boundary"]) {
      items.push({ label: "Country Boundary", swatch: "bg-slate-300", detail: "Nepal outline" });
    }
    items.push({ label: "Study Sites", swatch: "bg-emerald-500", detail: "Forestry = green • Hazard = amber • Remote = blue" });
    if (items.length === 0) {
      items.push({ label: "No active layers", swatch: "bg-slate-600", detail: "Enable a layer to populate the legend" });
    }

    return items;
  }, [layerOpacity, layerVisibility]);

  if (isMobile && collapsed) {
    return (
      <div className="absolute bottom-4 right-4 z-[1000] rounded-full border border-slate-700/70 bg-slate-950/80 p-2 shadow-lg backdrop-blur">
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-slate-100"
        >
          <Layers3 size={14} className="text-emerald-300" /> Legend
          <ChevronUp size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="absolute bottom-4 right-4 z-[1000] max-w-[240px] rounded-[20px] border border-slate-700/70 bg-slate-950/80 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
          <Layers3 size={14} className="text-emerald-300" /> Legend
        </div>
        {isMobile ? (
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="rounded-full border border-slate-700/80 p-1 text-slate-300"
            aria-label="Collapse legend"
          >
            <ChevronDown size={14} />
          </button>
        ) : null}
      </div>

      <div className="space-y-2 text-sm text-slate-300">
        {legendItems.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-2">
            <div className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${item.swatch}`} />
              <span>{item.label}</span>
            </div>
            {item.detail ? <div className="mt-1 text-xs text-slate-400">{item.detail}</div> : null}
          </div>
        ))}
        <div className="mt-2 rounded-xl border border-slate-800/80 bg-slate-900/70 p-2 text-xs text-slate-400">
          Ready for DEM, COG, WMS, WMTS, and GEE terrain products.
        </div>
      </div>
    </div>
  );
}
