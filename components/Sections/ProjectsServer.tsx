import { getProjectImages } from "@/lib/getProjectImages";
import ProjectsClient from "./ProjectsClient";

export default function Projects() {
  // Load images at build time
  const landslideImages = getProjectImages("projects/landslide-mapping");
  const floodImages = getProjectImages("projects/flood-assessment");
  const forestImages = getProjectImages("projects/forest-inventory");

  return (
    <ProjectsClient 
      landslideImages={landslideImages}
      floodImages={floodImages}
      forestImages={forestImages}
    />
  );
}
