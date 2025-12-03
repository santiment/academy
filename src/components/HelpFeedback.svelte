<script lang="ts">
  import HelpFeedback from 'san-webkit-next/ui/app/HelpFeedback'
  import OnlyOnDevice from 'san-webkit-next/ui/utils/OnlyOnDevice'
  import { onSupportClick } from 'san-webkit-next/utils'
</script>

<OnlyOnDevice desktop>
  <HelpFeedback class="fixed right-0 rounded-r-none top-1/2 -translate-y-1/2 z-50" onclick={onSupportClick} />
</OnlyOnDevice>

