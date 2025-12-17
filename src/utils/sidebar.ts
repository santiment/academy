import { getCollection } from 'astro:content';

export type SidebarLink = {
  type: 'link';
  title: string;
  href: string;
  slug: string;
  order: number;
};

export type SidebarGroup = {
  type: 'group';
  title: string;
  href?: string;
  items: SidebarItem[];
  order: number;
};

export type SidebarItem = SidebarLink | SidebarGroup;

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

const ROOT_SECTIONS: Record<string, string> = {
  'getting-started': 'Getting Started',
  'guides': 'Guides',
  'resources': 'Resources',
};

function sortSidebarItems(items: SidebarItem[]) {
  items.sort((a, b) => a.order - b.order);

  items.forEach((item) => {
    if (item.type === 'group') {
      sortSidebarItems(item.items);
    }
  });
}

export async function getSidebar(): Promise<SidebarSection[]> {
  const collection = await getCollection('docs');

  const validDocs = collection.filter((doc) => {
    if (doc.data.hidden) return false;
    const isIndexFile = doc.filePath?.endsWith('/index.mdx');
    if (!isIndexFile) return false;

    const rootSectionKey = doc.id.split('/')[0];
    const isAllowedSection = !!ROOT_SECTIONS[rootSectionKey];

    return isAllowedSection;
  });

  const sidebar: Record<string, SidebarSection> = {};
  Object.keys(ROOT_SECTIONS).forEach((key) => {
    sidebar[key] = {
      title: ROOT_SECTIONS[key],
      items: []
    };
  });

  const itemMap = new Map<string, SidebarItem>();

  validDocs.forEach((doc) => {
    const hasChildren = validDocs.some(
      (otherDoc) => otherDoc !== doc && otherDoc.id.startsWith(doc.id + '/')
    );

    const title = doc.data.sidebarLabel || doc.data.title;

    const commonProps = {
      title,
      href: `/${doc.id}/`,
      order: doc.data.sidebarOrder ?? 999,
    };

    if (hasChildren) {
      const groupItem: SidebarGroup = {
        type: 'group',
        ...commonProps,
        items: [],
      };
      itemMap.set(doc.id, groupItem);
    } else {
      const linkItem: SidebarLink = {
        type: 'link',
        ...commonProps,
        slug: doc.id,
      };
      itemMap.set(doc.id, linkItem);
    }
  });

  validDocs.forEach((doc) => {
    const currentItem = itemMap.get(doc.id);

    if (!currentItem) return;

    const parts = doc.id.split('/');
    const rootSectionKey = parts[0];

    const parentId = parts.slice(0, -1).join('/');
    const parentItem = itemMap.get(parentId);

    if (parentItem && parentItem.type === 'group') {
      parentItem.items.push(currentItem);
    } else {
      const section = sidebar[rootSectionKey];

      if (section) {
        section.items.push(currentItem);
      }
    }
  });

  const result = Object.values(sidebar);

  result.forEach((section) => {
    sortSidebarItems(section.items);
  });

  return result;
}
