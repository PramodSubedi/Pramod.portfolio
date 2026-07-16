"use client";

interface LayerControlItem {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface LayerControlProps {
  title: string;
  items: LayerControlItem[];
  onToggle: (layerId: string) => void;
}

export default function LayerControl({ title, items, onToggle }: LayerControlProps) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3">
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
        {title}
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onToggle(item.id)}
            className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition ${
              item.enabled
                ? "border-emerald-400/40 bg-emerald-500/10"
                : "border-slate-800/80 bg-slate-900/70 hover:border-emerald-400/30"
            }`}
          >
            <span>
              <span className="block text-sm font-medium text-slate-100">{item.label}</span>
              <span className="block text-xs text-slate-400">{item.description}</span>
            </span>
            <span
              className={`h-2.5 w-2.5 rounded-full transition ${
                item.enabled ? "bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" : "bg-slate-600"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
