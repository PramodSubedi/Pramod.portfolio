"use client";

import { useEffect, useMemo, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import ProjectPopup from "./ProjectPopup";
import type { ProjectItem } from "./Sidebar";

interface ProjectMarkerProps {
  projects: ProjectItem[];
  onSelectProject: (projectId: string) => void;
  activeProjectId?: string | null;
}

interface ClusterItem {
  id: string;
  center: [number, number];
  items: ProjectMarkerProps["projects"];
}

function createMarkerIcon(color: string, emoji: string, isActive = false) {
  return L.divIcon({
    html: `
      <div style="
        width: ${isActive ? 44 : 38}px;
        height: ${isActive ? 44 : 38}px;
        border-radius: 9999px;
        background: ${color};
        border: 2px solid rgba(255,255,255,0.95);
        box-shadow: ${isActive ? "0 0 0 5px rgba(16,185,129,0.28), 0 12px 24px rgba(0,0,0,0.34)" : "0 0 0 4px rgba(0,0,0,0.24), 0 12px 18px rgba(0,0,0,0.3)"};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${isActive ? 18 : 16}px;
        transform: translateY(0) scale(${isActive ? 1.08 : 1});
        transition: transform 180ms ease, box-shadow 180ms ease;
      ">${emoji}</div>
    `,
    className: "",
    iconSize: [isActive ? 44 : 38, isActive ? 44 : 38],
    iconAnchor: [isActive ? 22 : 19, isActive ? 44 : 38],
    popupAnchor: [0, isActive ? -42 : -36],
  });
}

function createClusterIcon(count: number) {
  return L.divIcon({
    html: `
      <div style="
        width: 44px;
        height: 44px;
        border-radius: 9999px;
        background: linear-gradient(135deg, #10b981, #0f766e);
        border: 2px solid rgba(255,255,255,0.95);
        box-shadow: 0 10px 20px rgba(0,0,0,0.28);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        color: white;
      ">${count}</div>
    `,
    className: "",
    iconSize: [44, 44],
    iconAnchor: [22, 44],
    popupAnchor: [0, -42],
  });
}

function buildClusters(projects: ProjectMarkerProps["projects"]): ClusterItem[] {
  const clusters: ClusterItem[] = [];
  const used = new Set<string>();

  projects.forEach((project) => {
    if (used.has(project.id)) return;

    const clusterItems = [project];
    used.add(project.id);

    projects.forEach((candidate) => {
      if (used.has(candidate.id)) return;
      const latDiff = Math.abs(project.position[0] - candidate.position[0]);
      const lngDiff = Math.abs(project.position[1] - candidate.position[1]);
      if (latDiff < 0.08 && lngDiff < 0.08) {
        clusterItems.push(candidate);
        used.add(candidate.id);
      }
    });

    const centerLat = clusterItems.reduce((sum, item) => sum + item.position[0], 0) / clusterItems.length;
    const centerLng = clusterItems.reduce((sum, item) => sum + item.position[1], 0) / clusterItems.length;

    clusters.push({
      id: `${project.id}-cluster`,
      center: [centerLat, centerLng],
      items: clusterItems,
    });
  });

  return clusters;
}

export default function ResearchMarkers({ projects, onSelectProject, activeProjectId }: ProjectMarkerProps) {
  const map = useMap();
  const markerRefs = useRef<Record<string, L.Marker | null>>({});
  const clusters = useMemo(() => buildClusters(projects), [projects]);

  useEffect(() => {
    if (!activeProjectId) return;

    const marker = markerRefs.current[activeProjectId];
    if (marker) {
      marker.openPopup();
    }
  }, [activeProjectId]);

  return (
    <>
      {clusters.map((cluster) => {
        if (cluster.items.length > 1) {
          return (
            <Marker
              key={cluster.id}
              position={cluster.center}
              icon={createClusterIcon(cluster.items.length)}
              eventHandlers={{
                click: () => onSelectProject(cluster.items[0].id),
                mouseover: () => {
                  map.getContainer().style.cursor = "pointer";
                },
                mouseout: () => {
                  map.getContainer().style.cursor = "";
                },
              }}
            >
              <Popup>
                <div className="space-y-2 rounded-[16px] p-1">
                  <div className="text-sm font-semibold text-emerald-300">Grouped studies</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {cluster.items.length} projects
                  </div>
                  <div className="space-y-1 text-sm text-slate-300">
                    {cluster.items.map((item) => (
                      <div key={item.id} className="rounded-lg border border-slate-800/80 bg-slate-900/70 px-2 py-1">
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        }

        const project = cluster.items[0];
        return (
          <Marker
            key={project.id}
            position={project.position}
            ref={(instance) => {
              markerRefs.current[project.id] = instance;
            }}
            icon={createMarkerIcon(project.accent ?? "#10b981", project.category === "Natural Hazards" ? "⚠️" : project.category === "Remote Sensing" ? "🛰️" : "🌲", activeProjectId === project.id)}
            eventHandlers={{
              click: () => onSelectProject(project.id),
              mouseover: () => {
                map.getContainer().style.cursor = "pointer";
              },
              mouseout: () => {
                map.getContainer().style.cursor = "";
              },
            }}
          >
            <Popup>
              <ProjectPopup project={project} onViewProject={() => onSelectProject(project.id)} />
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
