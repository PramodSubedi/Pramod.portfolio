import { NextRequest, NextResponse } from "next/server";
import { readdirSync, existsSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");

  if (!folder) {
    return NextResponse.json(
      { error: "Folder parameter is required" },
      { status: 400 }
    );
  }

  try {
    // Construct the path to the images folder
    const imagesPath = join(process.cwd(), "public", "images", folder);

    // Check if folder exists
    if (!existsSync(imagesPath)) {
      console.error(`Folder not found: ${imagesPath}`);
      return NextResponse.json(
        { error: `Folder not found: ${folder}` },
        { status: 404 }
      );
    }

    // Read all files from the folder
    const files = readdirSync(imagesPath);

    // Filter only image files and sort them
    const imageFiles = files
      .filter((file) => /\.(webp|jpg|jpeg|png|gif)$/i.test(file))
      .sort();

    if (imageFiles.length === 0) {
      console.warn(`No image files found in: ${imagesPath}`);
      return NextResponse.json(
        { error: "No images found in folder" },
        { status: 404 }
      );
    }

    // Transform to image objects with filename as caption
    const images = imageFiles.map((file) => ({
      src: `/images/${folder}/${encodeURIComponent(file)}`,
      caption: file.replace(/\.[^/.]+$/, ""), // Remove file extension for caption
    }));

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error reading images folder:", error);
    return NextResponse.json(
      { error: `Failed to read images folder: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
