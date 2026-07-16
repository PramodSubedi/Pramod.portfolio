"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, ScaleControl, useMap } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

import Sidebar, { type LayerGroupDefinition, type ProjectItem } from "./Sidebar";
import Legend from "./Legend";
import MapControls from "./MapControls";
import ResearchLayers from "./ResearchLayers";
import ResearchMarkers from "./ResearchMarkers";
import TerrainInfo from "./TerrainInfo";

const projects: ProjectItem[] = [
  {
    id: "udayapur",
    title: "Landslide Susceptibility Mapping",
    location: "Udayapur District",
    description: "Regional landslide susceptibility analysis using GIS and remote sensing techniques.",
    category: "Natural Hazards",
    tools: "ArcGIS · QGIS · SRTM DEM",
    position: [26.85, 86.55],
    accent: "#f59e0b",
  },
  {
    id: "katari",
    title: "Terrain Inventory and Field Survey",
    location: "Katari Municipality",
    description: "Field-based terrain assessment and landslide inventory development.",
    category: "Natural Hazards",
    tools: "GPS · GIS · Field Survey",
    position: [26.7, 86.25],
    accent: "#f59e0b",
  },
  {
    id: "hetauda",
    title: "Forest Inventory and Mapping",
    location: "Hetauda Valley",
    description: "Community forestry mapping and canopy structure assessment for planning.",
    category: "Forestry",
    tools: "Forest Inventory · GIS · Mapping",
    position: [27.42, 85.03],
    accent: "#10b981",
  },
  {
    id: "sagarnath",
    title: "Remote Sensing for Landscape Monitoring",
    location: "Sagarnath Region",
    description: "Spatial monitoring of vegetation and land cover change over time.",
    category: "Remote Sensing",
    tools: "Remote Sensing · Spatial Analysis",
    position: [26.98, 85.65],
    accent: "#38bdf8",
  },
];

const basemaps = [
  { id: "osm", label: "OpenStreetMap", description: "Clean cartographic basemap" },
  { id: "imagery", label: "Esri World Imagery", description: "Satellite view" },
  { id: "topographic", label: "Esri Topographic", description: "Terrain and labels" },
  { id: "carto", label: "Carto Dark", description: "Dark neutral canvas" },
];

function MapFlyController({ activeProject }: { activeProject: ProjectItem | null }) {
  const map = useMap();

  useEffect(() => {
    if (activeProject) {
      map.flyTo(activeProject.position as LatLngExpression, 8, { duration: 1.1 });
    }
  }, [activeProject, map]);

  return null;
}

function MapCoordinateReadout({ onChange }: { onChange: (value: [number, number]) => void }) {
  const map = useMap();

  useEffect(() => {
    const updatePosition = () => {
      const center = map.getCenter();
      onChange([Number(center.lat.toFixed(3)), Number(center.lng.toFixed(3))]);
    };

    updatePosition();
    map.on("move zoom", updatePosition);
    return () => {
      map.off("move zoom", updatePosition);
    };
  }, [map, onChange]);

  return null;
}

export default function ResearchMap() {
  const [nepalBoundary, setNepalBoundary] = useState<GeoJSON.GeoJsonObject | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeBasemap, setActiveBasemap] = useState("imagery");
  const [activeLayers, setActiveLayers] = useState<Record<string, boolean>>({
    "administrative-boundary": true,
    hillshade: false,
    dem: false,
    slope: false,
    aspect: false,
    contours: false,
    ndvi: false,
    landcover: false,
    lst: false,
    "landslide-inventory": false,
    "susceptibility-map": false,
    flood: false,
    forestinventory: false,
    communities: false,
    roads: false,
    rivers: false,
  });
  const [layerVisibility, setLayerVisibility] = useState<Record<string, boolean>>({
    "administrative-boundary": true,
    hillshade: false,
    dem: false,
    slope: false,
    aspect: false,
    contours: false,
    ndvi: false,
    landcover: false,
    lst: false,
    "landslide-inventory": false,
    "susceptibility-map": false,
    flood: false,
    forestinventory: false,
    communities: false,
    roads: false,
    rivers: false,
  });
  const [layerOpacity, setLayerOpacity] = useState<Record<string, number>>({
    hillshade: 70,
  });
  const [coordinates, setCoordinates] = useState<[number, number]>([28.2, 84]);

  useEffect(() => {
    fetch("/geojson/nepal.json")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setNepalBoundary(data))
      .catch(() => setNepalBoundary(null));
  }, []);

  const filteredProjects = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return projects.filter((project) =>
      `${project.title} ${project.location} ${project.description}`.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const stats = useMemo(
    () => [
      { label: "Projects", value: "4" },
      { label: "Hazard studies", value: "2" },
      { label: "Forest themes", value: "2" },
      { label: "Remote sensing", value: "1" },
    ],
    []
  );

  const layerGroups = useMemo<LayerGroupDefinition[]>(
    () => [
      {
        id: "basemaps",
        title: "Basemaps",
        items: [
          { id: "osm", label: "OpenStreetMap", description: "Cartographic reference", enabled: activeBasemap === "osm", visible: true, available: true, opacity: 100 },
          { id: "imagery", label: "Esri World Imagery", description: "Satellite imagery", enabled: activeBasemap === "imagery", visible: true, available: true, opacity: 100 },
          { id: "topographic", label: "Esri Topographic", description: "Terrain + labels", enabled: activeBasemap === "topographic", visible: true, available: true, opacity: 100 },
          { id: "carto", label: "Carto Dark", description: "Dark neutral canvas", enabled: activeBasemap === "carto", visible: true, available: true, opacity: 100 },
        ],
      },
      {
        id: "terrain",
        title: "Terrain",
        items: [
          { id: "hillshade", label: "Hillshade", description: "Relief shading", enabled: activeLayers["hillshade"], visible: layerVisibility["hillshade"], raster: true, opacity: layerOpacity["hillshade"] ?? 70, available: true, loading: false },
          { id: "dem", label: "DEM", description: "Elevation surface", enabled: false, visible: false, raster: true, opacity: 80, available: false, loading: false },
          { id: "slope", label: "Slope", description: "Gradient analysis", enabled: false, visible: false, raster: true, opacity: 75, available: false, loading: false },
          { id: "aspect", label: "Aspect", description: "Terrain orientation", enabled: false, visible: false, raster: true, opacity: 60, available: false, loading: false },
          { id: "contours", label: "Contours", description: "Elevation isolines", enabled: false, visible: false, raster: true, opacity: 65, available: false, loading: false },
        ],
      },
      {
        id: "hazards",
        title: "Natural Hazards",
        items: [
          { id: "landslide-inventory", label: "Landslide Inventory", description: "Coming soon — see the Landslide project card below for the published inventory map", enabled: false, visible: false, available: false, opacity: 100 },
          { id: "susceptibility-map", label: "Landslide Susceptibility", description: "Coming soon — see the Landslide project card below for the published result", enabled: false, visible: false, available: false, opacity: 100 },
          { id: "flood", label: "Flood Hazard", description: "Coming soon", enabled: false, visible: false, available: false, opacity: 100 },
        ],
      },
      {
        id: "forestry",
        title: "Forestry",
        items: [
          { id: "forestinventory", label: "Forest Inventory", description: "Coming soon", enabled: false, visible: false, available: false, opacity: 100 },
          { id: "communities", label: "Community Forests", description: "Coming soon", enabled: false, visible: false, available: false, opacity: 100 },
        ],
      },
      {
        id: "remote",
        title: "Remote Sensing",
        items: [
          { id: "ndvi", label: "NDVI", description: "Coming soon", enabled: false, visible: false, raster: true, opacity: 80, available: false, loading: false },
          { id: "landcover", label: "Land Cover", description: "Coming soon", enabled: false, visible: false, raster: true, opacity: 80, available: false, loading: false },
          { id: "lst", label: "LST", description: "Coming soon", enabled: false, visible: false, raster: true, opacity: 80, available: false, loading: false },
        ],
      },
      {
        id: "administrative",
        title: "Administrative",
        items: [
          { id: "administrative-boundary", label: "Country Boundary", description: "Nepal outline", enabled: activeLayers["administrative-boundary"], visible: layerVisibility["administrative-boundary"], available: true, opacity: 100 },
          { id: "roads", label: "Roads", description: "Coming soon", enabled: false, visible: false, available: false, opacity: 100 },
          { id: "rivers", label: "Rivers", description: "Coming soon", enabled: false, visible: false, available: false, opacity: 100 },
        ],
      },
    ],
    [activeBasemap, activeLayers, layerVisibility, layerOpacity]
  );

  const activeLayerInfo = useMemo(() => {
    if (activeProject) {
      return `${activeProject.title} at ${activeProject.location}. This project highlights ${activeProject.category.toLowerCase()} work for the portfolio.`;
    }

    const enabledLayers = Object.entries(activeLayers)
      .filter(([, enabled]) => enabled)
      .map(([layer]) => layer.replace(/-/g, " "));

    return enabledLayers.length
      ? `Visible layers: ${enabledLayers.join(", ")}`
      : "Enable a layer, or select a project pin, to explore the research footprint.";
  }, [activeLayers, activeProject]);

  const handleProjectSelect = (projectId: string) => {
    const next = projects.find((project) => project.id === projectId) ?? null;
    setActiveProject(next);
  };

  const handleLayerToggle = (layerId: string) => {
    if (layerId === "osm" || layerId === "imagery" || layerId === "topographic" || layerId === "carto") {
      setActiveBasemap(layerId);
      return;
    }

    setActiveLayers((prev) => ({ ...prev, [layerId]: !prev[layerId] }));
    setLayerVisibility((prev) => ({ ...prev, [layerId]: true }));
  };

  const handleVisibilityToggle = (layerId: string) => {
    setLayerVisibility((prev) => ({ ...prev, [layerId]: !prev[layerId] }));
  };

  const handleOpacityChange = (layerId: string, value: number) => {
    setLayerOpacity((prev) => ({ ...prev, [layerId]: value }));
  };

  const handleReset = () => {
    setActiveProject(null);
    setSearchTerm("");
    setActiveLayers((prev) => {
      const reset: Record<string, boolean> = {};
      Object.keys(prev).forEach((key) => {
        reset[key] = key === "administrative-boundary";
      });
      return reset;
    });
    setLayerVisibility((prev) => {
      const reset: Record<string, boolean> = {};
      Object.keys(prev).forEach((key) => {
        reset[key] = key === "administrative-boundary";
      });
      return reset;
    });
  };

  return (
    <div
      id="research-map-root"
      className="relative h-[760px] w-full overflow-hidden rounded-[30px] border border-slate-800/70 bg-slate-950 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
    >
      <Sidebar
        projects={projects}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeProject={activeProject}
        onProjectSelect={handleProjectSelect}
        layerGroups={layerGroups}
        onLayerToggle={handleLayerToggle}
        activeBasemap={activeBasemap}
        onBasemapSelect={setActiveBasemap}
        basemaps={basemaps}
        stats={stats}
        activeLayerInfo={activeLayerInfo}
        onVisibilityToggle={handleVisibilityToggle}
        onOpacityChange={handleOpacityChange}
      />

      <div className="absolute left-0 right-0 top-0 z-[1100] flex justify-end p-3">
        <div className="rounded-full border border-slate-700/70 bg-slate-950/80 px-3 py-2 text-xs text-slate-300 shadow-lg backdrop-blur">
          <span className="mr-2 text-emerald-300">Mouse:</span>
          {coordinates[0].toFixed(3)}, {coordinates[1].toFixed(3)}
        </div>
      </div>

      <MapContainer
        center={[28.2, 84]}
        zoom={7}
        className="h-full w-full"
        scrollWheelZoom
        zoomControl={false}
        attributionControl={false}
      >
        <MapFlyController activeProject={activeProject} />
        <MapCoordinateReadout onChange={setCoordinates} />
        <ResearchLayers
          nepalBoundary={nepalBoundary}
          activeBasemap={activeBasemap}
          layerVisibility={layerVisibility}
          layerOpacity={layerOpacity}
        />
        <ResearchMarkers projects={filteredProjects} onSelectProject={handleProjectSelect} activeProjectId={activeProject?.id} />
        <ScaleControl position="bottomleft" />
        <MapControls onReset={handleReset} />
      </MapContainer>

      <TerrainInfo coordinates={coordinates} basemap={activeBasemap} visibleLayers={Object.entries(layerVisibility).filter(([, visible]) => visible).map(([layer]) => layer)} />
      <Legend layerVisibility={layerVisibility} layerOpacity={layerOpacity} />
    </div>
  );
}
