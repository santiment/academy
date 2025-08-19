<svelte:options customElement="ai-button" />

<script lang="ts">
  // import Button from "san-webkit-next/ui/core/Button/Button.svelte"
  import { ONE_YEAR_IN_MS } from "san-webkit-next/utils/dates"
</script>

<!-- <Button variant="fill">Aboba</Button> -->
<h2 class="text-xl text-red">Hello!</h2>

<p>{ONE_YEAR_IN_MS}</p>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @import "san-webkit-next/app.css";
</style>
