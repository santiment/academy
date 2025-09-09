<svelte:options customElement={{ tag: "ai-input", shadow: "none" }} />

<script lang="ts">
  import { ChatInput } from "san-webkit-next/ui/app/AIChatbot"
  import Button from "san-webkit-next/ui/core/Button"

  let message = $state("")

  function handleSubmit(rawPrompt?: string) {
    const prompt = rawPrompt?.trim()
    if (!prompt) return

    const event = new CustomEvent("ai:openWithPrompt", {
      detail: prompt,
      bubbles: true,
      composed: true,
    })

    document.dispatchEvent(event)
  }

  const queries = [
    "Which are the metrics Santiment is known for?",
    "How can I change my subscription?",
    "Where can I find the TVL metric?",
    "How can I use MVRV to identify tops and bottoms? ",
  ]
</script>

<h1 class="mb-8 text-center text-3xl text-rhino">
  Hi, I’m Turtoshi — your AI guide to Academy
</h1>

<div class="mx-auto max-w-[600px] items-center">
  <ChatInput
    class="mb-3 [&>div]:py-3"
    placeholder="Ask AI..."
    icon={null}
    bind:value={message}
    onSubmit={() => {
      handleSubmit(message)
      message = ""
    }}
  />

  <div class="flex flex-wrap items-center justify-center gap-3">
    {#each queries as query}
      <Button
        size="auto"
        variant="border"
        class="border-porcelain text-xs sm:text-base p-2"
        onclick={() => handleSubmit(query)}
      >
        {query}
      </Button>
    {/each}
  </div>
</div>
