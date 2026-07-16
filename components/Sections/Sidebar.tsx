"use client";

import { useEffect, useState } from "react";
import { BarChart3, Compass, Layers3, Sparkles, X } from "lucide-react";
import LayerTree from "./LayerTree";
import BasemapSwitcher from "./BasemapSwitcher";
import SearchBar from "./SearchBar";
import ResearchStats from "./ResearchStats";

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  description: string;
  category: string;
  tools: string;
  position: [number, number];
  accent: string;
}

export interface LayerDefinition {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
  visible: boolean;
  raster?: boolean;
  opacity: number;
  loading?: boolean;
  available: boolean;
}

export interface LayerGroupDefinition {
  id: string;
  title: string;
  items: LayerDefinition[];
}

interface SidebarProps {
  projects: ProjectItem[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeProject: ProjectItem | null;
  onProjectSelect: (projectId: string) => void;
  layerGroups: LayerGroupDefinition[];
  onLayerToggle: (layerId: string) => void;
  activeBasemap: string;
  onBasemapSelect: (basemapId: string) => void;
  basemaps: Array<{ id: string; label: string; description: string }>;
  stats: Array<{ label: string; value: string }>;
  activeLayerInfo: string;
  onVisibilityToggle: (layerId: string) => void;
  onOpacityChange: (layerId: string, value: number) => void;
}

export default function Sidebar({
  projects,
  searchTerm,
  onSearchChange,
  activeProject,
  onProjectSelect,
  layerGroups,
  onLayerToggle,
  activeBasemap,
  onBasemapSelect,
  basemaps,
  stats,
  activeLayerInfo,
  onVisibilityToggle,
  onOpacityChange,
}: SidebarProps) {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.location} ${project.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <aside
      className={`absolute z-[1200] ${
        isCompact
          ? "left-3 right-3 top-3 max-h-[78vh] overflow-y-auto rounded-[24px]"
          : "left-4 top-4 h-[calc(100%-2rem)] w-[320px] overflow-y-auto"
      } rounded-[24px] border border-emerald-400/20 bg-slate-950/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            <Sparkles size={14} /> Research Explorer
          </div>
          <h2 className="text-lg font-semibold text-slate-100">
            Academic GIS Portfolio
          </h2>
        </div>
        {isCompact ? (
          <button
            type="button"
            onClick={() => setIsCompact(false)}
            className="rounded-full border border-slate-700/80 p-2 text-slate-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
            aria-label="Collapse sidebar"
          >
            <X size={16} />
          </button>
        ) : null}
      </div>

      <div className="mb-4">
        <SearchBar value={searchTerm} onChange={onSearchChange} />
      </div>

      <div className="mb-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
          <Layers3 size={16} className="text-emerald-300" /> Layer Categories
        </div>
        <div className="mb-3">
          <BasemapSwitcher
            basemaps={basemaps}
            activeBasemap={activeBasemap}
            onBasemapSelect={onBasemapSelect}
          />
        </div>
        <div className="space-y-2">
          <LayerTree
            groups={layerGroups}
            onToggle={onLayerToggle}
            onVisibilityToggle={onVisibilityToggle}
            onOpacityChange={onOpacityChange}
          />
        </div>
      </div>

      <ResearchStats stats={stats} />

      <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900/60 to-slate-900/80 p-3">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
          <Compass size={15} className="text-emerald-300" /> Active Layer Information
        </div>
        <p className="text-sm text-slate-300">{activeLayerInfo}</p>
        {activeProject ? (
          <div className="mt-3 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3">
            <div className="text-sm font-semibold text-slate-100">{activeProject.title}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.3em] text-emerald-300">
              {activeProject.category}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-3">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-100">
          <BarChart3 size={15} className="text-emerald-300" /> Projects in view
        </div>
        <div className="space-y-2">
          {filteredProjects.length ? (
            filteredProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => onProjectSelect(project.id)}
                className={`w-full rounded-xl border px-3 py-2 text-left transition ${
                  activeProject?.id === project.id
                    ? "border-emerald-400/40 bg-emerald-500/10 text-slate-100"
                    : "border-slate-800/80 bg-slate-950/70 text-slate-300 hover:border-emerald-400/30"
                }`}
              >
                <div className="text-sm font-medium">{project.title}</div>
                <div className="text-xs text-slate-400">{project.location}</div>
              </button>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-700/80 p-3 text-sm text-slate-400">
              No projects match your search.
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
