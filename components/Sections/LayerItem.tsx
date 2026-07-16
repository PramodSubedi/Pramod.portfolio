"use client";

import { Eye, EyeOff, Loader2, Sparkles } from "lucide-react";
import { memo } from "react";
import OpacitySlider from "./OpacitySlider";
import type { LayerDefinition } from "./Sidebar";

interface LayerItemProps {
  item: LayerDefinition;
  onToggle: (layerId: string) => void;
  onVisibilityToggle: (layerId: string) => void;
  onOpacityChange: (layerId: string, value: number) => void;
}

const LayerItem = memo(function LayerItem({
  item,
  onToggle,
  onVisibilityToggle,
  onOpacityChange,
}: LayerItemProps) {
  return (
    <div
      className={`rounded-2xl border p-3 transition ${
        item.available
          ? item.enabled
            ? "border-emerald-400/30 bg-emerald-500/8"
            : "border-slate-800/80 bg-slate-950/70"
          : "border-slate-800/70 bg-slate-900/60 opacity-70"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <button
          type="button"
          onClick={() => item.available && onToggle(item.id)}
          className="flex-1 text-left"
        >
          <div className="flex items-center gap-2">
            <span
              className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                item.enabled ? "bg-emerald-400" : "bg-slate-600"
              }`}
            />
            <span className="text-sm font-medium text-slate-100">{item.label}</span>
          </div>
          <div className="mt-1 text-xs text-slate-400">{item.description}</div>
        </button>

        <div className="flex items-center gap-2">
          {item.loading ? (
            <Loader2 size={14} className="animate-spin text-emerald-300" />
          ) : null}
          <button
            type="button"
            onClick={() => item.available && onVisibilityToggle(item.id)}
            className={`rounded-full border p-1.5 transition ${
              item.visible
                ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                : "border-slate-700/70 bg-slate-900/80 text-slate-400"
            }`}
            aria-label={`Toggle ${item.label}`}
          >
            {item.visible ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </div>
      </div>

      {item.raster && item.available && item.visible ? (
        <div className="mt-3 rounded-xl border border-slate-800/80 bg-slate-900/70 p-2">
          <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-400">
            <span>Opacity</span>
            <span>{Math.round(item.opacity)}%</span>
          </div>
          <OpacitySlider
            value={item.opacity}
            onChange={(value) => onOpacityChange(item.id, value)}
          />
        </div>
      ) : null}

      {!item.available ? (
        <div className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-500">
          <Sparkles size={12} /> Coming soon
        </div>
      ) : null}
    </div>
  );
});

export default LayerItem;
