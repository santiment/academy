<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import { titleToSlug } from '../../utils/docs'
  import styles from './Category.module.scss'

  const { wide, title, description, icon: Icon, maxWidth } = $props()

  let isHover = $state(false)
  const slug = titleToSlug(title)
</script>

<a
  href={`/${slug}/`}
  class={cn(styles.block, wide && styles.wide)}
  ontouchstart={() => (isHover = true)}
  onmouseenter={() => (isHover = true)}
  ontouchend={() => (isHover = false)}
  ontouchcancel={() => (isHover = false)}
  onmouseleave={() => (isHover = false)}
>
  <div class={styles.icon}>
    <Icon withColor={isHover} />
  </div>

  <div style:max-width={maxWidth}>
    <h4 class={styles.title}>{title}</h4>
    <p class={styles.length}>{@html description}</p>
  </div>
</a>
