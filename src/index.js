const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const fs = require("fs");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegPath);

function videoToFrames({
  videoPath,
  outputDir = "frames",
  fps = 24,
  pattern = "frame_%04d.png"
}) {
  if (!fs.existsSync(videoPath)) {
    throw new Error("Video file not found");
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .outputOptions([`-vf fps=${fps}`])
      .output(path.join(outputDir, pattern))
      .on("end", resolve)
      .on("error", reject)
      .run();
  });
}

module.exports = { videoToFrames };
