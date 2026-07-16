"use client";

interface BasemapSwitcherProps {
  basemaps: Array<{ id: string; label: string; description: string }>;
  activeBasemap: string;
  onBasemapSelect: (basemapId: string) => void;
}

export default function BasemapSwitcher({
  basemaps,
  activeBasemap,
  onBasemapSelect,
}: BasemapSwitcherProps) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        Basemaps
      </div>
      <div className="grid gap-2">
        {basemaps.map((basemap) => (
          <button
            key={basemap.id}
            type="button"
            onClick={() => onBasemapSelect(basemap.id)}
            className={`rounded-xl border px-3 py-2 text-left transition ${
              activeBasemap === basemap.id
                ? "border-emerald-400/40 bg-emerald-500/10 text-slate-100"
                : "border-slate-800/80 bg-slate-900/70 text-slate-300 hover:border-emerald-400/30"
            }`}
          >
            <div className="text-sm font-medium">{basemap.label}</div>
            <div className="text-xs text-slate-400">{basemap.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
