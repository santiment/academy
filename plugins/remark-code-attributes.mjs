import { visit } from 'unist-util-visit';

export function remarkCodeAttributes() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'graphql-explorer') {
        node.lang = 'graphql';
      }

      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};

      node.data.hProperties['data-language'] = node.lang;

      node.data.hProperties['data-code'] = encodeURIComponent(node.value);
    });
  };
}
