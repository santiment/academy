#!/usr/bin/env python3
"""
Generate llms.txt file for Santiment Academy

Scans markdown files in src/content/docs and produces an llms.txt that mirrors
the public URLs served by Astro's content collection. Root sections listed in
ROOT_SECTIONS are stripped from the public slug, matching src/modules/navigation/paths.ts.

Requirements:
    pip install pyyaml

Usage:
    python scripts/generate_llms_txt.py
"""

import re
from pathlib import Path
from typing import Dict, List, Tuple
import yaml


ROOT_SECTIONS = {
    'getting-started',
    'guides',
    'resources',
    'ai-toolkit',
}


def extract_frontmatter(content: str) -> Dict[str, object]:
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(frontmatter_pattern, content, re.DOTALL)

    if match:
        try:
            return yaml.safe_load(match.group(1)) or {}
        except yaml.YAMLError:
            return {}
    return {}


def get_title_from_frontmatter(content: str, filepath: Path) -> str:
    frontmatter = extract_frontmatter(content)

    if 'title' in frontmatter:
        return frontmatter['title']

    filename = filepath.stem
    if filename == 'index':
        filename = filepath.parent.name

    return filename.replace('-', ' ').replace('_', ' ').title()


def is_hidden(content: str) -> bool:
    frontmatter = extract_frontmatter(content)
    sidebar = frontmatter.get('sidebar') or {}
    if isinstance(sidebar, dict):
        return bool(sidebar.get('hidden'))
    return False


def get_public_slug(filepath: Path, docs_root: Path) -> str:
    """Mirror src/modules/navigation/paths.ts::getPublicSlug.

    doc.id from Astro's glob loader is the path relative to docs_root with the
    file extension stripped; for index files Astro drops the trailing /index.
    If the first segment is a known root section, it is stripped from the URL.
    """
    rel_path = filepath.relative_to(docs_root)
    parts = list(rel_path.parts)

    # Strip extension on final segment.
    last = parts[-1]
    if last.endswith('.mdx'):
        parts[-1] = last[:-4]
    elif last.endswith('.md'):
        parts[-1] = last[:-3]

    # Drop trailing 'index' segment (Astro strips /index from doc.id).
    if parts and parts[-1] == 'index':
        parts = parts[:-1]

    # Strip leading root-section segment.
    if parts and parts[0] in ROOT_SECTIONS:
        parts = parts[1:]

    if not parts:
        return '/'
    return '/' + '/'.join(parts) + '/'


def collect_markdown_files(docs_root: Path) -> List[Tuple[str, str, Path]]:
    markdown_files = []

    paths = sorted(
        list(docs_root.rglob('*.md')) + list(docs_root.rglob('*.mdx'))
    )

    for md_file in paths:
        if not md_file.is_file():
            continue
        try:
            content = md_file.read_text(encoding='utf-8')
        except Exception as e:
            print(f"Warning: Could not read {md_file}: {e}")
            continue

        if is_hidden(content):
            continue

        title = get_title_from_frontmatter(content, md_file)
        url_path = get_public_slug(md_file, docs_root)
        markdown_files.append((title, url_path, md_file))

    markdown_files.sort(key=lambda x: x[1])
    return markdown_files


def generate_llms_txt(
    markdown_files: List[Tuple[str, str, Path]], base_url: str
) -> str:
    lines = [
        "# Santiment Academy",
        "",
        "## Docs",
        "",
    ]

    for title, url_path, _ in markdown_files:
        full_url = f"{base_url}{url_path}"
        lines.append(f"- [{title}]({full_url}): {title}")

    return '\n'.join(lines) + '\n'


def main():
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    docs_root = project_root / 'src' / 'content' / 'docs'
    static_dir = project_root / 'static'
    output_file = static_dir / 'llms.txt'

    base_url = "https://academy.santiment.net"

    print(f"Scanning markdown files in: {docs_root}")

    if not docs_root.exists():
        print(f"Error: Docs directory not found at {docs_root}")
        return 1

    markdown_files = collect_markdown_files(docs_root)

    print(f"Found {len(markdown_files)} markdown files")

    llms_txt_content = generate_llms_txt(markdown_files, base_url)

    output_file.parent.mkdir(parents=True, exist_ok=True)
    output_file.write_text(llms_txt_content, encoding='utf-8')

    print(f"Generated: {output_file}")
    print(f"Available at: {base_url}/llms.txt")

    return 0


if __name__ == '__main__':
    exit(main())
