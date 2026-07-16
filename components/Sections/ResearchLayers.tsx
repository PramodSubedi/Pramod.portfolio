"use client";

import { GeoJSON, TileLayer } from "react-leaflet";

interface ResearchLayersProps {
  nepalBoundary: unknown;
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

// Real public Esri hillshade tile service — this is the one "Terrain" layer
// that's genuinely wired up to real imagery instead of a placeholder.
const HILLSHADE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}";

export default function ResearchLayers({
  nepalBoundary,
  activeBasemap,
  layerVisibility,
  layerOpacity,
}: ResearchLayersProps) {
  const basemap = basemapConfig[activeBasemap] ?? basemapConfig.imagery;

  return (
    <>
      <TileLayer url={basemap.url} attribution={basemap.attribution} />

      {layerVisibility["hillshade"] && nepalBoundary ? (
        <TileLayer
          url={HILLSHADE_URL}
          attribution="Hillshade © Esri"
          opacity={(layerOpacity["hillshade"] ?? 70) / 100}
        />
      ) : null}

      {layerVisibility["administrative-boundary"] && nepalBoundary ? (
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
