export const ROOT_SECTIONS: Record<string, { label: string; items: string[] }> =
  {
    'getting-started': {
      label: 'Getting started',
      items: [
        'santiment-introduction',
        'for-traders',
        'for-developers',
        'for-ai',
      ],
    },
    guides: {
      label: 'Guides',
      items: [
        'education-and-use-cases',
        'sanbase',
        'santiment-queries',
        'sanapi',
        'sansheets',
        'products-and-plans',
        'san-tokens',
        'glossary',
        'youtube-videos',
      ],
    },
    resources: {
      label: 'Resources',
      items: ['metrics', 'changelog', 'labels', 'data-anomaly'],
    },
    'ai-toolkit': {
      label: 'AI Toolkit',
      items: ['mcp-connector', 'santiment-skills', 'ai-for-social-trends'],
    },
  }

export const SECTION_BY_ITEM: Record<string, string> = Object.fromEntries(
  Object.entries(ROOT_SECTIONS).flatMap(([section, { items }]) =>
    items.map((item) => [item, section]),
  ),
)
