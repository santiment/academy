<svelte:options customElement={{ tag: "ai-button", shadow: "none" }} />

<script lang="ts">
  import {
    AskAIButton,
    useAIChatbotCtx,
  } from "san-webkit-next/ui/app/AIChatbot"

  useAIChatbotCtx.set({
    type: "ACADEMY_QA",
  })
</script>

<AskAIButton />
