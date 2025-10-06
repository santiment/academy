#!/usr/bin/env python3
"""
Generate llms.txt file for Santiment Academy
This script scans all markdown files in the docs directory and creates an llms.txt file
that provides LLMs with a structured overview of available documentation.
It also copies the raw markdown files to the static directory for direct access.
"""

import os
import re
import shutil
from pathlib import Path
from typing import Dict, List, Tuple
import yaml


def extract_frontmatter(content: str) -> Dict[str, str]:
    """Extract YAML frontmatter from markdown content."""
    frontmatter_pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(frontmatter_pattern, content, re.DOTALL)
    
    if match:
        try:
            return yaml.safe_load(match.group(1)) or {}
        except yaml.YAMLError:
            return {}
    return {}


def get_title_from_frontmatter(content: str, filepath: Path) -> str:
    """Extract title from frontmatter, fallback to filename if not found."""
    frontmatter = extract_frontmatter(content)
    
    if 'title' in frontmatter:
        return frontmatter['title']
    
    # Fallback: use filename and clean it up
    filename = filepath.stem
    if filename == 'index':
        # Use parent directory name
        filename = filepath.parent.name
    
    # Convert kebab-case or snake_case to title case
    title = filename.replace('-', ' ').replace('_', ' ').title()
    return title


def slug_to_url_path(filepath: Path, docs_root: Path) -> str:
    """Convert file path to URL path for the academy site."""
    # Get relative path from docs root
    rel_path = filepath.relative_to(docs_root)
    
    # Remove 'index.md' or just '.md' extension
    parts = list(rel_path.parts)
    if parts[-1] == 'index.md':
        parts = parts[:-1]
    elif parts[-1].endswith('.md'):
        parts[-1] = parts[-1][:-3]
    
    # Join with forward slashes
    if parts:
        return '/' + '/'.join(parts) + '/'
    return '/'


def collect_markdown_files(docs_root: Path) -> List[Tuple[str, str, Path]]:
    """
    Collect all markdown files and return list of (title, url_path, filepath) tuples.
    Returns sorted list.
    """
    markdown_files = []
    
    for md_file in sorted(docs_root.rglob('*.md')):
        if md_file.is_file():
            try:
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                title = get_title_from_frontmatter(content, md_file)
                url_path = slug_to_url_path(md_file, docs_root)
                
                markdown_files.append((title, url_path, md_file))
            except Exception as e:
                print(f"Warning: Could not process {md_file}: {e}")
                continue
    
    return markdown_files


def generate_llms_txt(markdown_files: List[Tuple[str, str, Path]], base_url: str) -> str:
    """Generate the llms.txt content."""
    lines = [
        "# Santiment Academy",
        "",
        "## Docs",
        ""
    ]
    
    for title, url_path, _ in markdown_files:
        # Create the full URL to the raw markdown content
        raw_url = f"{base_url}/raw{url_path}index.md"
        lines.append(f"- [{title}]({raw_url}): {title}")
    
    return '\n'.join(lines) + '\n'


def copy_raw_markdown_files(markdown_files: List[Tuple[str, str, Path]], 
                            docs_root: Path, 
                            output_root: Path) -> None:
    """Copy markdown files to static/raw directory maintaining structure."""
    raw_dir = output_root / 'raw'
    
    # Clean existing raw directory
    if raw_dir.exists():
        shutil.rmtree(raw_dir)
    
    raw_dir.mkdir(parents=True, exist_ok=True)
    
    for title, url_path, source_file in markdown_files:
        # Create destination path
        dest_path = raw_dir / url_path.lstrip('/') / 'index.md'
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Copy the markdown file
        try:
            shutil.copy2(source_file, dest_path)
        except Exception as e:
            print(f"Warning: Could not copy {source_file} to {dest_path}: {e}")
    
    print(f"Copied {len(markdown_files)} markdown files to {raw_dir}")


def main():
    """Main function to generate llms.txt file."""
    # Determine paths
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    docs_root = project_root / 'src' / 'docs'
    static_dir = project_root / 'static'
    output_file = static_dir / 'llms.txt'
    
    # Base URL for the academy site
    base_url = "https://academy.santiment.net"
    
    print(f"Scanning markdown files in: {docs_root}")
    
    if not docs_root.exists():
        print(f"Error: Docs directory not found at {docs_root}")
        return 1
    
    # Collect all markdown files
    markdown_files = collect_markdown_files(docs_root)
    
    print(f"Found {len(markdown_files)} markdown files")
    
    # Copy raw markdown files to static directory
    copy_raw_markdown_files(markdown_files, docs_root, static_dir)
    
    # Generate llms.txt content
    llms_txt_content = generate_llms_txt(markdown_files, base_url)
    
    # Ensure output directory exists
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    # Write to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(llms_txt_content)
    
    print(f"Successfully generated: {output_file}")
    print(f"File will be available at: {base_url}/llms.txt")
    print(f"Raw markdown files will be available at: {base_url}/raw/...")
    
    return 0


if __name__ == '__main__':
    exit(main())

