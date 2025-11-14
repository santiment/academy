import type { MdsvexOptions } from 'mdsvex';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: MdsvexOptions = {
  extensions: ['.svx', '.md'],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex as any]
}

export default config
