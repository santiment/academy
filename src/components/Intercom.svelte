<script lang="ts">
  import { onMount, type Snippet } from 'svelte'

  const app_id = 'cyjjko9u'

  type TProps = {
    children: Snippet
  }

  const { children }: TProps = $props()

  // TODO: Probably need to add auth

  onMount(() => {
    const settings = {
      app_id,
      action_color: '#14c393',
      hide_default_launcher: true,
    }

    window.intercomSettings = settings

    if (typeof window.Intercom === 'function') {
      window.Intercom('boot', settings)
    } else {
      const script = document.createElement('script')
      script.src = `https://widget.intercom.io/widget/${app_id}`
      script.async = true
      script.onload = () => {
        window.Intercom?.('boot', settings)
      }
      document.head.appendChild(script)
    }
  })
</script>
