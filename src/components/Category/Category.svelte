<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import { titleToSlug } from '../../utils/docs'
  import styles from './Category.module.scss'

  const { wide, title, description, icon: Icon, maxWidth } = $props()

  let isHover = $state(false)
  const slug = titleToSlug(title)

  const setHover = () => {
    if (!isHover) {
      isHover = true
    }
  }

  const removeHover = () => {
    if (isHover) {
      isHover = false
    }
  }
</script>

<a
  href={`/${slug}/`}
  class={cn(styles.block, wide && styles.wide)}
  ontouchstart={setHover}
  onmouseenter={setHover}
  ontouchend={removeHover}
  ontouchcancel={removeHover}
  onmouseleave={removeHover}
>
  <div class={styles.icon}>
    <Icon withColor={isHover} />
  </div>

  <div style:maxWidth>
    <h4 class={styles.title}>{title}</h4>
    <p class={styles.length}>{description}</p>
  </div>
</a>
