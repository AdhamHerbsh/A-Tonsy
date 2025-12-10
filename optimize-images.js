const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Configuration targets from the audit
const TARGETS = {
  "personal_image.png": { width: 360, height: 487 },
  // others will be compressed without resize or modest resize if huge
};

const processImages = async () => {
  const assetsDir = path.join(__dirname, "public/assets").replace(/\\/g, "/");
  const images = glob.sync(`${assetsDir}/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}`);

  console.log(`Found ${images.length} images to process...`);

  for (const file of images) {
    const ext = path.extname(file);
    const filename = path.basename(file);
    const dir = path.dirname(file);
    const nameWithoutExt = path.basename(file, ext);
    const newPath = path.join(dir, `${nameWithoutExt}.webp`);

    try {
      let pipeline = sharp(file);

      // Specific resizes
      if (TARGETS[filename]) {
        console.log(`Resizing specific target: ${filename}`);
        pipeline = pipeline.resize(
          TARGETS[filename].width,
          TARGETS[filename].height
        );
      }

      // General compression settings for WebP
      // Quality 80 is usually a good balance for web
      await pipeline.webp({ quality: 80, effort: 6 }).toFile(newPath);

      console.log(`converted: ${filename} -> ${path.basename(newPath)}`);
    } catch (err) {
      console.error(`Failed to convert ${filename}:`, err);
    }
  }
  console.log("Image optimization complete.");
};

processImages();
