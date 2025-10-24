<svelte:options customElement={{ tag: "ai-button", shadow: "none" }} />

<script lang="ts">
  import {
    AskAIButton,
    useAIChatbotCtx,
  } from "san-webkit-next/ui/app/AIChatbot"
  import { onMount } from "svelte"

  useAIChatbotCtx.set({
    type: "ACADEMY_QA",
  })

  const { aiChatbot } = useAIChatbotCtx()

  function handleGlobalPrompt(event: CustomEvent<string>) {
    const prompt = event.detail

    if (prompt) {
      aiChatbot.openWithPrompt(prompt)
    }
  }

  onMount(() => {
    document.addEventListener(
      "ai:openWithPrompt",
      handleGlobalPrompt as EventListener
    )

    return () => {
      document.removeEventListener(
        "ai:openWithPrompt",
        handleGlobalPrompt as EventListener
      )
    }
  })
</script>

<AskAIButton />
