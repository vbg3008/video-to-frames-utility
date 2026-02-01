# video-to-frames

**Extract frames from videos using FFmpeg with zero system setup.**

[![npm version](https://img.shields.io/npm/v/video-to-frames.svg)](https://www.npmjs.com/package/video-to-frames)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight Node.js utility that automatically handles FFmpeg binaries to extract frames from video files. Perfect for AI video processing pipelines, dataset creation, or thumbnail generation.

## Features

- 🚀 **Zero Setup**: No need to install FFmpeg on your system manually.
- 📦 **All-in-One**: Bundles static FFmpeg binaries for cross-platform support.
- 💻 **CLI Support**: Simple command-line interface for quick extraction.
- 🛠️ **Programmatic API**: Easy to use in your Node.js scripts.
- ⚡ **Fast**: Uses optimized FFmpeg process.

## Installation

```bash
npm install video-to-frames
```

## Usage

### 1. Command Line Interface (CLI)

You can use it directly via `npx` without installing it globally:

```bash
npx video-to-frames <video-path> [fps]
```

**Examples:**

```bash
# Extract frames at default 24 FPS
npx video-to-frames my-video.mp4

# Extract frames at 1 FPS (one frame per second)
npx video-to-frames input.mov 1
```

### 2. Programmatic Usage

Use it in your Node.js project:

```javascript
const { videoToFrames } = require('video-to-frames');

(async () => {
  try {
    await videoToFrames({
      videoPath: './input.mp4',
      outputDir: './frames',  // Optional, defaults to 'frames'
      fps: 5,                 // Optional, defaults to 24
      pattern: 'frame_%04d.png' // Optional ffmpeg pattern
    });
    console.log('Frames extracted successfully!');
  } catch (error) {
    console.error('Error extracting frames:', error);
  }
})();
```

## API Reference

### `videoToFrames(options)`

Returns a `Promise` that resolves when extraction is complete.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `videoPath` | `string` | **Required** | Path to the source video file |
| `outputDir` | `string` | `'frames'` | Directory to save extracted images |
| `fps` | `number` | `24` | Frames per second to extract |
| `pattern` | `string` | `'frame_%04d.png'` | Output filename pattern (FFmpeg syntax) |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Vignesh Gawali](https://github.com/vbg3008)
