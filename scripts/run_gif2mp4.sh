#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
GIF2MP4="$SCRIPT_DIR/gif2mp4.sh"

usage() {
  cat <<'HELP'
Usage: run_gif2mp4.sh --dir <directory> [--quality high|medium|low]

Recursively converts all .gif files in <directory> to .mp4 (in-place),
then updates all text files that reference them (.md, .mdx, .astro, .html, .jsx, .tsx)
to point to the .mp4 instead.
HELP
  exit 1
}

DIR=""
QUALITY="medium"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dir)     DIR="$2";     shift 2 ;;
    --quality) QUALITY="$2"; shift 2 ;;
    *) usage ;;
  esac
done

[[ -z "$DIR" ]] && usage
[[ ! -d "$DIR" ]] && echo "Error: $DIR is not a directory" && exit 1

# Find all gifs recursively
gifs=()
while IFS= read -r -d '' f; do
  gifs+=("$f")
done < <(find "$DIR" -type f -iname '*.gif' -print0)

if [[ ${#gifs[@]} -eq 0 ]]; then
  echo "No .gif files found in $DIR"
  exit 0
fi

echo "Found ${#gifs[@]} gif(s). Converting with --quality $QUALITY ..."
echo ""

# Convert each gif in place (output to same directory as the gif)
for gif in "${gifs[@]}"; do
  gif_dir="$(dirname "$gif")"
  bash "$GIF2MP4" --input "$gif" --output "$gif_dir" --quality "$QUALITY"
done

echo ""
echo "Updating references in content files..."

# Update references in text/content files
for gif in "${gifs[@]}"; do
  filename="$(basename "$gif")"
  mp4name="${filename%.gif}.mp4"

  # Find content files that reference this gif and replace
  grep -rl --include='*.md' --include='*.mdx' --include='*.astro' \
           --include='*.html' --include='*.jsx' --include='*.tsx' \
           "$filename" "$DIR" 2>/dev/null | while read -r file; do
    # Replace markdown image syntax ![...](file.gif) with <video> tag
    sed -i '' "s|!\[[^]]*\](${filename})|<video autoplay loop muted playsinline>\\
  <source src=\"./${mp4name}\" type=\"video/mp4\" />\\
</video>|g" "$file"
    # Also replace any remaining bare references (e.g. in HTML src attributes)
    sed -i '' "s|${filename}|${mp4name}|g" "$file"
    echo "  Updated: $file ($filename -> $mp4name)"
  done
done

echo ""
echo "Removing original .gif files..."
for gif in "${gifs[@]}"; do
  rm "$gif"
  echo "  Deleted: $gif"
done

echo ""
echo "Done."
