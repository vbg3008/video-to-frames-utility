const { spawn } = require("child_process");
const ffmpegPath = require("ffmpeg-static");
const fs = require("fs");
const path = require("path");

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
    const args = [
      "-i", videoPath,
      "-vf", `fps=${fps}`,
      path.join(outputDir, pattern)
    ];

    const ffmpeg = spawn(ffmpegPath, args);

    ffmpeg.on("close", code => {
      if (code === 0) resolve();
      else reject(new Error(`FFmpeg exited with code ${code}`));
    });

    ffmpeg.on("error", reject);
  });
}

module.exports = { videoToFrames };
