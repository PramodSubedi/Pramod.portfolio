import { readdirSync } from "fs";
import { join } from "path";

interface CarouselImage {
  src: string;
  caption: string;
}

function prettifyCaption(filename: string): string {
  const withoutExt = filename.replace(/\.[^/.]+$/, "");
  const spaced = withoutExt.replace(/[_-]+/g, " ").trim();
  return spaced.replace(/\w\S*/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

export function getProjectImages(projectFolder: string): CarouselImage[] {
  try {
    const imagesPath = join(process.cwd(), "public", "images", projectFolder);

    const files = readdirSync(imagesPath);

    const imageFiles = files
      .filter((file) => /\.(webp|jpg|jpeg|png|gif)$/i.test(file))
      .sort();

    return imageFiles.map((file) => ({
      src: `/images/${projectFolder}/${encodeURIComponent(file)}`,
      caption: prettifyCaption(file),
    }));
  } catch (error) {
    console.error(`Failed to read images from ${projectFolder}:`, error);
    return [];
  }
}
