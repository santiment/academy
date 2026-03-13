#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'HELP'
Usage: gif2mp4.sh --input <dir_or_file> --output <dir> [--quality high|medium|low]

Quality presets:
  high   - best visual quality, moderate compression (CRF 23, full resolution)
  medium - good balance of quality and size          (CRF 30, full resolution)  [default]
  low    - maximum compression, noticeable quality loss (CRF 38, scaled to 75%, 15fps cap)
HELP
  exit 1
}

INPUT=""
OUTPUT=""
QUALITY="medium"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --input)   INPUT="$2";   shift 2 ;;
    --output)  OUTPUT="$2";  shift 2 ;;
    --quality) QUALITY="$2"; shift 2 ;;
    *) usage ;;
  esac
done

[[ -z "$INPUT" || -z "$OUTPUT" ]] && usage

# Set encoding params based on quality
case "$QUALITY" in
  high)
    CRF=23
    VF="scale=trunc(iw/2)*2:trunc(ih/2)*2"
    EXTRA_ARGS=()
    ;;
  medium)
    CRF=30
    VF="scale=trunc(iw/2)*2:trunc(ih/2)*2"
    EXTRA_ARGS=()
    ;;
  low)
    CRF=38
    VF="fps=15,scale=trunc(iw*0.75/2)*2:trunc(ih*0.75/2)*2"
    EXTRA_ARGS=()
    ;;
  *)
    echo "Error: --quality must be high, medium, or low"
    exit 1
    ;;
esac

mkdir -p "$OUTPUT"

convert_gif() {
  local gif="$1"
  local outdir="$2"
  local basename
  basename="$(basename "$gif" .gif)"
  local mp4="${outdir}/${basename}.mp4"

  echo "Converting ($QUALITY): $gif -> $mp4"

  ffmpeg -y -i "$gif" \
    -movflags faststart \
    -pix_fmt yuv420p \
    -vf "$VF" \
    -c:v libx264 \
    -crf "$CRF" \
    -preset veryslow \
    ${EXTRA_ARGS[@]+"${EXTRA_ARGS[@]}"} \
    "$mp4" 2>/dev/null

  local gif_size mp4_size
  gif_size=$(stat -f%z "$gif" 2>/dev/null || stat -c%s "$gif")
  mp4_size=$(stat -f%z "$mp4" 2>/dev/null || stat -c%s "$mp4")
  local ratio
  ratio=$(echo "scale=1; 100 - ($mp4_size * 100 / $gif_size)" | bc)

  echo "  $(numfmt --to=iec "$gif_size" 2>/dev/null || echo "${gif_size}B") -> $(numfmt --to=iec "$mp4_size" 2>/dev/null || echo "${mp4_size}B") (${ratio}% smaller)"
}

if [[ -d "$INPUT" ]]; then
  shopt -s nullglob
  gifs=("$INPUT"/*.gif)
  if [[ ${#gifs[@]} -eq 0 ]]; then
    echo "No .gif files found in $INPUT"
    exit 1
  fi
  for gif in "${gifs[@]}"; do
    convert_gif "$gif" "$OUTPUT"
  done
elif [[ -f "$INPUT" ]]; then
  convert_gif "$INPUT" "$OUTPUT"
else
  echo "Error: $INPUT is not a valid file or directory"
  exit 1
fi

echo "Done."
