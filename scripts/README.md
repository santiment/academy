# Scripts

## GIF to MP4 Conversion

Two scripts work together to convert GIF files to MP4 and update content references.

### Prerequisites

- [ffmpeg](https://ffmpeg.org/) must be installed (`brew install ffmpeg`)

### `run_gif2mp4.sh` (recommended)

All-in-one script: recursively finds GIFs in a directory, converts them to MP4, updates references in content files (`.md`, `.mdx`, `.astro`, `.html`, `.jsx`, `.tsx`), and deletes the original GIFs.

Markdown image references like `![alt](file.gif)` are replaced with:

```html
<video autoplay loop muted playsinline>
  <source src="./file.mp4" type="video/mp4" />
</video>
```

**Usage:**

```bash
# Convert all GIFs in a content directory (medium quality by default)
./scripts/run_gif2mp4.sh --dir src/content/docs/guides/sanbase/charts

# With a specific quality preset
./scripts/run_gif2mp4.sh --dir src/content/docs/guides/sanbase/charts --quality high
```

### `gif2mp4.sh`

Lower-level script that converts GIF files to MP4 without updating any references. Useful for one-off conversions.

**Usage:**

```bash
# Convert a single GIF
./scripts/gif2mp4.sh --input path/to/file.gif --output path/to/output/

# Convert all GIFs in a directory
./scripts/gif2mp4.sh --input path/to/gifs/ --output path/to/output/

# With a specific quality preset
./scripts/gif2mp4.sh --input file.gif --output . --quality low
```

### Quality Presets

| Preset   | CRF | Resolution | Notes                              |
| -------- | --- | ---------- | ---------------------------------- |
| `high`   | 23  | Full       | Best visual quality                |
| `medium` | 30  | Full       | Good balance of quality and size (default) |
| `low`    | 38  | 75%        | Maximum compression, 15fps cap     |
