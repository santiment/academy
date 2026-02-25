<script lang="ts">
  import { ChatInput, useAIChatbotCtx } from 'san-webkit-next/ui/app/AIChatbot'
  import Button from 'san-webkit-next/ui/core/Button'

  useAIChatbotCtx.set({
    type: 'ACADEMY_QA',
  })

  const { aiChatbot } = useAIChatbotCtx()

  const queries = [
    'What is Santiment known for?',
    'How can Santiment help me become profitable?',
    'How can I use MVRV to identify tops and bottoms?',
    'What is dev activity metric?',
  ]
</script>

<ChatInput
  class="mb-3 [&>div]:py-3"
  placeholder="Ask AI..."
  icon={null}
  onSubmit={(query) => aiChatbot.openWithPrompt(query)}
/>

<div class="flex flex-wrap items-center justify-center gap-3">
  {#each queries as query}
    <Button
      size="auto"
      variant="border"
      class="border-porcelain text-sm sm:text-base p-2"
      onclick={() => aiChatbot.openWithPrompt(query)}
    >
      {query}
    </Button>
  {/each}
</div>
