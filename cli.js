#!/usr/bin/env node

const { videoToFrames } = require("./src");
const [,, video, fps = 24] = process.argv;

if (!video) {
  console.error("Usage: extract-frames <video> [fps]");
  process.exit(1);
}

videoToFrames({
  videoPath: video,
  fps: Number(fps)
})
  .then(() => console.log("✅ Frames extracted"))
  .catch(err => console.error("❌ Error:", err.message));
