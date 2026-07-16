import { readdirSync } from "fs";
import { join } from "path";

interface CarouselImage {
  src: string;
  caption: string;
}

export function getProjectImages(projectFolder: string): CarouselImage[] {
  try {
    const imagesPath = join(process.cwd(), "public", "images", projectFolder);
    
    const files = readdirSync(imagesPath);
    
    const imageFiles = files
      .filter((file) => /\.(webp|jpg|jpeg|png|gif)$/i.test(file))
      .sort();

    return imageFiles.map((file) => ({
      src: `/images/${projectFolder}/${file}`,
      caption: file.replace(/\.[^/.]+$/, ""),
    }));
  } catch (error) {
    console.error(`Failed to read images from ${projectFolder}:`, error);
    return [];
  }
}
