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
  items: SidebarLink[];
  order: number;
};

export type SidebarItem = SidebarLink | SidebarGroup;

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

// Конфигурация корневых разделов
const ROOT_SECTIONS: Record<string, string> = {
  'getting-started': 'Getting Started',
  'guides': 'Guides',
  'resources': 'Resources',
};

function formatTitle(slugPart: string): string {
  return slugPart
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

export async function getSidebar(): Promise<SidebarSection[]> {
  const allDocs = await getCollection('docs');

  // Инициализируем структуру разделов
  const sidebar: Record<string, SidebarSection> = {};
  Object.keys(ROOT_SECTIONS).forEach(key => {
    sidebar[key] = { title: ROOT_SECTIONS[key], items: [] };
  });

  // Временное хранилище для группировки: Section -> GroupName -> Items[]
  const groupedDocs: Record<string, Record<string, SidebarLink[]>> = {};

  allDocs.forEach((doc) => {
    if (doc.data.hidden) return;

    // ВАЖНО: doc.id уже является чистым слагом (напр. 'guides/products-and-plans')
    // Нам не нужно вырезать .mdx через regex, если id приходит чистым.
    const parts = doc.id.split('/');
    const rootSection = parts[0];

    // Если раздел не описан в ROOT_SECTIONS, пропускаем (или можно добавить логику для 'Other')
    if (!ROOT_SECTIONS[rootSection]) return;

    // Логика подкатегорий: 
    // Если частей > 2 (guides/folder/item), то группа = folder. 
    // Иначе (guides/item), группа = 'root'.
    const subCategory = parts.length > 2 ? parts[1] : 'root';

    const item: SidebarLink = {
      type: 'link',
      title: doc.data.title || formatTitle(parts[parts.length - 1]),
      slug: doc.id,         // Используем id как slug
      href: `/docs/${doc.id}/`, // Добавляем префикс docs (если нужно)
      order: doc.data.sidebarOrder ?? 999
    };

    if (!groupedDocs[rootSection]) groupedDocs[rootSection] = {};
    if (!groupedDocs[rootSection][subCategory]) groupedDocs[rootSection][subCategory] = [];

    groupedDocs[rootSection][subCategory].push(item);
  });

  // Собираем итоговый массив
  Object.keys(sidebar).forEach((sectionKey) => {
    const groups = groupedDocs[sectionKey] || {};
    const sectionItems: SidebarItem[] = [];

    // 1. Добавляем элементы корневого уровня (без папок)
    if (groups['root']) {
      groups['root'].sort((a, b) => a.order - b.order);
      sectionItems.push(...groups['root']);
    }

    // 2. Обрабатываем группы (папки)
    Object.keys(groups).forEach((subKey) => {
      if (subKey === 'root') return;

      let subItems = groups[subKey].sort((a, b) => a.order - b.order);

      // Пытаемся найти "Индексный файл" группы.
      // Это либо файл с именем папки, либо файл index внутри папки.
      const expectedBasePath = `${sectionKey}/${subKey}`;

      const indexDoc = subItems.find(i =>
        i.slug === expectedBasePath || i.slug === `${expectedBasePath}/index`
      );

      let groupTitle = formatTitle(subKey);
      let groupHref: string | undefined = undefined;
      let groupOrder = 999;

      if (indexDoc) {
        // Если нашли индексный файл, берем его данные для заголовка группы
        groupTitle = indexDoc.title;
        groupHref = indexDoc.href;
        groupOrder = indexDoc.order;
        // Убираем сам индексный файл из выпадающего списка
        subItems = subItems.filter(i => i.slug !== indexDoc!.slug);
      } else {
        // Если индекса нет, берем order первого элемента, чтобы группа не улетела вниз
        if (subItems.length > 0) groupOrder = subItems[0].order;
      }

      // Edge case: Если после удаления индекса папка пуста -> рендерим как просто ссылку
      if (subItems.length === 0 && indexDoc) {
        sectionItems.push({
          type: 'link',
          title: groupTitle,
          href: groupHref!,
          slug: indexDoc.slug,
          order: groupOrder
        });
      } else {
        // Иначе рендерим как группу
        sectionItems.push({
          type: 'group',
          title: groupTitle,
          href: groupHref,
          items: subItems,
          order: groupOrder
        });
      }
    });

    // Финальная сортировка внутри секции (перемешивает группы и отдельные файлы по order)
    sectionItems.sort((a, b) => a.order - b.order);
    sidebar[sectionKey].items = sectionItems;
  });

  return Object.values(sidebar);
}
