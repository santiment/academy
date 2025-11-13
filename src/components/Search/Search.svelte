<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Input from 'san-webkit-next/ui/core/Input'
  import styles from './Search.module.scss'
</script>

<div class={cn(styles.wrapper, styles.wrapper__small)}>
  <Input
    id="search"
    inputClass={styles.input}
    placeholder="Search docs"
    icon="search"
  />
</div>
