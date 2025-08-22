<svelte:options customElement={{ tag: "ai-button", shadow: "none" }} />

<script lang="ts">
  import AIChatbot, { useAIChatbotCtx } from "san-webkit-next/ui/app/AIChatbot"

  useAIChatbotCtx.set({
    dashboardId: "1099",
    asset: "ethereum",
    metrics: [
      "price_usd",
      "social_volume_total",
      "social_dominance_total",
      "sentiment_positive_total",
      "sentiment_negative_total",
    ],
  })
</script>

<AIChatbot />
