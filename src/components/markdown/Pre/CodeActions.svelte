<script>
  import Button from 'san-webkit-next/ui/core/Button'
  import { copy } from 'san-webkit-next/utils'

  let { code, isExplorer } = $props()

  let explanation = $state('Copy code')

  function handleCopy() {
    explanation = 'Copied'

    copy(code, () => (explanation = 'Copy link'), 1500)
  }
</script>

<div
  class="absolute top-0 right-0 bg-[linear-gradient(270deg,#fff,#fff,60%,hsla(0,0%,100%,0))]"
>
  <Button
    icon="copy"
    variant="plain"
    class="w-11"
    onclick={handleCopy}
    {explanation}
  ></Button>
</div>
