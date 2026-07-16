"use client";

import { GeoJSON, Polyline, TileLayer } from "react-leaflet";

interface ResearchLayersProps {
  nepalBoundary: unknown;
  activeLayers: Record<string, boolean>;
  activeBasemap: string;
  layerVisibility: Record<string, boolean>;
  layerOpacity: Record<string, number>;
}

const basemapConfig: Record<string, { url: string; attribution: string }> = {
  osm: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap contributors",
  },
  imagery: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles © Esri",
  },
  topographic: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles © Esri",
  },
  carto: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: "© OpenStreetMap © CARTO",
  },
};

export default function ResearchLayers({ nepalBoundary, activeLayers, activeBasemap, layerVisibility, layerOpacity }: ResearchLayersProps) {
  const basemap = basemapConfig[activeBasemap] ?? basemapConfig.imagery;

  return (
    <>
      <TileLayer url={basemap.url} attribution={basemap.attribution} />

      {layerVisibility["study-sites"] ? (
        <GeoJSON
          data={nepalBoundary as GeoJSON.GeoJsonObject}
          style={{
            color: "#ffffff",
            weight: 2,
            fillColor: "#10b981",
            fillOpacity: 0.08,
          }}
        />
      ) : null}

      {layerVisibility["landslide-inventory"] ? (
        <GeoJSON
          data={nepalBoundary as GeoJSON.GeoJsonObject}
          style={{
            color: "#f59e0b",
            weight: 1.5,
            fillColor: "#f59e0b",
            fillOpacity: 0.05,
          }}
        />
      ) : null}

      {layerVisibility["susceptibility-map"] ? (
        <GeoJSON
          data={nepalBoundary as GeoJSON.GeoJsonObject}
          style={{
            color: "#38bdf8",
            weight: 1.5,
            fillColor: "#38bdf8",
            fillOpacity: 0.06,
          }}
        />
      ) : null}

      {layerVisibility["roads"] ? (
        <Polyline positions={[[27.7, 85.3], [28.0, 84.9], [28.7, 85.8]]} pathOptions={{ color: "#e2e8f0", weight: 3, opacity: 0.8 }} />
      ) : null}

      {layerVisibility["rivers"] ? (
        <Polyline positions={[[27.3, 85.2], [27.8, 85.9], [28.3, 86.4]]} pathOptions={{ color: "#38bdf8", weight: 2.4, opacity: 0.8 }} />
      ) : null}

      {layerVisibility["administrative-boundary"] ? (
        <GeoJSON
          data={nepalBoundary as GeoJSON.GeoJsonObject}
          style={{
            color: "#e2e8f0",
            weight: 2.2,
            fillOpacity: 0,
          }}
        />
      ) : null}
    </>
  );
}
