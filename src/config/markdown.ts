import Blockquote from '$components/markdown/Blockquote.svelte'
import Link from '$components/markdown/Link.svelte'
import * as Headings from '$components/markdown/headings'

export const MARKDOWN_COMPONENTS = {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  a: Link,
  blockquote: Blockquote,
}
