# Scripts

## generate_llms_txt.py

Generates an `llms.txt` file for Santiment Academy that follows the [llms.txt](https://modelcontextprotocol.io/llms.txt) format.

### What it does

1. Scans all markdown files in `src/docs/`
2. Extracts titles from frontmatter
3. Generates `static/llms.txt` with links to all documentation
4. Copies raw markdown files to `static/raw/` for direct access

### Requirements

```bash
pip install pyyaml
```

### Usage

```bash
python3 scripts/generate_llms_txt.py
```

Or make it executable:

```bash
chmod +x scripts/generate_llms_txt.py
./scripts/generate_llms_txt.py
```

### Output

- `static/llms.txt` - Index file accessible at `https://academy.santiment.net/llms.txt`
- `static/raw/**/*.md` - Raw markdown files accessible at `https://academy.santiment.net/raw/...`

### Integration

You can add this script to your build process or run it before deployment to ensure the llms.txt file is always up to date.

#### Option 1: Commit Generated Files (Recommended)

Run the script and commit the generated files to your repository:

```bash
python3 scripts/generate_llms_txt.py
git add static/llms.txt static/raw/
git commit -m "Update llms.txt"
```

This ensures the files are always available without requiring a build step.

#### Option 2: Generate at Build Time

Add to your CI/CD pipeline or build script:

```bash
python3 scripts/generate_llms_txt.py
gatsby build
```

If using this option, add to `.gitignore`:

```
# Generated llms.txt files
static/llms.txt
static/raw/
```

#### Git Pre-commit Hook (optional)

To automatically regenerate on commit:

```bash
#!/bin/sh
python3 scripts/generate_llms_txt.py
git add static/llms.txt static/raw/
```

### Example llms.txt Output

```
# Santiment Academy

## Docs

- [Getting started with Santiment](https://academy.santiment.net/raw/santiment-introduction/index.md): Getting started with Santiment
- [Active Addresses 24h](https://academy.santiment.net/raw/metrics/active-addresses-24h/index.md): Active Addresses 24h
...
```

