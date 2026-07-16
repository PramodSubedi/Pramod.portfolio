"use client";

import { memo, useState } from "react";
import { ChevronDown, ChevronRight, Layers3 } from "lucide-react";
import LayerItem from "./LayerItem";
import type { LayerDefinition, LayerGroupDefinition } from "./Sidebar";

interface LayerTreeProps {
  groups: LayerGroupDefinition[];
  onToggle: (layerId: string) => void;
  onVisibilityToggle: (layerId: string) => void;
  onOpacityChange: (layerId: string, value: number) => void;
}

const LayerTree = memo(function LayerTree({
  groups,
  onToggle,
  onVisibilityToggle,
  onOpacityChange,
}: LayerTreeProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    basemaps: true,
    terrain: true,
    hazards: true,
    forestry: true,
    remote: true,
    administrative: true,
  });

  return (
    <div className="space-y-2">
      {groups.map((group) => (
        <div key={group.id} className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-2">
          <button
            type="button"
            onClick={() => setExpanded((prev) => ({ ...prev, [group.id]: !prev[group.id] }))}
            className="mb-2 flex w-full items-center justify-between rounded-xl px-2 py-2 text-left transition hover:bg-slate-900/70"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-100">
              <Layers3 size={14} className="text-emerald-300" /> {group.title}
            </span>
            {expanded[group.id] ? <ChevronDown size={14} className="text-slate-400" /> : <ChevronRight size={14} className="text-slate-400" />}
          </button>

          {expanded[group.id] ? (
            <div className="space-y-2">
              {group.items.map((item) => (
                <LayerItem
                  key={item.id}
                  item={item}
                  onToggle={onToggle}
                  onVisibilityToggle={onVisibilityToggle}
                  onOpacityChange={onOpacityChange}
                />
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
});

export default LayerTree;
